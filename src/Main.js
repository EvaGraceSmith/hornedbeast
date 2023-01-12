import React from 'react';
import HornedBeast from './HornedBeast.js'
import beastsData from './Beast.json';
import './Main.css';
import { Col, Container, Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        console.log("beasts", beastsData);
        return (
            <>
            <Container>
            <Row>
                    {beastsData.map((beast,index)=> (
                      <Col>
                        <HornedBeast 
                        title={beast.title} 
                        image_url={beast.image_url} 
                        description={beast.description}
                        key={index}
                         />
                       </Col>
                    ))}
                      </Row>
              </Container>      
            </>
        );
    }
}

export default Main;