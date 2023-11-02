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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Tôi là một kỹ sư công nghệ thông tin đã tốt nghiệp tại học viện kỹ thuật quân sự năm 2020
        <br/>Là một Frontend web developer với ba năng kinh nghiệm làm vệc với React,<br/>
        có kỹ năng về HTML, CSS , SASS, Tailwind, Bootstrap, NextJS, Typescript, Redux, 
        React Library, JavaScript, Jquery, React Native, Git/GitHub/GitLab, Vercel, Firebase
        <br/>Ngoài ra tôi còn tự tìm hiểu thêm về laravel và Unity 2D game
        <br/>Tôi Sử dụng thành tạo React, Lifecycle Component, và các thư viện của chúng, thiết kế component độc lập và dễ dàng tái sử dụng,
        xây dựng UI phức tạp với mức độ chuẩn xác cao, nhanh chóng, thực hiện các animation đơn giản đến khá phức tạp.
        <br/>Ngoài ra tôi là một người có tính cách khá hài hước, vui vẻ, học hỏi nhanh, và hoà đồng với mọi người, 
        hợp tác chặt chẽ với các đồng nghiệp để cùng tạo ra các sản phẩm chất lượng nhất 
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
