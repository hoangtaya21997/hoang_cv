import React, { useRef, useState, useEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, Internet } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { VideoDB } from '../Firebase/config';
import { deleteObject, getDownloadURL, ref, listAll } from 'firebase/storage';
import Popup from "./Popup";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  time,
  works,
  video,
  setDataPopup,
  link,
  imageProject
}) => {
  useEffect(() => {
  //   const videoRef = ref(VideoDB, 'video');
  //   listAll(videoRef)
  //     .then((result) => {
  //       const videoURLs = [];
  //       result.items.forEach((item) => {
  //         getDownloadURL(item)
  //           .then((url) => {
  //             videoURLs.push(url);
  //             // Kiểm tra xem đã lấy hết các URL chưa
  //             if (videoURLs.length === result.items.length) {
  //               console.log('Danh sách URL của các video:', videoURLs);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error('Lỗi khi lấy URL cho video:', error);
  //           });
  //       });
  //     })
  // .catch((error) => {
  //   console.error('Lỗi khi lấy danh sách video:', error);
  // });
  }, []);
  
  const handleSetDataPopup = () => {
    const data = {
      name,
      time,
      description,
      works,
      tags,
      video,
      image,
      link,
      imageProject,
    }
    setDataPopup(data)
  }

  return (
    <motion.div onClick={handleSetDataPopup} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      >
        <div className='relative w-full h-[230px]' >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {source_code_link && 
              <div
                onClick={(e) => {window.open(source_code_link, "_blank"); e.stopPropagation()}}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover-1'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            }
              {link && <div
                onClick={(e) => {window.open(link, "_blank"); e.stopPropagation()}}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover-1'
              >
                <img
                  src={Internet}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] ellipsis'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isPopup, setPopUp] = useState(false);
  const [dataPopup, setDataPopup] = useState(false);


  const handleSetDataPopup = (data) => {
    setPopUp(true)
    setDataPopup(data);
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work. 
          In addition, there are some personal projects by self-study.
        </motion.p>
      </div>
      {isPopup && <Popup name="aaaa" handleClosePopup={()=>setPopUp(false)} data={dataPopup}/>}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} setDataPopup={handleSetDataPopup}/>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
