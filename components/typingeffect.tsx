import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        className="text-6xl uppercase text-center"
        speed={100}
        eraseSpeed={100}
        eraseDelay={400}
        typingDelay={500}
        text={[
            'hello!',
            "my name is edwin.",
            "i'm a student at unt.",
            "i'm a software engineer at Tesla."
            ]}
      />    
    </>
  );
};

export default ReactTypingEffectDemo;