import React, { FC } from "react";
import { faGithubSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialItem from "./Item/SocialItem";

const Social: FC = () => {
  return (
    <>
      <ul className="social">
        <SocialItem href="https://github.com/Xandev" icon={faGithubSquare} />
        <SocialItem href="https://twitter.com/RMariowski" icon={faTwitterSquare} />
        <SocialItem href="https://www.linkedin.com/in/rados%C5%82aw-mariowski-4a1465ba/" icon={faLinkedin} />
      </ul>

      <style jsx={true}>{`
        .social {
          padding: 0;
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default Social;
