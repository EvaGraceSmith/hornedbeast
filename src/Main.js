import React from 'react';
import HornedBeast from './HornedBeast.js'
import beastsData from './Beast.json';

class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.setState(beastsData);
    // }
    render() {
        console.log(beastsData);
        return (
            <>
            {/* <HornedBeast title={this.props.title} image_url={this.props.image_url} description={this.props.description} /> */}
                   {/* {
          beastsData.map(beast => (
            <HornedBeast title={beast.title} image_url={beast.image_url} description={beast.description} />
          ))
        } */}
            </>
        )
}
}

export default Main;