import React from "react";

class DisplayInfor extends React.Component {
  state= {
    isShowisUser: true,
  }
  handleShowHide = () => {
    this.setState({
      isShowisUser: !this.state.isShowisUser,
    });
  };

  render() {
    //destructuring array/object
    const { listUsers } = this.props;
    //const listUsers = this.props.listUsers;
    // console.log(listUsers);
    // console.table(listUsers);
    //props => viết tắt properties
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowisUser === true
              ? " Hide list users"
              : " Show list users"}
          </span>
        </div>
        {this.state.isShowisUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div>
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "green" : "red"}
                  >
                    <div>My name's {user.name} </div>
                    <div>My age's {user.age} </div>
                    <hr />
                  </div>
                </div>
              );
            })}
            {/* <div>My name's {name}</div>
          <div>My age's {age}</div>
          <hr />
          <div>My name's {name}</div>
          <div>My age's {age}</div>
          <hr />
          <div>My name's {name}</div>
          <div>My age's {age}</div> */}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
