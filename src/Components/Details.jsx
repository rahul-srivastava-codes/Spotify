import Navbar from "./partials/Navbar";
import Sidebar from "./partials/Sidebar.jsx/Sidebar";
import Audio from "./partials/Audio";
import { useSelector } from "react-redux";

function Details() {
  const mode = useSelector((state) => state.mode.isNight);
  const detail = useSelector((state) => state.detail.id);
  console.log(detail);
  return (
    <div className={`${mode ? "bg-zinc-300" : "bg-zinc-700"}`}>
      <Navbar></Navbar>
      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-[80vw] h-[80vh] overflow-y-scroll px-[4vw]">
          <div className="flex w-full items-center justify-center gap-4  mt-5 ">
            <img
              src={detail.image[2].url}
              alt=""
              className=" h-[40vh] overflow-hidden rounded-lg"
            />
            <div>
              <div className="text-3xl">{detail.name}</div>
              <div className="text-xl">{detail.year}</div>
              <div className="text-xl">{detail.language}</div>
              <div className="text-xl">{detail.label}</div>
            </div>
          </div>
          <div className="text-4xl font-extrabold">Artists</div>
          <div className="w-full mt-4 px-10">
            {detail.artists.all.map((d, i) => (
              <div key={i} className="flex items-center justify-start gap-4">
                <img src={d.image[2].url} alt="" className="mt-2 h-10" />
                <div>{d.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Audio></Audio>
    </div>
  );
}

export default Details;
