import { layoutStyle } from "./Layout.style";
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
    <div style={layoutStyle}>
      <HtmlHead title={title} />
      {children}
    </div>
  );
};

export default Layout;
