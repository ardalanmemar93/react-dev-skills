
import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'


const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {

  return (
    <>
      <h1>My Dev Skills</h1>
      <SkillList skills={skills}/>
      <br />
      <hr />
      <br />
      {/* Add NewSkillListForm */}
      <NewSkillForm />
    </>
  )
}

export default App
