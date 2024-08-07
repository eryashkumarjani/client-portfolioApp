import "./Home.scss";
import transition from "../transition";
import { motion } from "framer-motion";

function Home() {
  const initial = { y: "60px", opacity: 0 };
  const animate = { y: 0, opacity: 1 };
  const transition = { duration: 2, delay: 0, ease: "easeInOut" };

  return (
    <div className="Home">
      <motion.img
        initial={initial}
        animate={animate}
        transition={transition}
        exit={{
          y: "-60px",
          opacity: 0,
          transition: { duration: 0.25, delay: 0, ease: "easeInOut" },
        }}
        src={process.env.PUBLIC_URL + "/homeImg.Jpeg"}
        className="Home-Logo"
        alt="logo"
      />

      <motion.div
        className="Home-Text"
        initial={initial}
        animate={animate}
        transition={transition}
        exit={{ y: "-50px", opacity: 0 }}
      >
        <h1>Hi, I am Yashkumar Jani </h1>
        <p> MERN STACK DEVELOPER </p>
      </motion.div>
    </div>
  );
}

export default transition(Home);
