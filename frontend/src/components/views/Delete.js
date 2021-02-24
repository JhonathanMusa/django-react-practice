import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function Insert(props) {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setComments, id]);

  const handleInput = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.delete(`http://localhost:8000/api/delete/${id}`).then((res) =>
      console.log(res.data)
    );

    props.history.push("/list");
  };

  return (
    <div className=" container mt-5">
      <form onSubmit={handleSubmit}>
        {comments.map((detail) => (
          <div key={detail.pk}>
            <div className="input-group-prepend mb-3">
              <span className="input-group-text bg-dark" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleInput}
                value={detail.name}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-dark">Text</span>
              </div>
              <textarea
                className="form-control "
                aria-label="With textarea"
                name="text"
                onChange={handleInput}
                value={detail.text}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark mb-5 btn-block">
              Delete
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}
