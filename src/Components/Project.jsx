import { motion } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import { Heart } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "To do list app",
    description: "A To-Do List App made with React that lets users add, edit, and delete tasks easily.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "https://todo-list-app16.netlify.app/"
  },
  {
    id: 2,
    title: "Food Ordering System",
    description: "A C# project for placing and managing food orders in a restaurant.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "https://github.com/hewanzewdie/Food-ordering-system"
  }
];

export default function Project() {
  const [projectLikes, setProjectLikes] = useState({});

  const handleLike = (projectId) => {
    setProjectLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };

  return (
    <div id="projects" className="py-5 px-3 px-md-5">
      <h2 className="text-center fw-bold display-5 mb-4">My <span className="text-primary">Projects</span></h2>
      <div className="container">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`row align-items-center my-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="col-md-6">
              <div className="overflow-hidden rounded shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid project-image-hover"
                  style={{ transition: "transform 0.5s", cursor: "pointer" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <h2 className="fw-bold">{String(project.id).padStart(2, "0")}</h2>
              <h4 className="fw-bold mb-3">{project.title}</h4>
              <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="fs-5">
                  <TbExternalLink />
                </a>
                <button
                  onClick={() => handleLike(project.id)}
                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1 my-3"
                >
                  <Heart size={18} />
                  <span>{projectLikes[project.id] || 0}</span>
                </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}