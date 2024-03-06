import React, { useState } from "react";
import "./GameScreen.css";
function GameScreen() {
  const [balloonSize, setBalloonSize] = useState(50); //balloon size set to 50 initially

  const handleBalloonClick = () => {
    if (balloonSize < 150) {
      setBalloonSize(balloonSize + 10);
    } else {
      alert("Balloon popped!"); // balloon pops after 150
      setBalloonSize(50);
    }
  };
  // return function allows us to click on balloon to pop
  return (
    <div className="balloon-container">
      <h1 className="txtHeader">Click on baloon to POP</h1>
      <div
        className={`balloon ${balloonSize > 100 ? "pumped" : ""}`}
        onClick={handleBalloonClick}
      >
        {balloonSize}%
      </div>
    </div>
  );
}

export default GameScreen;
