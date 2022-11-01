import AboutUser from "./components/content/AboutUser/AboutUser";
import Education from "./components/content/Education/Education";
import Expeirence from "./components/content/Expeirence/Experience";
import Projects from "./components/content/Projects/Projects";
import Contacts from "./components/sidebar/Contacts/Contacts";
import Skills from "./components/sidebar/Skills/Skills";
import './App.css';


export default function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Contacts />
          <Skills />
        </div>
        <div className="content">
          <AboutUser />
          <Projects />
          <Expeirence />
          <Education />
        </div>
      </div>
    </>
  );
}
