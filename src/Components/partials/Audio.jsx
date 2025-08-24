import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
function Audio() {
  const audio = useSelector((state) => state.audio.currentsong);
  return (
    <div className="w-full flex items-center justify-center">
      <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        className="w-[90%] mt-2"
      />
    </div>
  );
}

export default Audio;
