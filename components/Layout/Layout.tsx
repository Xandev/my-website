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
    </>
  );
};

export default Layout;
