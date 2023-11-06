import React from "react";
import { Player } from 'video-react';
import {close } from "../assets";

const Popup = ({data,handleClosePopup}) => {
  return (
    <div className='popup'>
      <div className="inner bg-tertiary">
        <img src={close} className='w-[28px] h-[28px] object-contain close-popup' onClick={handleClosePopup}
        />
        {data?.video ?
          <div className="video">
          <div className="height-40 w-full text-center text-[24px] text-secondary">Video</div>
           <video className="pr-video" controls >
             <source src={data?.video} type="video/mp4"/>
           </video>
         </div>
        : (
          <div className="img-popup">
            <img
              src={data?.imageProject || data?.image}
              alt='project_image'
            />
          </div>
        )}
        <div className={`content`}>
        <div className=" w-full height-40"/>
          <div className="text-[17px] text-secondary mb-4">
            <span className=" text-[18px]">Project Name: </span>
            {data?.name}
          </div>
          {data?.link && <div className="cursor-pointer link-pr text-secondary mb-4 text-[18px]" onClick={(e) => {window.open(data?.link, "_blank"); e.stopPropagation()}}>Link Website</div>}
          <div className="text-[17px] text-secondary mb-4">
            <span className=" text-[18px]">Description: </span>
            {data?.description}
          </div>
          <div className="text-[17px] text-secondary mb-4">
            <span className=" text-[18px]">Contribution: </span>
            {data?.works.map((value, index) => (
              <div key={index}>{value && <div key={index} className="flex items-center"><div className="dot"/><>{value}</></div>}</div>
            ))}
          </div>
          <div className="text-[17px] text-secondary mb-4">
            <span className=" text-[18px]">Technology: </span>
            <div className='flex flex-wrap gap-2'>
              {data?.tags.map((value, index) => (
                <p key={`${value?.name}-${index}`} className={`text-[14px] ${value.color}`}>#{value?.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
