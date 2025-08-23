import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../partials/Navbar_components/Login";
import Signup from "../partials/Navbar_components/Signup";

function Router_path() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default Router_path;
