import { useState } from "react";

function Mode() {
  const [day, setday] = useState(true);
  return (
    <div>
      <button onClick={() => setday(!day)}>
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
