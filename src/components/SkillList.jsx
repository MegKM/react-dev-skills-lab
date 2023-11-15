import SkillListItem from "./SkillListItem";

function SkillList({ skills }) {
    const output = skills.map((skill) => <SkillListItem skill={skill}/>)
    return (
        <div className="skillsContainer">
            {output}
        </div>
    );
}

export default SkillList;
