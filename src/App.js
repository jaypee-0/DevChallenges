import React from "react";
import Heading from "./Components/Heading/Heading";
import Skills from "./Components/SkillsHobbies/SkillsHobbies";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App container mb-5">
      <Heading />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
