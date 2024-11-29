// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./Displayinfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "M Hung", age: "20" },
      { id: 2, name: "roy", age: "30" },
      { id: 3, name: "roylee", age: "40" },
    ],
  };
  // JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
