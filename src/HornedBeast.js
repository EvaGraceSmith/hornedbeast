import React from 'react';
import './HornedBeast.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state={likes:0 }
    }
    handleClickLikes = ()=>{
        this.setState({
            likes:this.state.likes + 1,
        });
    };
    render(){
return (
    <>
               <div className='creatureWrapper'>
                <h2>{this.props.title}</h2>
                <p>{this.state.likes} Likes!</p>
                <Button onClick={this.handleClickLikes}>Click to like this Creature</Button>
                <div className="heartWrapper">
                    <div className="heart">💖</div>
                </div>
                <div className='imageWrapper'>
                <img width= '300px' src={this.props.image_url}alt={this.props.title}title={this.props.title}/>
                </div>
                <p>{this.props.description}</p>
            </div>
    </>
)
    }
}

export default HornedBeast;