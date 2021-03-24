import React, { useState, useEffect } from "react";
import { getAllUsers } from "../services/Api";

export default function UserTable(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const userData = await getAllUsers();
    setUsers(userData);
  }

  const loadTable = () => {
    console.log("Loading User Table: ", users);

    return users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
      </tr>
    ));
  };

  return (
    <div className="row">
      <div className="col-12">
        <table className="user-table" id="user-id">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>{loadTable()}</tbody>
        </table>
      </div>
    </div>
  );
}
