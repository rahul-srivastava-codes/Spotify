import Instance from "../../../utils/Axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../Loading";
import { Link } from "react-router-dom";
import { changeDetail } from "../../../Store/Reducer/DetailSlice";

function Search_bar() {
  const [input, setinput] = useState("");
  const [query, setquery] = useState([]);

  const dispatch = useDispatch();

  const getSearch = async () => {
    try {
      const { data } = await Instance.get(
        `/search/songs?query=${input}&page=0&limit=200`
      );
      // console.log("API Response:", data);
      setquery(data.results || data.data?.results || []);

      console.log(data);
    } catch (error) {
      console.log(error);
      setquery([]);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input.trim() !== "") {
        getSearch();
      } else {
        setquery([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [input]);
  function search() {
    dispatch(changeDetail(d));
    setinput("");
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-start gap-2">
        <input
          type="text"
          className="w-[40vw] h-[5vh] rounded-full bg-white px-5 -m-1 z-10
          "
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Search Songs, Album, Artist, Playlists"
        />
        {input.length > 0 && (
          <button onClick={() => setinput("")}>
            <i className="ri-close-line text-black"></i>
          </button>
        )}
      </div>

      {input.length > 0 && (
        <div className="absolute w-[40vw] h-[40vh] bg-white opacity-90 px-2 py-1 overflow-y-scroll">
          {Array.isArray(query) && query.length > 0 ? (
            query.map((d, i) => (
              <Link
                to={"/details"}
                onClick={() => search()}
                key={i}
                className="flex items-center justify-start w-full h-[10vh] py-1 hr"
              >
                <img
                  className="h-full object-contain mr-4"
                  src={
                    d?.image?.[2]?.url ||
                    d?.image?.[1]?.url ||
                    d?.image?.[0]?.url ||
                    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                  }
                  alt={d?.name || "song"}
                />
                <div>{d?.name || "Unknown Title"}</div>
              </Link>
            ))
          ) : (
            <Loading></Loading>
          )}
        </div>
      )}
    </div>
  );
}

export default Search_bar;
