import { useState } from "react";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "absolute top-[132px] z-50 flex w-full flex-col items-start gap-6 bg-bg font-bebas py-5 px-4 text-xl transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen ? "left-0 z-40 shadow shadow-neutral-200" : "-left-full")
        }
      >
        {links.map((link, idx) => {
          if (link.sublinks) {
            return (
              <li key={idx} className="group relative">
                <a href={link.link}>{link.linkText}</a>
                <ul className="z-50 w-full pt-1 pl-5 text-center text-black xl:absolute xl:left-1/2 xl:hidden xl:w-[275px] xl:-translate-x-1/2 xl:pl-0  xl:shadow xl:group-hover:block">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="text-left first:rounded-t last:rounded-b xl:bg-white xl:text-center xl:hover:bg-primary xl:hover:text-white"
                    >
                      <a className="block py-2 px-4" href={sublink.link}>
                        {sublink.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a href={link.link}>{link.linkText}</a>
              </li>
            );
          }
        })}
        <li className="block w-full">
          <a
            href="/your-fitness-journey"
            className="w-full xl:w-auto inline-block  py-5 px-6 font-bold text-xl bg-accent rounded text-white  text-center xl:text-left "
          >
            Start Your Fitness Journey
          </a>
        </li>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
