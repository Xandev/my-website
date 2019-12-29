import { FC } from "react";

const Buttons: FC = () => {
  return (
    <>
      <a href="/about" className="button" title="about">
        About
      </a>
      <a href="/blog" className="button" title="blog">
        Blog
      </a>

      <style jsx>{`
        .button {
          display: inline-block;
          padding: 0.75em 1.5em;
          border: 2px solid #337ab7;
          border-radius: 3px;
          background-color: transparent;
          color: #337ab7;
          font-weight: 600;
          line-height: 1;
          vertical-align: middle;
          white-space: nowrap;
          cursor: pointer;
          text-decoration: none;
          user-select: none;
        }
      `}</style>
    </>
  );
};

export default Buttons;
