import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface SocialItemProps {
  href: string;
  icon: IconDefinition;
  title: string;
}

const SocialItem: FC<SocialItemProps> = (props: SocialItemProps) => {
  return (
    <>
      <li className="social-item">
        <a href={props.href} target="_blank" title={props.title} aria-label={props.title}>
          <FontAwesomeIcon icon={props.icon} />
        </a>
      </li>

      <style jsx={true}>{`
        .social-item {
          display: inline-block;
          padding: 0 10px;
          font-size: 30px;
        }

        .social-item a {
          color: #9a9a9a;
          text-decoration: none;
        }

        .social-item a:hover {
          color: #337ab7;
        }
      `}</style>
    </>
  );
};

export default SocialItem;
