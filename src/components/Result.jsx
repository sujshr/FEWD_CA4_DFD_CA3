import React from "react";

export default function Result(props) {
  const resultCss = {
    display: props.visibility == "none" ? "none" : "flex",
  };
  return (
    <div style={resultCss}>
      <p>Socre: {props.score}</p>
      <button onClick={props.restart}>Play Again</button>
    </div>
  );
}
