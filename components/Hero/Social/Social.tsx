import React, { FC } from "react";
import { faGithubSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import SocialItem from "./Item/SocialItem";
import styles from "./Social.module.css"

const Social: FC = () => {
  return (
    <ul className={styles.list}>
      <SocialItem href="mailto:radek@mariowski.pl" icon={faEnvelopeSquare} title="Mail To" />
      <SocialItem href="https://github.com/Xandev" icon={faGithubSquare} title="GitHub" />
      <SocialItem href="https://twitter.com/RMariowski" icon={faTwitterSquare} title="Twitter" />
      <SocialItem
        href="https://www.linkedin.com/in/rados%C5%82aw-mariowski-4a1465ba/"
        icon={faLinkedin}
        title="LinkedIn"
      />
    </ul>
  );
};

export default Social;
