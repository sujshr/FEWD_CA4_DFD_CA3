import React, { useContext, useEffect, useState } from "react";
import "./StartPage.css";
import { Theme } from "../App";

export default function StartPage(props) {
  // importing the theme from App using useContext
  const theme = useContext(Theme);

  // css property to set the visibility of the startPage div
  let startPageCss = {
    display: props.visibility == "none" ? "none" : "flex",
  };

  // color state for the text of the start page
  const [textColor, setTextColor] = useState("blue");

  // updating the color according to the theme
  useEffect(() => {
    setTextColor(theme === "light" ? "blue" : "white");
  }, [theme]);

  return (
    <div id="startPage" style={startPageCss} className={theme}>
      <h1>
        <span className={textColor}>Begin </span>
        <span className="yellow">QuizMania</span>
      </h1>
      <button onClick={props.hide}>Start Quiz</button>
    </div>
  );
}
