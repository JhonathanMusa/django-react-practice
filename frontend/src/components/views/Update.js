import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Update(props) {
  const [comments, setComments] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Axios.get(
          `http://localhost:8000/api/users/${id}`
        );
        setComments(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [id]);

  const handleInput = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateTask = async () => {
      try {
        const { data } = await Axios.put(
          `http://localhost:8000/api/update/${id}`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    updateTask();

    props.history.push("/");
  };

  return (
    <div className=" container mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="input-group"
          type="text"
          onChange={handleInput}
          value={comments.task}
          name="task"
        />

        <button className="btn btn-primary">Delete</button>
      </form>
    </div>
  );
}
