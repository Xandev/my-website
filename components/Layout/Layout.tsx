import { layoutStyle } from "./Layout.style";

interface LayoutProps {
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return <div style={layoutStyle}>{props.children}1111</div>;
}
