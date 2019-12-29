import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <img className="avatar" src="https://i.imgur.com/66C5mgF.jpg"></img>
        </div>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-container {
          display: inline-block;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding: 1.5em;
          text-align: center;
        }

        .avatar {
          width: 120px;
          height: 120px;
          padding: 5px;
          border: 1px solid #dedede;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Hero;
