import React from "react";
import TypingEffect from "../components/typingeffect";



const Masthead = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-bg'>
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <TypingEffect />
      </div>
    </div>
  );
};

export default Masthead;
