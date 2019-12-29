import { FC } from "react";
import Head from "next/head";

interface IndexHeadProps {
  title: string;
}

const HtmlHead: FC<IndexHeadProps> = (props: IndexHeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default HtmlHead;
