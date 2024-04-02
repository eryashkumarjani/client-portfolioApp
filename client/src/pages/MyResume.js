import transition from '../transition';
import { motion } from 'framer-motion';
import './MyResume.scss';

function MyResume() {
  return (
    <motion.div className="Resume"
      initial={{ y: "50px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
      exit={{ y: "-50px", opacity: 0, transition: { duration: 0.25, delay: 0, ease: "easeInOut" } }}>

      <div className='Resume-Text'>
        <h1>My Resume </h1>
      </div>
    </motion.div>
  );
}

export default transition(MyResume);
