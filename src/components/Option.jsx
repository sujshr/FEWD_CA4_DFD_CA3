import React from "react";

export default function Option(props) {

  return (
    <button className="option" onClick={props.click_handler} data-id={props.id}>
      {props.option.text}
    </button>
  );
}
