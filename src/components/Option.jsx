import React, { useContext } from "react";
import './Option.css'
import { Theme } from "../App";

export default function Option(props) {

  const theme = useContext(Theme);
  const style = {
    color: theme === "light"? "black":"white",
  }
  return (
    <div style={style} className="option" onClick={props.click_handler} data-id={props.id}>
      {props.option.text}
    </div>
  );
}
