import "./CVSkills.css";
import { useState } from "react";

export default function CVSkills({ title, items }) {
  const [list, setList] = useState(items);

  // const [inputState, setInputState] = useState("");

  // const handleChange = (event) => {
  //   setInputState(event.target.value);
  // };

  // const addItem = () => {
  //   setList([...list, { skill: inputState }]);
  //   setInputState("");
  // };

  return (
    <div>
      <h3 className="skills-title">{title}</h3>
      {/* <input
        onChange={handleChange}
        value={inputState}
        className="skills-input"
        placeholder="enter value"
      /> */}
      {/* <button onClick={addItem} className="skills-btn">
        Add
      </button> */}
      <ul className="skills-list">
        {list.map((item) => (
          <li key={item.skill}>
            <span className="skills-items">{item.skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
