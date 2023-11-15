import "../styles/SkillListItem.css";

function SkillListItem({skill}) {
    return (
        <div className="skillList">
            <p>{skill.name} </p> <div><p>LEVEL {skill.level}</p></div>
        </div>
    )
  }
  
  export default SkillListItem;