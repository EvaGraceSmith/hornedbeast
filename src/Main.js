import React from 'react';
import HornedBeast from './HornedBeast.js'
import beastsData from './Beast.json';

class Main extends React.Component {
    render() {
        console.log("beasts", beastsData);
        return (
            <>
                    {beastsData.map((beast,index)=> (
                        <HornedBeast 
                        title={beast.title} 
                        image_url={beast.image_url} 
                        description={beast.description}
                        key={index}
                         />
                    ))}
            </>
        );
    }
}

export default Main;