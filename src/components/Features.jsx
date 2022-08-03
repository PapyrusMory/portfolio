import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Quelques technologies qui m'accompagnent au jour le jour dans mon
            travail
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react1} iconText="React" />
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
          <FeatureCard iconUrl={assets.typescript} iconText="TypeScript" />
          <FeatureCard iconUrl={assets.mongodb} iconText="MongoDB" />
          <FeatureCard iconUrl={assets.express} iconText="Express" />
          <FeatureCard iconUrl={assets.node} iconText="Node" />
          <FeatureCard iconUrl={assets.tailwind} iconText="TailwindCSS" />
          <FeatureCard iconUrl={assets.mui} iconText="Material-UI" />
          <FeatureCard iconUrl={assets.antd} iconText="Antd" />
        </div>
      </div>
    </div>
  );
};

export default Features;
