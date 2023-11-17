import React, { useState } from 'react';
import './NewSkillForm.css';

const defaultFormData = { skill: '', level: '1' };

export default function NewSkillForm({ addSkill }) {
  const [formData, setFormData] = useState(defaultFormData);

  function handleChange(event) {
    const newFormData = { ...formData, [event.target.name]: event.target.value};
    setFormData(newFormData);
  }

  function handleAddSkill(event) {
    event.preventDefault();
    addSkill(formData);
    setFormData(defaultFormData);
  }

  return (
    <div className="FormWrapper">
      <form
        className="NewSkillForm"
        onSubmit={handleAddSkill}
      >
        <label className="skill">
          Skill:{' '}
        </label>
        <input
          value={formData.skill}
          onChange={handleChange}
          type="text"
          id="skill"
          name="skill"
          placeholder="Enter your skill"
        />

        <label className="level">
          Level:{' '}
        </label>
        <select
          value={formData.level}
          onChange={handleChange}
          id="level"
          name="level"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />

        <button type="submit" className="AddSkill">
          ADD SKILL
        </button>
      </form>
    </div>
  );
}
