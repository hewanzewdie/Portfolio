import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; 

Skills.propTypes = {
  title: PropTypes.string,
  image: PropTypes.element, 
};

export default function Skills({ title, image }) {
  
  return (
    <motion.div
      className="card shadow-sm p-3 d-flex flex-column justify-content-center align-items-center h-100" 
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 12, stiffness: 100 }}
      style={{ minHeight: '120px' }} 
    >
      <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
        {image && React.cloneElement(image, { size: 60 })} 
        <h5 className="card-title text-center text-nowrap mt-3 mb-0">{title}</h5> 
      </div>
    </motion.div>
    
  );
}