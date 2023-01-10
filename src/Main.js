import React from 'react';
import HornedBeast from './HornedBeast.js'
import { beastsData } from './Beast.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.setState(beastsData);
    }
    render() {
        return (
            <>
            <HornedBeast title={this.props.title} image_url={this.props.image_url} description={this.props.description} />
            </>
        )
}
}

export default Main;