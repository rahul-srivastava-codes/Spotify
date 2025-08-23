import Search_bar from "./Navbar_components/Search_bar";
import Dropdown from "./Navbar_components/Dropdown";
import Mode from "./Navbar_components/Mode";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 w-full">
      <div className="flex items-center justify-between gap-5">
        <h2 className="text-xl font-bold cursor-pointer">JIOSAAVN</h2>
        <div className="text-sm flex items-center justify-center gap-3 space-x-2 font-semibold">
          <div className="cursor-pointer">Music</div>
          <div className="cursor-pointer">Podcast</div>
          <div className="cursor-pointer">Pro</div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <Search_bar />
      </div>
      <div className="text-sm flex items-center justify-center gap-3 space-x-2 font-sans">
        <div>
          <Dropdown></Dropdown>
        </div>
        <div>
          <Mode></Mode>
        </div>
        <Link to={"/login"}>LOGIN</Link>
        <Link to={"/signup"}>SIGNUP</Link>
      </div>
    </div>
  );
}

export default Navbar;
