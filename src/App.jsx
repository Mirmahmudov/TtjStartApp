import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Students from "./pages/students/Students";
import Sidenav from "./components/Sidenav";
import Paymet from "./pages/paymet/Paymet";
import Navbar from "./components/Navbar";
import Rooms from "./pages/rooms/Rooms";
import StudentWait from "./pages/students/StudentWait";
import StudentGiven from "./pages/students/StudentGiven";
import StudentOut from "./pages/students/StudentOut";
import StudentUpdate from "./components/StudentUpdate";
import StudentCreate from "./components/StudentCreate";
import StudentRead from "./components/StudentRead";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/paymet" element={<Paymet />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/studentwait" element={<StudentWait />} />
          <Route path="/studentgiven" element={<StudentGiven />} />
          <Route path="/studentout" element={<StudentOut />} />
          <Route path="/studentupdate/:id" element={<StudentUpdate />} />
          <Route path="/studentcreate" element={<StudentCreate />} />
          <Route path="/studentread/:id" element={<StudentRead />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
