import React, { useRef, useState, useEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, Internet } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
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
  const handleSetDataPopup = () => {
    // const data = {
    //   name,
    //   time,
    //   description,
    //   works,
    //   tags,
    //   video,
    //   image,
    //   link,
    //   imageProject,
    // }

    // console.log(data)
    // setDataPopup(data)

    if(link) {
      window.open(link);
    }
  }

  return (
    <div onClick={handleSetDataPopup}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${link && 'cursor-pointer'}`}
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
    </div>
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
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <div
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-life examples of my works.
          <br/>
        </div>
      </div>
      {isPopup && <Popup name="aaaa" handleClosePopup={()=>setPopUp(false)} data={dataPopup}/>}
      <div className='mt-20 flex flex-wrap gap-7 item-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} setDataPopup={handleSetDataPopup}/>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
