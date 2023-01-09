import { render } from "@testing-library/react";
import React from "react"; 
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {beast} from './Beast.js';


class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>

      {
beast.map(beast => (
  <><h2> {beast.title}</h2><img src={beast.image_url} alt="animal" title="title" /><p>{beast.description}</p></>
))
}
      
<Main title='Unicorn' description= 'white and fluffy'/>
<Main title='Rhino' description= 'grey and angry'/>

<Footer/>
</div>
    )
  }
}


export default App;
