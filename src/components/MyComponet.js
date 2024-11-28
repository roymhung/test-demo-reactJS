// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "M Hung",
    address: "Ha Noi",
    age: 20,
  };

  handleClick(event) {
    console.log(">> click me my button");
    console.log(" My name is ", this.state.name);
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <br></br>
        <button onClick={this.handleClick}>Click Me!</button>
        <button onMouseOver={this.handleOnMoverOver}>Hover Me!</button>
      </div>
    );
  }
}
export default MyComponent;
