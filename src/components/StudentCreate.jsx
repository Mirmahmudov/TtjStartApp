import axios from "axios";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function StudentCreate() {
  const [values, setValues] = useState({
    fulname: "",
    phone: "",
    jins: "erkak",
    kurs: "1-kurs",
    guruh: "",
    fakultet: "",
    tutor: "",
    manzil: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/studentwait");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <Link to={"/students"} className="exit">
        <IoClose />
      </Link>
      <h2>add user</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="FullName">
            FISH kiriting
            <input
              type="text"
              placeholder="FISH"
              onChange={(e) =>
                setValues({ ...values, fulname: e.target.value })
              }
            />
          </label>
          <label htmlFor="">
            telefon raqam kiriting
            <input
              type="text"
              placeholder="telefon raqam kiriting"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </label>
        </div>
        <div className="inputs">
          <label htmlFor="">
            Jinsingizni kiriting <br />
            <select
              value={values.jins}
              onChange={(e) => {
                console.log(values);
                setValues({ ...values, jins: e.target.value });
              }}
            >
              <option value="erkak">erkak</option>
              <option value="ayol">ayol</option>
            </select>
          </label>

          <label htmlFor="kurs">
            kursni tanlang <br />
            <select
              value={values.kurs}
              onChange={(e) => setValues({ ...values, kurs: e.target.value })}
            >
              <option value="1-kurs">1-kurs</option>
              <option value="2-kurs">2-kurs</option>
              <option value="3-kurs">3-kurs</option>
              <option value="4-kurs">4-kurs</option>
            </select>
          </label>
        </div>

        <div className="inputs">
          <label htmlFor="guruh">
            guruhingizni kiriting
            <input
              type="text"
              placeholder="guruhingizni kiriting"
              onChange={(e) => setValues({ ...values, guruh: e.target.value })}
            />
          </label>
          <label htmlFor="fakultet">
            fakultetni kirting
            <input
              type="text"
              placeholder="fakultetni kiriting"
              onChange={(e) =>
                setValues({ ...values, fakultet: e.target.value })
              }
            />
          </label>
        </div>

        <div className="inputs">
          <label htmlFor="tutor">
            tutor FISHni kiriting
            <input
              type="text"
              placeholder="tutor FISHni kiriting"
              onChange={(e) => setValues({ ...values, tutor: e.target.value })}
            />
          </label>
          <label htmlFor="Manzil">
            Manzilni kiriting
            <input
              type="text"
              placeholder="Manzilni Kiriting"
              onChange={(e) => setValues({ ...values, manzil: e.target.value })}
            />
          </label>
        </div>
        <div className="inputs">
          <button>Add Now</button>
        </div>
      </form>
    </div>
  );
}

export default StudentCreate;
