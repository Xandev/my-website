import { FC } from "react";
import HtmlHead from "../HtmlHead/HtmlHead";

interface LayoutProps {
  title?: string;
  children?: any;
}

const Layout: FC<LayoutProps> = ({
  children,
  title = "Radosław Mariowski",
}) => {
  return (
    <>
      <HtmlHead title={title} />

      {children}

      <style jsx global>{`
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
          background: #fff url(../images/bg.png);
          font-family: "Open Sans", "Helvetica Neue", "Helvetica", "Roboto",
            "Arial", sans-serif;
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
