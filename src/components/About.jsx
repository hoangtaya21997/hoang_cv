import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am a computer science engineer who graduated from the Military Technical Academy in 2020.
        <br/> As a Frontend web developer with three years of experience working with React, I possess skills in HTML, CSS, SASS, Tailwind, Bootstrap, NextJS, TypeScript, Redux, React Library, JavaScript, jQuery, React Native, Git/GitHub/GitLab, Vercel, and Firebase.
        <br/>In addition, I have proactively explored Laravel and Unity 2D game development. 
        <br/>I am proficient in creating React applications, managing component lifecycles, and utilizing various libraries. 
        <br/>I am adept at designing independent and reusable components, building highly accurate and complex UIs quickly, and implementing animations, from simple to intricate.
        <br/>Furthermore, I am known for my cheerful and humorous personality. I enjoy playing sports such as badminton, table tennis, billiards, and running. I also have a slight knack for music. 
        <br/>I am a fast learner and am known for my ability to work harmoniously with others, collaborating closely with colleagues to create the highest-quality products.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
