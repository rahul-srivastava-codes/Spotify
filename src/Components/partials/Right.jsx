import Cards from "./Songs/Cards";
import Instance from "../../utils/Axios";
import { useEffect, useState } from "react";

function Right() {
  const [Trending, setTrending] = useState([]);
  const [Playlist, setPlaylist] = useState([]);
  const [Album, setAlbum] = useState([]);
  const [Artists, setArtists] = useState([]);
  const getSongs = async () => {
    try {
      const { data } = await Instance.get(
        `/search/songs?query=saiya&page=0&limit=10`
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
  const getArtists = async () => {
    try {
      const { data } = await Instance.get(
        `/search/artists?query=Adele&page=0&limit=10`
      );
      // console.log(data);
      setArtists(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
    getPlaylist();
    getAlbum();
    getArtists();
  });
  return (
    <div className="px-4 py-10 ">
      <Cards data={Trending} heading={"Trending"}></Cards>
      <Cards data={Playlist} heading={"Playlist"}></Cards>
      <Cards data={Album} heading={"Album"}></Cards>
      <Cards data={Artists} heading={"Artists"}></Cards>
    </div>
  );
}

export default Right;
