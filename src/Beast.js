import React from 'react';

class Beast extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.details}</p>
            </div>
        )
    }
}

export default Beast;