import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function List(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {});
  }, [setUsers]);

  return (
    <div className="mt-5">
      {users.map((detail, id) => (
        <div key={id}>
         <Link to={"/delete/" + detail.pk}>
          <button>Delete</button>
          </Link>
          <div className="card shadow-lg">
            <h2 className="card-header bg-dark">{detail.name}</h2>
            <div className="card-body">
              <p className="text">{detail.text}</p>
              <p>{detail.createAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
