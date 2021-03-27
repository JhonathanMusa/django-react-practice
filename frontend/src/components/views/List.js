import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Axios.get("http://localhost:8000/api/users");
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center bg-white">
        <div className="container">
          <h1 className="display-4">Blog Application</h1>
          <p className="lead">Insert text and see what the people say</p>
        </div>
      </div>

      <table className="table text-center">
        <thead>
          <tr>
            <th>Task</th>
            <th>Created at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.task}</td>
              <td>{user.created_at}</td>
              <td>
                <Link to={"/delete/" + user.id}>
                  <button>Delete</button>
                </Link>
                <Link to={"/update/" + user.id}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
