import useAuth from "@hooks/useAuth";
import React from "react";

interface ProfileTitleProps {
  fullname?: string;
  username?: string;
  postCount?: number;
}

const ProfileTitle = ({ fullname, username, postCount }: ProfileTitleProps) => {
  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col items-center">
          <h3 className="font-poppins-medium">{fullname}</h3>
          <h5 className="opacity-40">@{username}</h5>
        </div>
      </div>

      <div className="flex gap-10 py-10 justify-center">
        <div className="flex flex-col gap-1.5 text-center">
          <span className="font-poppins-semibold">{postCount}</span>
          <span className="opacity-40 font-poppins-semibold uppercase">
            Posts
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileTitle;
