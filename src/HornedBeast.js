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
    render() {
        return (
            <>
                <div className='creatureWrapper'>
                    <div className='card'
                        style={{
                            backgroundColor: 'black',
                            boxShadow: '4 4px 8px 0 rgba(0, 0, 0, 0.2)',
                            height: '500px',
                        }}
                    >
                        <div className='bg-image hover-zoom'>
                            <img onClick={this.handleClickLikes} src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                        </div>

                        <div className='textWrap'>
                            <h2>{this.props.title}</h2>
                            <p
                            style={{height:'90px',}}
                            >{this.props.description}</p>
                            <Button style={{ textTransform: 'none' }} onClick={this.handleClickLikes} className='myButton'>Click image to favorite this Creature</Button>

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