import React from 'react'
import "./SkillListItem.css"

export default function SkillListItem({ skill, index }) {
  return (
        <li className="SkillListItem"
          style={{backgroundColor: index % 2 ?  'grey' : 'white', color: 'black'}}>
        
          <div className='flex-ctr-ctr'>{index + 1}</div>
          <span className="NameSpan">{skill.name}</span>
          <span className="LevelSpan">Level: {skill.level}</span>
          
        </li>
  )
}
