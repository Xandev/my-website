import { FC } from "react";
import HtmlHead from "../HtmlHead/HtmlHead";
import GitHubCorner from "./GitHubCorner/GitHubCorner";

interface LayoutProps {
  title?: string;
  children?: any;
}

const Layout: FC<LayoutProps> = ({ children, title = "Radosław Mariowski" }) => {
  return (
    <>
      <HtmlHead title={title} />
      <GitHubCorner />

      {children}

      <style jsx={true} global={true}>{`
        html {
          height: 100%;
          min-height: 100%;
          box-sizing: border-box;
        }

        *,
        *::after,
        *::before {
          box-sizing: inherit;
        }

        body {
          width: 100%;
          height: 100%;
          min-height: 100%;
          margin: 0;
          border-top: 5px solid #337ab7;
          background: #fff url(images/bg.png);
          font-family: "Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
          font-feature-settings: "kern", "liga", "pnum";
          font-size: 1em;
          font-weight: 400;
          line-height: 1.5;
        }

        #__next {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
