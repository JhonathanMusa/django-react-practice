import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {});
  }, [setUsers]);

  return (
    <div className="App">
      {users.map((detail, id) => (
        <div key={id}>
          <h1>{detail.name}</h1>
          <p>{detail.email}</p>
          <p>{detail.text}</p>
          <p>{detail.createAt}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
