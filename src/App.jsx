import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'


const initialSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)

  return (
    <>
      <h1>My Dev Skills</h1>
      { showSkills && <SkillList skills={skills}/>}
      <br />
      <hr />
      <br />
      {/* Add NewSkillListForm */}
      <NewSkillForm />
    </>
  )
}

export default App
