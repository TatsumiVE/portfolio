"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  // { path: "/", name: <RiYoutubeFill /> },
  {
    path: "https://www.linkedin.com/in/ye-htut-kyaw-3882b1240",
    name: <RiLinkedinFill />,
  },
  { path: "https://github.com/TatsumiVE", name: <RiGithubFill /> },
  {
    path: "https://www.facebook.com/tatsumi.9.yehtut",
    name: <RiFacebookFill />,
  },
  // { path: "/", name: <RiInstagramFill /> },
];
const Socials = ({ containerStyles, iconsStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
