import React from "react";
import { getAllUsers } from "../services/Api";

export default class ClassApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
    };
  }

  // updateData = (data) => {
  //   this.setState({ rowData: data });
  //   console.log(data)
  // };

  componentDidMount() {
    // const api = getAllUsers();

    // fetch(api)
    getAllUsers()
      // .then(res => res.json())
      .then((res) => this.setState({ rowData: res }))
      .then((res) => console.log(this.state.rowData))
      .catch((err) => console.log(err));
  }

  render() {
    let userList = this.state.rowData
    let counter = 0
    for (var x in userList){
      counter = counter + 1;

    }
    
    return (
      <div>
        <h1> Class Api Example- Users: ({counter})</h1>
<div>
{typeof this.state.rowData === "object" ? (
              <div className="user-box">
                {this.state.rowData.map((userList, key) => (
                  <div  className="table-row" key={userList.id}>
                    <div className="cell-width" >{key + 1}</div>
                    <div  >
                      {userList.name}
                    </div>
                    <div className="cell-width" >
                      <div />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
</div>
      </div>
    );
  }
}
