import React from "react";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      Ye Htut Kyaw
      {/* <Image
        src="logo.svg"
        width={54}
        height={54}
        priority
        alt="tatsumi-yehtutkyaw"
      ></Image> */}
    </Link>
  );
};

export default Logo;
