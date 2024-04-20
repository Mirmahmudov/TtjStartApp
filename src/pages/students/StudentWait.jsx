import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMinus, FaUserPlus, FaUserEdit, FaArrowUp, FaArrowDown } from "react-icons/fa";
import axios from "axios";

function StudentWait() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data)
        setUsers(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelet = (id) => {
    const confirm = window.confirm("Chindan ham o'chirib tashlamoqchimisiz?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/users/` + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
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
              Kutmoqda
            </h1>
            <Link
              to={"/studentcreate"}
              style={{
                padding: "10px 15px",
                fontSize: "14 px",
                fontWeight: "bold",
                borderRadius: "10px",
                border: "none",
                background: "#0c5fcd",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaUserPlus /> add
            </Link>
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
                    {sorted.sorted === "gender" ? renderArrow() : null}
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
               
               
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.map((item, i) => {
                  console.log(item);
                  return (
                    <>
                      <tr>
                        <td>{item.fulname.slice(0, 15)}..</td>
                        <td>{item.jins}</td>
                        <td>{item.phone}</td>
                        <td>{item.kurs}</td>
                        <td>{item.guruh} </td>
                        <td>{item.fakultet}</td>
                        <td>{item.tutor.slice(0, 10)}... </td>
                        <td>{item.manzil}</td>
                        <td>
                          <Link
                            to={`/studentupdate/${item.id}`}
                            style={{ color: "#F4BA24" }}
                          >
                            <FaUserEdit /> tahrirlash
                          </Link>
                          <Link
                            to={`/studentread/${item.id}`}
                            style={{ color: "#0FD76B" }}
                          >
                            <FaUserPlus /> band Qilish
                          </Link>
                          <button
                            onClick={(e) => handleDelet(item.id)}
                            style={{ color: "#F0483E" }}
                          >
                            <FaUserMinus /> O'chirish
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
                // console.log(data)
              }

              {/* {data?.map((item, i) => {
              console.log(item.email);
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={`/read/${item.id}`}>read</Link>
                    <Link to={`/update/${item.id}`}>edit</Link>
                    <button onClick={(e) => handleDelet(item.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })} */}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
}

export default StudentWait;
