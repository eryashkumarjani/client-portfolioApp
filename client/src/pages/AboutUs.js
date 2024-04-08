import transition from '../transition';
import { motion } from 'framer-motion';
import './AboutUs.scss';

function AboutUs() {
  return (
    <motion.div className="About"
      initial={{ y: "60px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}
      exit={{ y: "-60px", opacity: 0, transition: { duration: 0.25, delay: 0, ease: "easeInOut" } }}>

      <img src={process.env.PUBLIC_URL + '/aboutImg.jpeg'} className='About-Logo' alt='logo' />

      <div className='About-Text'>
        <h1>About Me. </h1>
        <p>I'm Er Yashkumar Jani, a MERN Stack Developer with 6+ years of experience in the field.
          My journey began as a Web Developer, where I honed my skills in HTML5, CSS3, Bootstrap and SCSS.
          As my career progressed, I transitioned into an Angular Developer role where I further developed my JavaScript skills
          and got acquainted with Angular. My passion for learning led me to React development at Wipro. Here,
          I built dynamic web applications that not only engaged users but also retained them.
          My proficiency in Tailwind CSS helped me create visually appealing and responsive designs.
          Currently, as a MERN Stack Developer at Pesto Tech, I am utilizing MongoDB, Express.js, React.js and Node.js to develop robust web applications.
          My ability to quickly adapt and learn has been instrumental in my growth as a developer.</p>
        <p>
          In summary, my experience spans across various technologies like HTML5, CSS3, Bootstrap, SCSS, JavaScript,
          Tailwind CSS, Angular, React and Node.js with a special focus on MERN stack development.
          If you're looking for someone who can build engaging web applications using the MERN stack while contributing positively to your team environment - let's connect!
        </p >


      </div >
    </motion.div >
  );
}

export default transition(AboutUs);
