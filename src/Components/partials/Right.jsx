import Cards from "./Songs/Cards";
import Instance from "../../utils/Axios";
import { useEffect, useState } from "react";

function Right() {
  const [Trending, setTrending] = useState([]);
  const [Playlist, setPlaylist] = useState([]);
  const getSongs = async () => {
    try {
      const { data } = await Instance.get(
        `/search/songs?query=tum&page=0&limit=10`
      );
      setTrending(data.data.results);
      // console.log(Trending);
    } catch (error) {
      console.log(error);
    }
  };
  // const getPlaylist = async () => {
  //   try {
  //     const { data } = await Instance.get(`/playlist`);
  //     setPlaylist(data);
  //     // console.log(Playlist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getSongs();
    // getPlaylist();
  });
  return (
    <div className="px-4 py-10 overflow-hidden">
      <Cards data={Trending} heading={"Trending"}></Cards>
      {/* <Cards data={Playlist}></Cards> */}
    </div>
  );
}

export default Right;
