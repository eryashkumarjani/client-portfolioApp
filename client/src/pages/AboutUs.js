import transition from '../transition';
import { motion } from 'framer-motion';
import './AboutUs.scss';

function AboutUs() {
  return (
    <motion.div className="About"
      initial={{ y: "50px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
      exit={{ y: "-50px", opacity: 0, transition: { duration: 0.25, delay: 0, ease: "easeInOut" } }}>

      <img src={process.env.PUBLIC_URL + '/aboutMe.JPG'} className='About-Logo' alt='logo' />

      <div className='About-Text'>
        <h1>About Me. </h1>
        <p>
          Hey there, I'm Yashkumar Jani, a product Developer based in Bharat with a passion for creating seamless and delightful user experiences. I especially enjoy working on developing operations and systems that help bring order to complexity.

          When I'm not developing, you can find me on Instagram.</p>


      </div>
    </motion.div>
  );
}

export default transition(AboutUs);
