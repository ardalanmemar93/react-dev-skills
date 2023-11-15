import React from 'react'
import SkillListItem from './SkillListItem'
import "./SkillList.css"

export default function SkillList({skills}) {
  

  return (
    <ul className="UlPadding">
        {skills.map((skill, idx) => (
          <SkillListItem key={idx} skill={skill} index={idx} />
        ))}
    </ul>
  );
}

