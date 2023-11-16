import React from 'react';
import { useState } from 'react';
import "./NewSkillForm.css";


export default function NewSkillForm() {
  const [formData, setFormData] = useState({
    skill: "",
    level: "noob",
  });

  function handleChange(evt) {
    const newFormData = {...formData, [ evt.target.name] : evt.target.value}
    setFormData(newFormData)
  }

  return (
    <div className="FormWrapper">
    <form className="NewSkillForm">
      
      <label htmlFor="skill" className="skill">Skill: </label>
      <input value={formData.skill} onChange={handleChange}
      type="text" id="skill" name="skill" placeholder="Enter your skill" />
      
      <label htmlFor="level" className="level">Level: </label>
      <select value={formData.level} onChange={handleChange}
      id="level" name="level">
        <option value="noob">Noob</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="advanced">God</option>
        <option value="advanced">Demon</option>
      </select>

      <br />

      <button type="submit" className="AddSkill">ADD SKILL</button>
      
    </form>
    <h2>{formData.skill} is {formData.level}</h2>
    </div>
  );
}
