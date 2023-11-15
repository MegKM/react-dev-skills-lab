import "../styles/style.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  function addSkill(skill){
    console.log(skill)
    setSkills([...skills, skill])
  }
  return (
    <>
    <div className="App">
      <div className="container">
        <h1>React Dev Skills</h1>
        <SkillList skills={skills} />
        <hr />
        <NewSkillForm addSkill={addSkill}/>
      </div>    
    </div>
    </>
  )
}

export default App
