import { FC } from "react";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import Social from "./Social/Social";

const Hero: FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <Avatar />
          <Info />
          <Buttons />
          <Social />
        </div>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .hero-container {
          display: inline-block;
          max-width: 800px;
          margin: 0 auto;
          padding: 1.5em;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Hero;
