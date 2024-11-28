// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    name: "M Hung",
    address: "Ha Noi",
    age: 20,
  };

  handleClick = (event) => {
    console.log(">> click me my button");
    console.log("Random ", Math.floor(Math.random() * 100 + 1));

    //merge State => react class
    this.setState({
      name: "Roy",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  };

  handleOnMoverOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // bad code
  // this.state.age = event.target.value
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm age {this.state.age}
        <br></br>
        {/* <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click Me!
        </button>

        <button onMouseOver={this.handleOnMoverOver}>Hover Me!</button> */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          {/* Name */}
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />

          {/* Age */}
          <label>Your Age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />

          <button>Submit</button>
        </form>
        
        <UserInfor/>
      </div>
    );
  }
}
export default MyComponent;
