import React from "react";
import { useState, useContext } from "react";
import { Questions } from "../App";
import Option from "./Option";
import Result from "./Result";
import StartPage from "./StartPage";

export default function QuestionBox(props) {
  let questions = useContext(Questions);

  const [questionIndex, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [resultVisibility, setResultVisibility] = useState("none");
  const [startPageVisibility, setStartPageVisibility] = useState("flex");

  const hideStartPage = () => {
    setStartPageVisibility("none");
  };
  const calculateScore = (id) => {
    console.log(id);
    if (questions[questionIndex].options[id].isCorrect) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) setIndex(questionIndex + 1);
    else {
      setResultVisibility("flex");
    }
  };
  const handleClick = (e) => {
    calculateScore(e.target.dataset.id);
  };

  const restartGame = () => {
    setResultVisibility("none");
    setIndex(0);
    setScore(0);
  };

  return (
    <div>
      <StartPage visibility={startPageVisibility} hide={hideStartPage} />
      <div id="question">
        <p>
          {" "}
          Question {questionIndex + 1}/{questions.length}
        </p>
        <p id="q"> {questions[questionIndex].text}</p>
      </div>

      <div id="options">
        {questions[questionIndex].options.map((option) => {
          return (
            <Option
              option={option}
              key={option.id}
              id={option.id}
              click_handler={handleClick}
            />
          );
        })}
        <Result score={score} visibility={resultVisibility} restart={restartGame}/>
      </div>
    </div>
  );
}
