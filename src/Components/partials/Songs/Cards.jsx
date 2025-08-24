import { useDispatch } from "react-redux";
import { changeAudio } from "../../../Store/Reducer/AudioSlice";
import Loading from "../../Loading";

function Cards({ data, heading }) {
  const dispatch = useDispatch();

  const getSongUrl = async (id) => {
    try {
      const res = await fetch(`https://saavn.dev/api/songs/${id}`);
      const json = await res.json();

      const songUrl =
        json?.data?.[0]?.downloadUrl?.find((u) => u.quality === "320kbps")
          ?.url || json?.data?.[0]?.downloadUrl?.[0]?.url;

      console.log("Playable URL:", songUrl);

      if (songUrl) {
        dispatch(changeAudio(songUrl));
      }
    } catch (error) {
      console.error("Error fetching song URL:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mt-4 font-semibold">{heading}</h1>
      {data.length > 0 ? (
        <div className="trending mt-4 w-full flex gap-4 flex-wrap ">
          {data.map((s, i) => (
            <button
              onClick={() => getSongUrl(s.id)}
              key={i}
              className="hover:scale-102 duration-300 w-[10vw] h-[30vh] rounded-lg"
            >
              <div className="w-full h-[75%]">
                <img
                  src={
                    s.image?.[2]?.url || s.image?.[1]?.url || s.image?.[0]?.url
                  }
                  className="object-cover w-full h-full"
                  alt="No image"
                />
              </div>
              <div className="px-2 w-full h-[25%]">
                <div className="font-semibold text-sm h-[60%]">{s.name}</div>
                <div className="text-xs h-[40%] overflow-hidden">
                  {s.type || s.artists?.all?.[0]?.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

export default Cards;
