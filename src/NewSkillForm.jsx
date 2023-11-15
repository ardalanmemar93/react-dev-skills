import React from 'react';
import "./NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <div className="FormWrapper">
    <form>
      
      <label htmlFor="skill">Skill: </label>
      <input type="text" id="skill" name="skill" placeholder="Enter your skill" />

      <br />

      <label htmlFor="level">Level: </label>
      <select id="level" name="level">
        <option value="noob">Noob</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="advanced">God</option>
        <option value="advanced">Demon</option>
      </select>

      <br />

      <button type="submit" className="AddSkill">ADD SKILL</button>
      
    </form>
    </div>
  );
}
