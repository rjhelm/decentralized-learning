import React from "react";

const Preload = (props) => {
    return <div id={props.laod ? "preloader" : "preloader-none"}></div>;
}

export default Preload;