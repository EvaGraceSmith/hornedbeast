
import React from 'react';

class HornForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.props.hornDropdown(this.state.value); 
      console.log('number of horns ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <select value={this.state.value} onChange={this.handleChange} placeholder="Filter by number of horns.">
           <option value="All">All Horns</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </select>
        
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  



  export default HornForm;