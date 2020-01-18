import { FC } from "react";
import styles from "./Info.module.css";

const Info: FC = () => {
  return (
    <>
      <h1 className={styles.header}>Welcome!</h1>
      <h3 className={styles.description}>
        I'm <strong className={styles.name}>Radosław Mariowski</strong>, a <em>Full Stack Developer</em>.<br />
        Commercial experience in developing: <em className={styles.keywords}>
          web, server, mobile applications
        </em> and <em className={styles.keywords}>games</em>.
      </h3>
    </>
  );
};

export default Info;
