import preloaderImg from "../../../assets/images/loader.gif";
import React from "react";

let Preloader = props => {
  return (
    <div>
      <img src={preloaderImg} alt={"animated preloader"} />
    </div>
  );
};
export default Preloader;
