import { Grip } from "lucide-react";
import TextSlide from "./text-slide";

const Nav = ({ setMenuModal }) => {
  return (
    <nav className="flex flex-col items-start justify-between">
      <div className="size-full flex justify-between">
        <div
          className="flex items-center gap-2 cursor-default group"
          onClick={() => setMenuModal(true)}
        >
          <div className="flex flex-col gap-1">
            <div className="w-[14px] h-[2px] bg-t group-hover:-translate-y-[1px] transition-all duration-500"></div>
            <div className="w-[14px] h-[2px] bg-t group-hover:translate-y-[1px] transition-all duration-500"></div>
          </div>

          <TextSlide text="MENU" />
        </div>

        <div className="flex items-center gap-2 max-lg:hidden">
          <Grip size={18} className="text-t " />
          <p className="text-t text-[12px] font-medium font-azeret uppercase">
            Collection
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
