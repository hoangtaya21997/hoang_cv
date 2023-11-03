import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("bottom", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[550px] h-[350px] md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
