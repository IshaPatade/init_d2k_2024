import React from 'react';
import timeline_img from "../assets/timeline_img.png"; 

const Timeline = () => {
  return (
    <div className="w-full  mt-10 flex justify-center items-center">
      <div>
        <img
          src={timeline_img}
          alt="Timeline"
          className="w-full h-full object-cover mt-[10vh] ml-[-5vw]"
        />
      </div>
    </div>
  );
};

export default Timeline;




