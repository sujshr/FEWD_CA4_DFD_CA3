// importing form react
import React from "react";
import { useState, useContext, useEffect } from "react";

// importing the css file
import "./QuestionBox.css";

// importing the theme from App
import { Theme } from "../App";

// importing the components
import Option from "./Option";
import Result from "./Result";
import StartPage from "./StartPage";

export default function QuestionBox(props) {
  // importing the questions using useContext
  let theme = useContext(Theme);

  // extracting questions array from props
  let questions = props.questions;

  // initiliazing the initial states and defining the functions related to them
  // start page visibility state and function to hide it
  const [startPageVisibility, setStartPageVisibility] = useState("flex");
  const hideStartPage = () => {
    setStartPageVisibility("none");
  };

  // result page visibility state
  const [resultVisibility, setResultVisibility] = useState("none");

  // state for question index or number
  const [questionIndex, setIndex] = useState(0);

  // state for the score
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    calculateScore(e.target.dataset.id);
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

  // state for highlighting the question
  const [questionColor, setHighligher] = useState("blue");
  // state for text color for different themes
  const [textColor, setTextColor] = useState("blue");

  // updating the color according to the theme using useEffect
  useEffect(() => {
    setTextColor(theme === "light" ? "blue" : "white");
    setHighligher(
      questionColor === "red" ? "red" : theme === "light" ? "blue" : "white"
    );
  }, [theme]);

  // highlighter function
  const highlight = () => {
    if (questionColor != "red") {
      setHighligher("red");
    } else if (theme == "light") {
      setHighligher("blue");
    } else {
      setHighligher("white");
    }
  };

  // function to restart the game
  const restartGame = () => {
    setResultVisibility("none");
    setIndex(0);
    setScore(0);
  };

  return (
    <div id="questionBox" className={theme}>
      <StartPage visibility={startPageVisibility} hide={hideStartPage} />
      <div
        id="container"
        style={{
          display:
            startPageVisibility === "flex"
              ? "none"
              : resultVisibility === "flex"
              ? "none"
              : "flex",
        }}
      >
        <div id="question" className={textColor}>
          <p>
            {" "}
            Question{" "}
            <span className="yellow">
              {questionIndex + 1}/{questions.length}
            </span>
          </p>

          <p id="q" className={questionColor}>
            {" "}
            {questions[questionIndex].text}
          </p>
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
        </div>

        <div id="buttonDiv">
          <button
            id="highlightButton"
            onClick={() => {
              setHighligher("red");
            }}
          >
            Highlight Question
          </button>
          <button
            onClick={() => {
              setHighligher(theme === "light" ? "blue" : "white");
            }}
          >
            Remove Highlight
          </button>
        </div>
      </div>

      <Result
        score={score}
        visibility={resultVisibility}
        restart={restartGame}
        total={questions.length}
      />
    </div>
  );
}
