
import React from 'react';

class NameForm extends React.Component {
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
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
        
            <input type="text" value={this.state.value} placeholder="Enter Search Here" onChange={this.handleChange} />
          
          <input type="submit" value="Search" />
        </form>
      );
    }
  }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<NameForm />);


  export default NameForm;