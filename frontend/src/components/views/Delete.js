import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Insert(props) {
  const [comments, setComments] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Axios.get(
          `http://localhost:8000/api/delete/${id}/`
        );
        setComments(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [setComments, id]);

  const handleInput = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const deleteData = async () => {
      try {
        const { data } = await Axios.delete(
          `http://localhost:8000/api/delete/${id}`,
          comments
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    deleteData();

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
        />

        <button className="btn btn-primary">Delete</button>
      </form>
    </div>
  );
}
