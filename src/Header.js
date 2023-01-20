import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
return (
    <div className='header'
    style={{
        boxShadow: '0px 5px 10px 0px rgba(160, 81, 221,0.7)',
    }}>
    <h1 className= 'magic' style={{fontSize: "48px"}}>Keratin-filled Conical Creatures</h1>
    <div className='fakeBottom'><p></p></div>
    </div>
)
    }
}

export default Header;