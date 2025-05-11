import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="container py-5" id="about">
      <div className="row align-items-center">
        <motion.div
          className="col-md-6 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.freepik.com/free-photo/industrial-designer-digital-art_23-2151585315.jpg?ga=GA1.1.1102401402.1734252246&semt=ais_hybrid&w=740"
            alt="Profile"
            className="rounded-3 shadow-sm w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </motion.div>

        <motion.div
          className="col-md-6 flex-grow-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="fw-bold mb-4">About <span className="text-primary">Me</span></h2>
            <p className="mb-3">
              I'm a passionate developer with expertise in modern web
              technologies. I love creating beautiful and functional
              applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community events.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
