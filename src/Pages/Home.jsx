import AboutSection from "../Components/AboutSection";
import SkillCard from "../Components/Skills.jsx";
import Introduction from "../Components/Introduction.jsx";
import Contact from "../Components/Contact.jsx";
import Projects from "../Components/Project.jsx"; 
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaJava, FaDatabase, FaPhp, FaFigma, FaGithub } from "react-icons/fa";

const skills = [
  { title: "HTML", icon: <FaHtml5 /> },
  { title: "CSS", icon: <FaCss3 /> },
  { title: "Bootstrap", icon: <FaBootstrap /> },
  { title: "JavaScript", icon: <FaJs /> },
  { title: "React", icon: <FaReact /> },
  { title: "Java", icon: <FaJava /> },
  { title: "SQL", icon: <FaDatabase /> },
  { title: "PHP", icon: <FaPhp /> },
  { title: "GitHub", icon: <FaGithub /> },
  { title: "Figma", icon: <FaFigma /> },
];

export default function Home() {
  return (
    <div>
      <div className="border" id="home">
        <Introduction />
      </div>
      <div className="min-vh-100 d-flex align-items-center border">
        <AboutSection />
      </div>
      <div className="min-vh-100 border py-5 gap-3 d-flex flex-column justify-content-center align-items-center" id="skills">
        <h2 className="fw-bold"><span className="text-primary">My</span> Skills</h2>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4"> 
            {skills.map((skill, index) => (
              <div className="col" key={index}>
                <SkillCard title={skill.title} image={skill.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="projects">
        <Projects /> 
      </div>
      <div className="border" id="contact">
        <Contact />
      </div>
    </div>
  );
}