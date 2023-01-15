import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import beastData from './Beast.json';
import SelectedBeast from './SelectedBeast.js';



class App extends React.Component {
constructor (props){
  super(props);
  this.state = {
    beastEmoji:'',
    showModal: false,
    SelectedBeast:'',
  }

}

addBeastEmoji = ()=>{
  this.setState({
    beastEmoji :this.state.beastEmoji + '🦄',

  });
};

handleSelectedBeastOnShow = (beastName) => {
  console.log('handleSelectedBeastOnShow', beastName);
  this.setState({
    showModal: true,
    SelectedBeast: beastName
  });
};




  render() {
    return (
      <div>
        <Header 
        unicornHead={this.state.beastEmoji}/>

        <Main 
        addBeastEmoji={this.addbeastEmoji}
        beastData={beastData}
        handleSelectedBeastOnShow={this.handleSelectedBeastOnShow}
        />

        <SelectedBeast 
        showModal={this.state.showModal} 
        SelectedBeast={this.state.SelectedBeast} 
        // likes={this.state.SelectedBeast.likes} 
        onClick={this.handleSelectedBeastOnShow} />

        <Footer />
      </div>
    );
  }
}


export default App;
