import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import beastData from './Beast.json';
import SelectedBeast from './SelectedBeast.js';
import NameForm from './Search.js';
import HornForm from './Horns.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastEmoji: '',
      showModal: false,
      SelectedBeast: '',
      image_url: '',
      description: '',
      searchBar: '',
      numberOfHorns: '',
    }

  }


  addSearchBar = (searchString) => {
    this.setState({
      searchBar: searchString
    });
    console.log("addSearchBar ", this.state.searchBar);
  };

  hornDropdown = (searchHornString) => {
    this.setState({
      numberOfHorns: searchHornString
    });
    console.log("hornDropdown ", this.state.numberOfHorns);
  };


  addBeastEmoji = () => {
    this.setState({
      beastEmoji: this.state.beastEmoji + '🦄',

    });
  };

  handleSelectedBeastOnShow = (beastName, image_url, description) => {
    console.log('handleSelectedBeastOnShow', beastName);
    this.setState({
      showModal: !this.state.showModal,
      SelectedBeast: beastName,
      image_url: image_url,
      description: description,
    });
  };




  render() {
    return (
      <div>
        <Header
          unicornHead={this.state.beastEmoji} />

        <NameForm
          addSearchBar={this.addSearchBar} />

        <HornForm
          hornDropdown={this.hornDropdown} />

        <Main
          addBeastEmoji={this.addbeastEmoji}
          beastData={beastData}
          handleSelectedBeastOnShow={this.handleSelectedBeastOnShow}
          searchBar={this.state.searchBar}
          numberOfHorns={this.state.numberOfHorns}

        />

        <SelectedBeast
          showModal={this.state.showModal}
          SelectedBeast={this.state.SelectedBeast}
          image_url={this.state.image_url}
          description={this.state.description}
          // likes={this.state.SelectedBeast.likes} 
          onClick={this.handleSelectedBeastOnShow} />

        <Footer />
      </div>
    );
  }
}


export default App;
