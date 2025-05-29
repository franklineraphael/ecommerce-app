import React from "react";

// import base from "../asset2/img4.jpg";
import video1 from "../assets-2/unvld.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:items-center border-black">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-black">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            <p className="font-medium text-sm md:text-base"></p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed ">
            GET FAMILIAR DROP
          </h1>
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-black"></p>
            <p className="font-medium text-sm md:text-base"></p>
          </div>
        </div>
        //{" "}
      </div>
      {/* // <video autoPlay muted loop src={video1} width={500}></video> */}
      <img src="/name.jpg" alt="" className="w-[100%]" />
    </div>
  );
};

export default Hero;
