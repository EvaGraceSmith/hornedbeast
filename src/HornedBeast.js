import React from 'react';
import './HornedBeast.css';
// import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



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
               <CardGroup>
               <Card style={{ width: '18rem'}}>
               <div className='bg-image hover-zoom'>
               <Card.Img onClick={this.handleClickLikes} variant="top" src={this.props.image_url}alt={this.props.title}title={this.props.title} />
               </div>
      <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
                {/* <h2></h2> */}
                 <div className='imageWrapper'>
                </div>
                <Card.Text>
                <p>{this.props.description}</p>
                </Card.Text>
                <Button onClick={this.handleClickLikes}>Click image to favorite this Creature</Button>
                <div className="heartWrapper">
                    <div className="heart">💖 <span>{this.state.likes} Favorites!</span></div>

                </div>
                </Card.Body>
    </Card>
    </CardGroup>
            </div>
    </>
)
    }
}





export default HornedBeast;