import { FC } from "react";

const Avatar: FC = () => {
  return (
    <>
      <img className="avatar" src="images/me.jpg" />

      <style jsx={true}>{`
        .avatar {
          width: 120px;
          height: 120px;
          padding: 3px;
          border: 1px solid #dedede;
          border-radius: 50%;
          user-select: none;
        }
      `}</style>
    </>
  );
};

export default Avatar;
