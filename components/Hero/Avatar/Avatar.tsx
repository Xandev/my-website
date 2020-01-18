import { FC } from "react";
import styles from "./Avatar.module.css";

const Avatar: FC = () => {
  return <img className={styles.image} src="images/me.jpg" alt="avatar" />;
};

export default Avatar;
