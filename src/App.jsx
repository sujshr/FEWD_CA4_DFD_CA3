import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

const Questions = React.createContext();

function App() {
  return (
    <div>
      <Questions.Provider value={questions}>
        <QuestionBox />
      </Questions.Provider>
    </div>
  );
}

export { Questions };

export default App;
