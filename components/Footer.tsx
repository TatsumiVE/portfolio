import Socials from "./Socials";
const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px]  dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Ye Htut Kyaw.All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
