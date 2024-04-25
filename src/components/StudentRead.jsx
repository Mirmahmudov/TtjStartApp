import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function StudentRead() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Read">
      {
        <div className="user">
          <Link to={"/"} className="exit">
            <IoClose />
          </Link>

          <h1>students</h1>
          <div className="row">
            <h3>FISH:</h3>
            <p>{data.fulname}</p>
          </div>
          <div className="row">
            <h3>manzil:</h3>
            <p>{data.manzil}</p>
          </div>
          <div className="row">
            <h3>Talim shakli :</h3>
            <p>{data.type}</p>
          </div>
          <div className="row">
            <h3>Fakultet:</h3>
            <p>{data.fakultet} </p>
          </div>
          <div className="row">
            <h3>Guruh:</h3>
            <p>{data.guruh}</p>
          </div>

          <div className="row">
            <h3>kurs:</h3>
            <p>{data.kurs}</p>
          </div>
          <div className="row">
            <h3>Jinsi:</h3>
            <p>{data.jins}</p>
          </div>
          <div className="row">
            <h3>Tutor:</h3>
            <p>{data.tutor}</p>
          </div>
          <div className="row">
            <h3>Talaba Telefoni:</h3>
            <p>{data.phone}</p>
          </div>
          <div className="row">
            <h3>xona:</h3>
            <p>{data.room}</p>
          </div>
          <div className="btns">
            <Link to={`/studentupdate/${data.id}`}>edit</Link>
          </div>
        </div>
      }
    </div>
  );
}

export default StudentRead;
