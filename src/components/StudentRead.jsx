import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function StudentRead() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Read">
      <Link to={"/"} className="exit">
        <IoClose />
      </Link>
      
    </div>
  );
}

export default StudentRead;
