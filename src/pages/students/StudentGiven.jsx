import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaArrowDown, FaArrowUp, FaUserPlus } from "react-icons/fa";

function StudentGiven() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/student")
      .then((res) => {
        setData(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleFilter = (e) => {
    const nevData = data.filter((item) => {
      console.log();
      return item.fulname
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setUsers(nevData);
  };

  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.fulname;
      const fullNameB = userB.fulname;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };
  const sortByFakultet = () => {
    setSorted({ sorted: "fakultet", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.fakultet;
      const fullNameB = userB.fakultet;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const sortByGender = (e) => {
    setSorted({ sorted: "gender", reversed: !sorted.reversed });

    const newData = data.filter((item) => {
      return item.jins
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setUsers(newData);
  };

  const sortByCours = () => {
    setSorted({ sorted: "cours", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.kurs;
      const fullNameB = userB.kurs;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const sortByManzil = () => {
    console.log(data);
    setSorted({ sorted: "manzil", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.manzil;
      const fullNameB = userB.manzil;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };
  const sortByTutor = () => {
    setSorted({ sorted: "tutor", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.tutor;
      const fullNameB = userB.tutor;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const sortByBalans = () => {
    setSorted({ sorted: "balans", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.balans;
      const fullNameB = userB.balans;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };
  const sortByRoom = () => {
    setSorted({ sorted: "room", reversed: !sorted.reversed });
    const usersCopy = [...data];
    usersCopy.sort((userA, userB) => {
      const fullNameA = userA.room;
      const fullNameB = userB.room;
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

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box style={{ padding: "10px", width: "100%" }}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1 className="" style={{ width: "100%" }}>
              Berilgan
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="search">
                <CiSearch />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="ismingizni kiriting"
                  onChange={handleFilter}
                />
              </div>
            </div>
          </Box>
          <table>
            <thead>
              <tr>
                <th onClick={sortByName}>
                  FISH
                  {sorted.sorted === "name" ? renderArrow() : null}
                </th>
                <th>
                  <select onChange={sortByGender}>
                    <option value="">jins</option>
                    <option value="erkak">erkak</option>
                    <option value="ayol">ayol</option>
                  </select>
                </th>
                <th>Tel</th>
                <th onClick={sortByCours}>
                  Kurs
                  {sorted.sorted === "cours" ? renderArrow() : null}
                </th>
                <th>Guruh</th>
                <th onClick={sortByFakultet}>
                  Fakultet
                  {sorted.sorted === "fakultet" ? renderArrow() : null}
                </th>
                <th onClick={sortByTutor}>
                  Tutor
                  {sorted.sorted === "tutor" ? renderArrow() : null}
                </th>
                <th onClick={sortByManzil}>
                  adress
                  {sorted.sorted === "manzil" ? renderArrow() : null}
                </th>
                <th>Type</th>
                <th onClick={sortByBalans}>
                  Hisob
                  {sorted.sorted === "balans" ? renderArrow() : null}
                </th>
                <th onClick={sortByRoom}>
                  Xona
                  {sorted.sorted === "room" ? renderArrow() : null}
                </th>
                <th> kelgan </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.fulname.slice(0, 15)}..</td>
                    <td>{item.jins}</td>
                    <td>{item.phone}</td>
                    <td>{item.kurs}</td>
                    <td>{item.guruh} </td>
                    <td>{item.fakultet}</td>
                    <td>{item.tutor.slice(0, 10)}... </td>
                    <td>{item.manzil.slice(0, 10)}..</td>
                    <td>{item.type}</td>
                    <td>{item.balans} so'm</td>
                    <td>{item.room}</td>
                    <td>15/09/2023</td>
                    <td>
                      <Link
                        to={`/studentread/${item.id}`}
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

export default StudentGiven;
