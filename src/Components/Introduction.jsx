import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Introduction() {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
      <h1 className="fw-bold display-4 mb-2">
      Hi, I'm{" "}
        <TypeAnimation
          sequence={["Hewan Zewdie", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ display: "inline-block", color: "#0d6efd" }}
        />
      </h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fw-bold mb-3"
        style={{ fontSize: "1.75rem" }}
      >
        <span className="fw-bolder">A Front-end</span>{" "}
        <span
          style={{
            WebkitTextStroke: "1px black",
            color: "white",
            fontWeight: 800,
          }}
        >
          Developer
        </span>
      </motion.h2>

      <p className="fs-4 mt-2 mb-4" style={{ maxWidth: "600px" }}>
        I specialize in building responsive, elegant web interfaces using modern front-end technologies.
      </p>
    </section>
  );
}
