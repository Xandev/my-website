import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
