import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import styles from "./SocialItem.module.css";

interface SocialItemProps {
  href: string;
  icon: IconDefinition;
  title: string;
}

const SocialItem: FC<SocialItemProps> = (props: SocialItemProps) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={props.href} target="_blank" title={props.title} aria-label={props.title}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
    </li>
  );
};

export default SocialItem;
