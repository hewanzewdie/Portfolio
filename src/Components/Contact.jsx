import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Mail, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const wordLen = 500;

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "message") {
      if (value.trim().split(/\s+/).length <= wordLen) {
        setFormData({ ...formData, [id]: value });
        setErrorMessage("");
      } else {
        setErrorMessage(`You cannot enter more than ${wordLen} words.`);
      }
    } else {
      setFormData({ ...formData, [id]: value });
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      'service_3oocjdc',       // Replace with your EmailJS Service ID
      'template_xghxb3j',      // Replace with your EmailJS Template ID
      formData,
      'jO1HWfE70jc7ad60D'        // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitted(true);
      },
      (error) => {
        console.error('Failed to send email:', error);
        setErrorMessage('Failed to send your message. Please try again.');
      }
    );
};


  const handleBack = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
    setErrorMessage("");
  };

  if (submitted) {
    return (
      <div className="container my-5 text-center ">
        <h1>Message Received</h1>
        <p className="mt-4">
          Thank you, <strong>{formData.name}</strong>! We'll get back to you at {formData.email}.
        </p>
        <button className="btn btn-primary mt-4" onClick={handleBack}>
          Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="container my-5"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 fw-bold"
      >
        Contact <span className="text-primary">Me</span>
      </motion.h2>

      <div className="row align-items-center gy-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="col-lg-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">Message</label>
              <textarea
                id="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter Your Message"
                required
              />
              <small className="text-danger">{errorMessage}</small>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <button type="submit" className="btn btn-primary px-4 my-3">
                Submit
              </button>
            </motion.div>

          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="col-lg-6"
        >
          <h2 className="fw-bold display-6">Let's  get in touch</h2>
    

          <div className="mt-4">
            <motion.a
              whileHover={{ x: 5 }}
              className="d-flex align-items-center mb-2 text-decoration-none"
              href="mailto:hewanzewdie16@gmail.com"
            >
              <Mail className="me-2" /> hewanzewdie16@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className="d-flex align-items-center text-decoration-none"
              href="tel:+251900584465"
            >
              <Phone className="me-2" /> +251900584465
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
