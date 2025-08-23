import ReactAudioPlayer from "react-audio-player";

function Audio() {
  return (
    <div className="w-full flex items-center justify-center">
      <ReactAudioPlayer src="null" autoPlay controls className="w-[90%] mt-2" />
      ;
    </div>
  );
}

export default Audio;
