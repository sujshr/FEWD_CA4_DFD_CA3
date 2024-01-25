import React from "react";

export default function StartPage(props) {
  let startPageCss = {
    display: props.visibility == "none" ? "none" : "flex",
  };
  return (
    <div id="startPage" style={startPageCss}>
      <button onClick={props.hide}>Start Quiz</button>
    </div>
  );
}
