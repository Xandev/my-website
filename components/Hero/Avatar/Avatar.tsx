import { FC } from "react";

const Avatar: FC = () => {
  return (
    <>
      <img className="avatar" src="images/me.jpg"></img>

      <style jsx>{`
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

export default Avatar;
