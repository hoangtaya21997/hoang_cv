import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {Tilt} from "react-tilt";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Tilt
            options={{
              max: 90,
              scale: 1,
              speed: 450,
            }}
          >
            <img src={technology.icon}/>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
