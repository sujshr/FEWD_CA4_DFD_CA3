import React, { useContext, useState, useEffect } from "react";
import "./Result.css";
import { Theme } from "../App";

function Result(props) {
  // importing the theme form App using use context
  let theme = useContext(Theme);

  // css property to set the visibility of the result div
  const resultCss = {
    display: props.visibility == "none" ? "none" : "flex",
  };

  const [textColor, setTextColor] = useState("blue");

  // updating the color according to the theme using useState
  useEffect(() => {
    setTextColor(theme === "light" ? "blue" : "white");
  }, [theme]);

  return (
    <div style={resultCss} id="resultDiv" className={`${theme} ${textColor}`}>
      <h2>CHECK OUT THE RESULTS!!</h2>
      <p>
        Total number of Questions: <span className="yellow">{props.total}</span>
      </p>
      <p>
        You Scored: <span className="yellow">{props.score}</span>
      </p>
      <p>
        The percentage:{" "}
        <span className="yellow">{(props.score / props.total) * 100}%</span>
      </p>
      <button onClick={props.restart}>Play Again</button>
    </div>
  );
}

export default Result;
