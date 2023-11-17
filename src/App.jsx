import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'


const initialSkills = [
  { skill: "CSS", level: 3 },
  { skill: "HTML", level: 5 },
  { skill: "JS", level: 4 },
  { skill: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)

  function addSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <>
      <h1>My Dev Skills</h1>
      { showSkills && <SkillList skills={skills}/>}
      <br />
      <hr />
      <br />
      {/* Add NewSkillListForm */}
      <NewSkillForm addSkill={addSkill}/>
    </>
  )
}

export default App




