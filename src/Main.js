import React from 'react';
import HornedBeast from './HornedBeast.js'
import './Main.css';
import { Col, Container, Row } from 'react-bootstrap';


class Main extends React.Component {
    render() {


        let foundBeasts = this.props.beastData.filter((newBeast, index) => {
            if (newBeast.title.toLowerCase().match(this.props.searchBar.toLowerCase()) != null || !this.props.searchBar) {
                return true;
            }
        });

        let hornedBeasts = foundBeasts.filter((newHornBeast, index) => {
            if (newHornBeast.horns == this.props.numberOfHorns || !this.props.numberOfHorns ||
                this.props.numberOfHorns == "All") { return true; }
        });



        let beasts = hornedBeasts.map((newBeast, index) => {
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
                        {beasts}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;