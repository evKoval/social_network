import preloaderImg from "../../../assets/images/loader.gif";
import React from "react";
import styles from "./Preloader.module.css"

let Preloader = props => {
  return (
    <div className={styles.preloader} >
      <img src={preloaderImg} alt={"animated preloader"} />
    </div>
  );
};
export default Preloader;
