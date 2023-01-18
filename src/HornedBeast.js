import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = { likes: 0 }
    }
    handleClickLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });

    };

helpHandleOnShow = () => {
    this.props.handleSelectedBeastOnShow(this.props.title, this.props.image_url, this.props.description);
    this.handleClickLikes();
}




    render() {
        return (
            <>
                <div className='creatureWrapper'>
                    <div className='card'
                        style={{
                            backgroundColor: 'black',
                            border: "10px solid black",
                            boxShadow: '0px 5px 10px 0px rgba(160, 81, 221,0.7)',
                            height: '400px',
                        }}
                    >
                        <h2>{this.props.title}</h2>
                        <div className='bg-image hover-zoom'>
                            <img 
                            style={{borderRadius: "10px"}}
                             onClick={this.helpHandleOnShow}
                             src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                        </div>

                        <div className='textWrap'>
                            {/* <h2>{this.props.title}</h2> */}
                            {/* <p
                            style={{height:'90px',}}
                            >{this.props.description}</p> */}
                            <Button 
                            style={{ 
                                textTransform: 'none',
                                backgroundColor: "rgb(163, 51, 191)",
                                border: "none"
                                 }} 
                                 onClick={this.handleClickLikes} 
                                 className='myButton'>Click image to learn more!</Button>

                            <div className="heartWrapper">
                                <div className="heart"><span>💖</span> <span>{this.state.likes} Favorites!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HornedBeast;