import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

const Dowload = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>GitHub</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Jette un coup d'oeil à mon travail sur GitHub, pour te faire une
            idée de comment je travaille. Tu peux aussi t'en inspirer :-)
          </p>
        </div>
        <button
          className={styles.btnPrimary}
          onClick={() =>
            window.open("https://github.com/PapyrusMory", "_blank")
          }
        >
          GitHub
        </button>

        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="dowload_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Dowload;
