import "./Projects.css";

const projects = [
  {
    text: "Stape website",
    link: "https://stape.io",
    interface: "React, TypeScript, Next.js, SASS, i18n",
  },
  {
    text: "Stape admin-panel",
    link: "https://app.stape.io",
    interface: "React, Next.js, TypeScript, SWR, StoryBook, SASS",
  },
  {
    text: "Trello Clone",
    link: "https://github.com/dmtsolovey/trello-clone",
    interface: "React",
  },
  {
    text: "Pricing Page",
    link: "https://github.com/dmtsolovey/pricing-page",
    interface: "HTML5, CSS3, JS ",
  },
  {
    text: "Coffee Shop",
    link: "https://github.com/dmtsolovey/coffe-shop",
    interface: "React",
  },
  {
    text: "Todo List",
    link: "https://github.com/dmtsolovey/todos",
    interface: "JavaScript",
  },
];

export default function Projects() {
  const listItem = projects.map((item) => (
    <li key={item.text} className="projects-item">
      <div className="projects-content">
        <p className="projects-text">
          {item.text} /{" "}
          <a href={item.link} className="projects-link" title="Go to the link">
            {item.link}
          </a>
        </p>
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
