import { render } from "@testing-library/react";
import React from "react"; 
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>
<h1> Hi</h1>
<p>this a paragraph</p>
<Main title='Unicorn' description= 'white and fluffy'/>
<Main title='Rhino' description= 'grey and angry'/>
<Footer/>
</div>
    )
  }
}


export default App;
