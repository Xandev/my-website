import { FC } from "react";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import Social from "./Social/Social";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Avatar />
        <Info />
        <Buttons />
        <Social />
      </div>
    </section>
  );
};

export default Hero;
