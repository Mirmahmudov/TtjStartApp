import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

function StudentUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fulname: "",
    phone: "",
    jins: "",
    kurs: "",
    guruh: "",
    fakultet: "",
    tutor: "",
    manzil: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/` + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/` + id, values)
      .then((res) => {
        console.log(res);
        navigate("/studentwait");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create">
      <Link to={"/"} className="exit">
        <IoClose />
      </Link>
      <h2>add user</h2>
      <form action="" onSubmit={handleUpdate}>
        <div className="inputs">
          <label htmlFor="FullName">
            FISH kiriting
            <input
              type="text"
              placeholder="FISH"
              value={values.fulname}
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
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </label>
        </div>
        <div className="inputs">
          <label htmlFor="">
            Jinsingizni kiriting <br />
            <select
              onChange={(e) => setValues({ ...values, jins: e.target.value })}
              value={values.jins}
            >
              <option value="erkak">erkak</option>
              <option value="ayol">ayol</option>
            </select>
          </label>

          <label htmlFor="kurs">
            kursni tanlang <br />
            <select
              onChange={(e) => setValues({ ...values, kurs: e.target.value })}
              value={values.kurs}
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
              value={values.guruh}
              onChange={(e) => setValues({ ...values, guruh: e.target.value })}
            />
          </label>
          <label htmlFor="fakultet">
            fakultetni kirting
            <input
              type="text"
              placeholder="fakultetni kiriting"
              value={values.fakultet}
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
              value={values.tutor}
              onChange={(e) => setValues({ ...values, tutor: e.target.value })}
            />
          </label>
          <label htmlFor="Manzil">
            Manzilni kiriting
            <input
              type="text"
              placeholder="Manzilni Kiriting"
              value={values.manzil}
              onChange={(e) => setValues({ ...values, manzil: e.target.value })}
            />
          </label>
        </div>
        <div className="inputs">
          <button>Add Now</button>
          <Link to={"/studentwait"}>exit</Link>
        </div>
      </form>
    </div>
  );
}

export default StudentUpdate;
