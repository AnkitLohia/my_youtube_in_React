import React, { Component } from 'react'; // {} means import React.Component


class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {searchKey : ''};
  }
  render() {        // render function required for every class
    return (
    <div>
      <input 
      value = {this.state.searchKey}
      onChange = {(event) => {this.setState({searchKey : event.target.value})}} />
      Value of the input: {this.state.searchKey}
    </div>
  );
  }
  
  // all browser events generated by native browser elements like input, div,
  // span or button, when we add event handler generate event object.
  handleInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
// file might have multiple Components.
// This will export only SearchBar Component


/* A controlled Component is one whose value is set by state */
/* onChange is event listener for input which is a controlled Component.
when input is typed on search box, onChange changes state, which calls render()
function and value is updated.*/