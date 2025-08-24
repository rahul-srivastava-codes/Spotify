import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMode } from "../../../Store/Reducer/Modeslice";

function Mode() {
  const [day, setday] = useState(true);
  const dispatch = useDispatch();
  function change() {
    dispatch(changeMode());
    setday(!day);
  }
  return (
    <div>
      <button
        onClick={() => change()}
        className="hover:scale-105 cursor-pointer"
      >
        {day ? (
          <i className="ri-sun-line"></i>
        ) : (
          <i className="ri-moon-fill"></i>
        )}
      </button>
    </div>
  );
}

export default Mode;
