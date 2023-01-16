import React from 'react';
import HornedBeast from './HornedBeast.js'
// import beastData from './Beast.json';
import './Main.css';
import { Col, Container, Row } from 'react-bootstrap';


class Main extends React.Component {
    render() {

        // let beasts=[];
        // console.log("beasts", beastData);

        let foundbeasts = this.props.beastData.filter((newBeast, index) => {
            console.log('beastData?', this.props.searchBar);
            if (newBeast.title.toLowerCase().match(this.props.searchBar.toLowerCase()) != null || !this.props.searchBar) {
                return true;
            }
        });
        let beasts = foundbeasts.map((newBeast, index) => {
            return (
                <Col>
                    <article>
                        <HornedBeast
                            title={newBeast.title}
                            image_url={newBeast.image_url}
                            description={newBeast.description}
                            key={index}
                            addBeastEmoji={this.props.addBeastEmoji}
                            handleSelectedBeastOnShow={this.props.handleSelectedBeastOnShow} />
                    </article>
                </Col>
            );
        });

        return (
            <div className='main'>
                <Container>
                    <Row lg={4} md={3} sm={2} xs={1}>

                        {/* {beastData.map((beast, index) => ( */}

                        {beasts}
                        {/* <HornedBeast
                                        title={beast.title}
                                        image_url={beast.image_url}
                                        description={beast.description}
                                        key={index}
                                    /> */}

                        {/* ))} */}


                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;