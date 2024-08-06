import transition from "../transition";
import { motion } from "framer-motion";
import "./ContactUs.scss";

function ContactUs() {
  return (
    <motion.div
      className="Contact"
      initial={{ y: "50px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0, ease: "easeInOut" }}
      exit={{
        y: "-50px",
        opacity: 0,
        transition: { duration: 0.25, delay: 0, ease: "easeInOut" },
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/contactImg.jpeg"}
        className="Contact-Logo"
        alt="logo"
      />

      <div
        className="Contact-Text"
        initial={{ y: "60px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
        exit={{ y: "-60px", opacity: 0 }}
      >
        <h1>Get in touch </h1>
        <div className="Contact-Description">
          <div className="Gmail Social-Icon">
            <a href="mailto:eryashkumarjani@gmail.com">
              <i class="fa-regular fa-envelope"></i>
              <h4>Gmail</h4>
            </a>
          </div>
          <div className="LinkedIn Social-Icon">
            <a href="https://www.linkedin.com/in/er-yashkumar-jani-064072299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i class="fa-brands fa-linkedin-in"></i>
              <h4>LinkedIn</h4>
            </a>
          </div>
          <div className="WhatsApp Social-Icon">
            <a href="https://wa.me/8320870517">
              <i class="fa-brands fa-whatsapp"></i>
              <h4>WhatsApp</h4>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default transition(ContactUs);
