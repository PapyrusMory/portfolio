import React from "react";
import styles from "../styles/Global";

const Button = ({ link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col justify-end ">
        <p className={`${styles.btnText} font-bold text-sm`}>Engagez-moi</p>
      </div>
    </div>
  );
};

export default Button;
