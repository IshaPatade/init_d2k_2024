import React from "react";
import logo from "../assets/logo.png";
import "./styles.css"
import Timer from "./Timer_2024";

  const navigateToLink = () => {
    window.location.href = "https://unstop.com/hackathons/data-2-knowledge-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering-djsce-mumbai-874519?lb=gLcAz6g7";
  };


const About_event = () => {
  return (
    <div className="flex flex-col items-center justify-center ml-[-80px] ">
      <img
        src={logo}
        className="w-[400px] h-[100px] object-fit mt-10 mb-8 "
      ></img>
     
      
      <Timer className="" />
      <p className="roboto text-white  p-6 text-justify">
        Following the groundbreaking success of D2K in 2023, this year marks the
        second edition of the 6-hour Datathon. Set to challenge participants, the event goes
        beyond competition, offering an immersive experience where teams unravel
        solutions within the ticking clock. Expect a thrilling journey, packed
        with learning, collaboration, and the excitement of applying machine
        learning principles to solve practical challenges.
      </p>
      {/* <div className="flex justify-center items-center">
        <button
          className="pulseBox font-['Koulen'] px-3 py-2 rounded-lg "
          onClick={navigateToLink}
        >
          register now!
        </button>
      </div> */}
    </div>
  );
};

export default About_event;
