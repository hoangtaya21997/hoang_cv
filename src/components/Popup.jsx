import React from "react";
import { Player } from 'video-react';
import {close } from "../assets";

const Popup = ({data,handleClosePopup}) => {
  return (
    <div className='popup'>
      <div className="inner bg-tertiary">
        <img src={close} className='w-[28px] h-[28px] object-contain close-popup' onClick={handleClosePopup}
        />
        <div className="video">
         <div className="height-40 w-full text-center text-[24px] text-white">Video Demo</div>
          <video className="pr-video" controls >
            <source src={data?.video} type="video/mp4"/>
          </video>
        </div>
        <div className="content">
        <div className=" w-full height-40"/>
          <div className="text-[17px] text-white">
            <span className=" text-[18px]">Thời gian: </span>
            {data?.time}
          </div>
          <div className="text-[17px] text-white">
            <span className=" text-[18px]">Tên Dự án: </span>
            {data?.name}
          </div>
          <div className="text-[17px] text-white">
            <span className=" text-[18px]">Mô Tả: </span>
            {data?.description}
          </div>
          <div className="text-[17px] text-white">
            <span className=" text-[18px]">công việc: </span>
            {console.log(data)}
            {data?.works.map((value, index) => (
              <div>{value && <div key={index} className="flex items-center"><div className="dot"/><>{value}</></div>}</div>
            ))}
          </div>
          <div className="text-[17px] text-white">
            <span className=" text-[18px]">công Nghệ sử dụng: </span>
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
