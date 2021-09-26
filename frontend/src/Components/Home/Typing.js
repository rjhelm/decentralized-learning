import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
    return (
        <Typewriter 
            options={{ strings: ["Eco-Friendly blockchain", "for developers to profit ", "while scaling maching learning projects with efficency."], autoStart: true, loop: true, deleteSpeed: 50, }}/>
    );
}

export default Typing;