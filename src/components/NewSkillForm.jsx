import "../styles/NewSkillForm.css";
import { useState } from 'react';

function NewSkillForm({addSkill}) {
  const [formData, setFormData] = useState({
    name: "",
    level: "3"
  })

  function handleAddSkill(event){
    event.preventDefault();
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value
    }
    addSkill(newFormData)
    setFormData({
      name: "",
      level: "3"
    })
  }

  const _handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);
  }

  return (
    <form className="skillListForm" onSubmit={handleAddSkill}>
      <label>Skill</label>
      <input 
        placeholder="Enter new skill"
        type="text" 
        name="name"
        value={formData.name}
        onChange={ _handleChange }  
      />
      <label>Level</label>
      <select 
        name="level"
        value={formData.level}
        onChange={ _handleChange }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
  
export default NewSkillForm;