import "./Projects.css";

const projects = [
  {
    text: "https://stape.io",
    interface: "React, TypeScript, Next.js, SASS, i18n",
  },
  {
    text: "https://app.stape.io",
    interface: "React, Next.js, TypeScript, SWR, StoryBook, SASS",
  },
  {
    text: "Trello Clone",
    interface: "React",
  },
  {
    text: "Pricing Page",
    interface: "HTML5, CSS3, JS ",
  },
  {
    text: "Coffee Shop",
    interface: "React",
  },
  {
    text: "Todo List",
    interface: "JavaScript",
  },
];

export default function Projects() {
  const listItem = projects.map((item) => (
    <li key={item.text} className="projects-item">
      <div className="projects-content">
        <p className="projects-text">{item.text}</p>
        <span className="projects-interface">
          <b>Used technologies: </b>
          {item.interface}
        </span>
      </div>
    </li>
  ));
  return (
    <div className="projects">
      <h3 className="projects-title">Projects</h3>
      <ul className="projects-list">{listItem}</ul>
    </div>
  );
}
