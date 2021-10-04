import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
    return (
        <Typewriter 
            options={{ strings: ["", "", ""], autoStart: true, loop: false, deleteSpeed: 50, }}/>
    );
}

export default Typing;