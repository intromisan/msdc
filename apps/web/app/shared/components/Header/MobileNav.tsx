import { FC } from "react";
import { stopEvent } from "../../helper";
import { navigationLinks } from "../../data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed md:hidden inset-0 bg-black/15 backdrop-blur-xs transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`
            absolute left-0 bottom-0 w-screen h-3/4 bg-white rounded-3xl p-6 flex flex-col
            transition-all duration-300
            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }
          `}
        onClick={stopEvent}
      >
        {navigationLinks.map((link) => {
          return (
            <a key={link.path} href={link.path} className="py-4 text-xl w-fit">
              <span>{link.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
