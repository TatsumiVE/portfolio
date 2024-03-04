import React from "react";
import Image from "next/image";
const ProfileImage = ({ containerStyles, imgSrc }: any) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default ProfileImage;
