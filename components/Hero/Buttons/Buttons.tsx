import { FC } from "react";

const Buttons: FC = () => {
  return (
    <>
      <a href="/about" className="button" title="About Me" aria-label="About Me">
        About Me
      </a>
      <a href="/blog" className="button" title="Blog" aria-label="Blog">
        Blog
      </a>

      <style jsx={true}>{`
        .button {
          display: inline-block;
          width: 100px;
          padding: 12px 0;
          margin: 0 5px;
          border: 2px solid #337ab7;
          border-radius: 3px;
          color: #337ab7;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          text-decoration: none;
          user-select: none;
        }

        .button:hover {
          background-color: #337ab7;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Buttons;
