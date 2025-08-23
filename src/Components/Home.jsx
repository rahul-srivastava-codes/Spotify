import Navbar from "./partials/Navbar";
import Sidebar from "./partials/Sidebar.jsx/Sidebar";
import Audio from "./partials/Audio";
import Right from "./partials/Right";
function Home() {
  return (
    <div>
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
