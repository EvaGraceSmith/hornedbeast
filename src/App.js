import { render } from "@testing-library/react";
import React from "react"; 
import Header from './Header.js';
import Beast from './Beast.js';
import Footer from './Footer.js';

class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>
<h1> Hi</h1>
<p>this a paragraph</p>
<Beast name='Unicorn' details= 'white and fluffy'/>
<Footer/>
</div>
    )
  }
}


export default App;
