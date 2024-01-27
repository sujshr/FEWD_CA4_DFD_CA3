import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";

const Theme = React.createContext();
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const bodyColor = {
    backgroundColor: theme === "light" ? "#fff" : "#1E1E1E",
  };
  return (
    <div id="body" style={bodyColor}>
      <div id="app">
        <div id="toggleButton">
          <label id="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span id="slider"></span>
          </label>
        </div>

        <Theme.Provider value={theme}>
          <QuestionBox questions={questions} />
        </Theme.Provider>
      </div>
    </div>
  );
}

export { Theme };

export default App;
