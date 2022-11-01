import { skills } from "./skillsData";
import CVSkills from "./CVSkills/CVSkills";

export default function Skills() {
  return (
    <div>
      {skills.map((item) => (
        <CVSkills key={item.title} title={item.title} items={item.items} />
      ))}
      ;
    </div>
  );
}
