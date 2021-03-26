import React, { useState } from "react";
import Axios from "axios";

export default function Insert(props) {
  const [comments, setComments] = useState([]);

  const handleInput = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      try {
        const { data } = await Axios.post("http://localhost:8000/api/users/", {
          // name: comments.name,
          // email: comments.email,
          task: comments.task,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    props.history.push("/list");
  };

  return (
    <div className=" container mt-5">
      <form onSubmit={handleSubmit}>
        {/*    <div className="input-group-prepend mb-3">
          <span className="input-group-text bg-dark" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleInput}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text bg-dark" id="basic-addon1">
            @
          </span>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleInput}
          />
        </div> */}

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark">Text</span>
          </div>
          <textarea
            className="form-control "
            aria-label="With textarea"
            name="task"
            onChange={handleInput}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark mb-5 btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
