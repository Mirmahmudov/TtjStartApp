import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RoomInfo() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/rooms/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {console.log(data)}
      RoomInfo
    </div>
  );
}

export default RoomInfo;
