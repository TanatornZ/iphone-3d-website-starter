import React from "react";
import AnimatedLogo from "../assets/images/logo-animated.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={AnimatedLogo} alt="Iphone Loader" />
    </div>
  );
}

export default Loader;
