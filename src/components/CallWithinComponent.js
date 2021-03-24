//1. create URL to JSON File
//2. Axios get data
//3. after this is working and testing, split out to have:
//3 a. API file
//3 b. Component File that renders the Api file

import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/users`,
});

export default class ApiComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.getData();
  }

  getData = async () => {
    try {
      let data = await api.get(`/`).then(({ data }) => data);
      this.setState({ data: data });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  createUser = async () => {
    let res = await api.post(`/`, { id: 11, name: "tester" });
    console.log(res);
    this.getData();
  };

  deleteUser = async (id) => {
    let data = await api.delete(`/${id}`);
    this.getData();
  };

  updateUser = async (id, val) => {
    let data = await api.patch(`/${id}`, { name: val });
    this.getData();
  };

  render() {
    return (
      <div>
        <h1>Axios Application</h1>
        <button onClick={this.createUser}> Create </button>

        {this.state.data.map((data) => (
          <h2
            key={data.id}
            onClick={() => this.updateUser(data.id, `${data.name}a`)}
          >
            {data.name}{" "}
            <button onClick={() => this.deleteUser(data.id)}>Delete</button>
          </h2>
        ))}
      </div>
    );
  }
}
