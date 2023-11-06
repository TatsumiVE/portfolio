import { NavLink } from "react-router-dom";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { FaceIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./model-toggle";
const routes = [
  {
    label: "Introduction",
    to: "/",
  },
  {
    label: "Blogs",
    to: "/",
  },
  {
    label: "Projects",
    to: "/",
  },
  {
    label: "Contact",
    to: "/",
  },
];
const Header = () => {
  return (
    <header className="sm:flex sm:justify-between w-full py-3 px-4 border-b fixed top-0 left-0">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-6 flex h-16 itmes-center justify-between w-full">
          <div className="flex items-center">
            <NavLink to="/">
              <h1 className="text-4xl font-bold">Yhk</h1>
            </NavLink>
          </div>
          <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:flex">
            {routes.map((route, index) => {
              return (
                <Button asChild variant="ghost" key={index}>
                  <NavLink
                    to="/"
                    className="text-xl font-medium transition-colors"
                  >
                    {route.label}
                  </NavLink>
                </Button>
              );
            })}
          </nav>
          <div className="flex items-center">
            {/* <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              arial-label="profile"
              
            >
              <span>
                <FaceIcon className="h-6 w-6" />
              </span>
            </Button> */}
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
