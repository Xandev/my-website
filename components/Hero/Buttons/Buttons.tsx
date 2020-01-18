import { FC } from "react";
import styles from "./Buttons.module.css"

const Buttons: FC = () => {
  return (
    <>
      <a href="/about" className={styles.button} title="About Me" aria-label="About Me">
        About Me
      </a>
      <a href="/blog" className={styles.button} title="Blog" aria-label="Blog">
        Blog
      </a>
    </>
  );
};

export default Buttons;
