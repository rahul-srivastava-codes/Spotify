const data = [
  "New Releases",
  "Top Charts",
  "Top Playlist",
  "Podcasts",
  "Top Artists",
  "Radio",
];

const data1 = ["History", "Liked Songs", "Albums", "Podcasts", "Artists"];

function Sidebar() {
  return (
    <div className="w-[15vw] px-7 mt-5 border-r-2">
      <h2 className=" py-3 text-xm text-zinc-400 font-semibold">Browse</h2>
      <div className="">
        {data.map((d, i) => (
          <div key={i} className="py-1 text-black hover:font-semibold">
            {d}
          </div>
        ))}
      </div>
      <Sidebottom></Sidebottom>
      <button className=" text-xl px-5 py-2 rounded-full mt-4 text-blue-400 border-2">
        <span className="font-bold text-2xl">+</span> New Playlist
      </button>
    </div>
  );
}

export default Sidebar;

function Sidebottom() {
  return (
    <div>
      <h2 className=" py-3 text-xm text-zinc-400 font-semibold">Library</h2>
      <div className="">
        {data1.map((d, i) => (
          <div
            key={i}
            className="py-1 text-black hover:font-extralight  duration-300"
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
