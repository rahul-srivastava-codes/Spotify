import Cards from "./Songs/Cards";
import Instance from "../../utils/Axios";
import { useEffect, useState } from "react";

function Right() {
  const [Trending, setTrending] = useState([]);
  const [Playlist, setPlaylist] = useState([]);
  const [Album, setAlbum] = useState([]);
  const getSongs = async () => {
    try {
      const { data } = await Instance.get(
        `/search/songs?query=tum&page=0&limit=10`
      );
      setTrending(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getPlaylist = async () => {
    try {
      const { data } = await Instance.get(
        `/search/playlists?query=Indie&page=0&limit=10`
      );
      // console.log(data);
      setPlaylist(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getAlbum = async () => {
    try {
      const { data } = await Instance.get(
        `/search/albums?query=Evolve&page=0&limit=10`
      );
      // console.log(data);
      setAlbum(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // fetch('https://saavn.dev/api/search/albums?query=Evolve&page=0&limit=10')

  useEffect(() => {
    getSongs();
    getPlaylist();
    getAlbum();
  });
  return (
    <div className="px-4 py-10 overflow-hidden">
      <Cards data={Trending} heading={"Trending"}></Cards>
      <Cards data={Playlist} heading={"Playlist"}></Cards>
      {/* <Cards data={Album} heading={"Album"}></Cards> */}
    </div>
  );
}

export default Right;
