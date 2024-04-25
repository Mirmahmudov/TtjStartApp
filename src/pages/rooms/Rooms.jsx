import React, { useEffect, useState } from "react";
import "./Rooms.css";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Rooms() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => {
        setData(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const sortByRoom = () => {
    setSorted({ sorted: "RoomNum", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.roomNum;
      const fullNameB = userB.roomNum;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const sortByFloor = () => {
    setSorted({ sorted: "floor", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.floor;
      const fullNameB = userB.floor;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const sortBySpaces = () => {
    setSorted({ sorted: "spaces", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.spaces;
      const fullNameB = userB.spaces;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex", padding: "10px" }}>
        <Sidenav />
        <Box className="rooms" style={{ padding: "10px", width: "100%" }}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1 className="" style={{ width: "100%" }}>
              Xonalar
            </h1>
          </Box>
          <table>
            <thead>
              <tr>
                <th onClick={sortByRoom}>
                  Xona Raqami
                  {sorted.sorted === "RoomNum" ? renderArrow() : null}
                </th>
                <th onClick={sortByFloor}>
                  Qavat
                  {sorted.sorted === "floor" ? renderArrow() : null}
                </th>
                <th >
                  Joylar
                  {sorted.sorted === "" ? renderArrow() : null}
                </th>
                <th onClick={sortBySpaces}>
                  Bo'sh joylar
                  {sorted.sorted === "spaces" ? renderArrow() : null}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.roomNum}</td>
                    <td>{item.floor}</td>
                    <td>{item.place}</td>
                    <td>{item.spaces}</td>

                    <td>
                      <Link
                        to={`/roominfo/${item.id}`}
                        style={{ color: "#0c5fcd" }}
                      >
                        view
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
}

export default Rooms;
