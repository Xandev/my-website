import { FC } from "react";

const Info: FC = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <h3>
        I'm <strong>Radosław Mariowski</strong>, a <em>Full Stack Developer</em>.<br />
        Commercial experience in developing: <em>web, server, mobile applications</em> and <em>games</em>.
      </h3>

      <style jsx={true}>{`
        h1 {
          margin: 0;
          font-size: 43px;
          font-weight: 700;
        }

        h3 {
          margin: 14px 0;
          font-weight: 400;
        }

        strong {
          font-size: 21px;
          font-weight: 700;
        }

        em {
          font-weight: 500;
          color: #337ab7;
        }
      `}</style>
    </>
  );
};

export default Info;
