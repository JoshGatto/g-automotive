import React from "react";
import styles from "./Hero.module.scss";
import heroData from "../../data/heroData.json";

const Hero = () => {
  const { title, description, buttonText } = heroData;

  return (
    <header
      className={styles.hero}
      role="banner"
      aria-label="Welcome section for G Automotive"
    >
      <h1 id="hero-title">{title}</h1>
      <p id="hero-description">{description}</p>
      <button
        className="button"
        aria-labelledby="hero-title hero-description"
        aria-label={buttonText}
      >
        {buttonText}
      </button>
    </header>
  );
};

export default React.memo(Hero);
