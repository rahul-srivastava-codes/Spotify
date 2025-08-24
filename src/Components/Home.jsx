import Navbar from "./partials/Navbar";
import Sidebar from "./partials/Sidebar.jsx/Sidebar";
import Audio from "./partials/Audio";
import Right from "./partials/Right";
import { useSelector } from "react-redux";
function Home() {
  const mode = useSelector((state) => state.mode.isNight);
  return (
    <div className={`${mode ? "bg-zinc-300" : "bg-zinc-700"}`}>
      <Navbar></Navbar>
      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-[80vw] h-[80vh] overflow-scroll">
          <Right></Right>
        </div>
      </div>
      <Audio></Audio>
    </div>
  );
}

export default Home;
