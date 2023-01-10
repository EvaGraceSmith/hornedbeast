import { render } from "@testing-library/react";
import React from "react"; 
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {beastsData} from './Beast.js';


class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>

      {
beastsData.map(beast => (
  <Main title={beast.title} image_url={beast.image_url} description={beast.description}/>
))
}
<Footer/>
</div>
    )
  }
}


export default App;
