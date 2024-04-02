import transition from '../transition';
import { motion } from 'framer-motion';
import './ContactUs.scss';

function ContactUs() {
  return (
    <motion.div className="Contact"
      initial={{ y: "50px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
      exit={{ y: "-50px", opacity: 0, transition: { duration: 0.25, delay: 0, ease: "easeInOut" } }}>

      <img src={process.env.PUBLIC_URL + '/contactMe.jpg'} className='Contact-Logo' alt='logo' />

      <div className='Contact-Text'
        initial={{ y: "50px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
        exit={{ y: "-50px", opacity: 0 }}>
        <h1>Get in touch </h1>
        <hr />
        <div className='Contact-Description'>
          <div className='Gmail'>
            <i class="fa-regular fa-envelope"></i>
            <h4> Gmail </h4>
          </div>
          <div className='LinkedIn'>
            <i class="fa-brands fa-linkedin-in"></i>
            <h4> LinkedIn </h4>
          </div>
          <div className='WhatsApp'>
            <i class="fa-brands fa-whatsapp"></i>
            <h4> WhatsApp</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default transition(ContactUs);
