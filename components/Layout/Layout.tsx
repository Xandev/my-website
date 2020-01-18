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
    </>
  );
};

export default Layout;
