import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [direction, setDirection] = useState("right");
  const prevPosition = useRef(position);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const logoWidth = 100;
    const logoHeight = 100;

    const newPosition = {
      top: clientY - logoHeight / 2,
      left: clientX - logoWidth / 2,
    };

    const isMovingRight = newPosition.left > prevPosition.current.left;
    setDirection(isMovingRight ? "right" : "left");

    setPosition(newPosition);
    prevPosition.current = newPosition;
  };
  return (
    <div className="container" onClick={handleClick}>
      <img
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
        alt="Logo"
        className={`logo ${direction}`}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      />
    </div>
  );
}

export default App;
