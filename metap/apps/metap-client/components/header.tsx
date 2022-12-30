import { FC } from "react";
import {
  Logo,
  Chevron,
  FullDisplayIcon,
  SemiFullIcon,
  FullLayoutIcon,
  SunIcon,
  MoonIcon,
  SecureCheckFillIcon,
} from "./icons";
import Image from "next/image";
import ButtonDisplayLayout from "./button_display_layout";
import ButtonControl from "./button_control";

interface HeaderProps {
  roomTitle: string;
  recodingTime: string;
  setOpen: () => void;
}

const Header: FC<HeaderProps> = ({ roomTitle, recodingTime, setOpen }) => {
  return (
    <>
      <header className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto px-5 pt-1 lg:pt-2 ">
        <div className="flex justify-between items-center w-full">
          <div className="flex lg:hidden">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="lg:hidden p-1 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-[#14E8D8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:w-[35%] items-center">
            <Image
              src={Logo}
              alt="logo"
              className="lg:p-1 p-2 opacity-40 lg:opacity-100 md:opacity-90"
            />

            <div className="h-10 w-px mx-5 bg-gray-700 hidden lg:block"></div>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="px-4 py-4 rounded hover:bg-semi-dark/80 border border-gray-700 hidden lg:block flex justify-center items-center"
              onClick={() => setOpen()}
            >
              <Image
                src={Chevron}
                alt="arrow down icon"
                className="rotate-90 text-center"
              />
            </button>
            <h3 className="antialiased text-xs font-semibold lg:text-sm lg:font-semibold uppercase text-center text-gray-300">
              {roomTitle}
            </h3>

            <div className="rounded-full flex place-content-center px-3 hidden text-center py-0 lg:block font-bold tracking-wide bg-semi-dark border border-gray-400 bg-slate-700 text-gray-300">
              <p className="text-center">{recodingTime}</p>
            </div>
          </div>

          <div className="flex justify-between items-center lg:w-[35%]">
            <div className="flex justify-between items-center hidden space-x-1 lg:flex">
              <ButtonDisplayLayout>
                <Image src={FullDisplayIcon} alt="Full Display Icon" />
              </ButtonDisplayLayout>
              <ButtonDisplayLayout>
                <Image src={SemiFullIcon} alt="Semi Full Icon" />
              </ButtonDisplayLayout>
              <ButtonDisplayLayout>
                <Image src={FullLayoutIcon} alt="Full Layout Icon" />
              </ButtonDisplayLayout>
            </div>

            <div className="rounded-full bg-[#1B6469]/50 w-14 h-6 hidden lg:flex items-center border border-primary relative">
              <Image
                src={MoonIcon}
                alt="moon Icon"
                className="absolute left-0 p-1 ml-1"
              />
              <div className="w-6 h-6 rounded-full absolute bg-primary cursor-pointer"></div>
              <Image
                src={SunIcon}
                alt="Sun Icon"
                className="absolute right-0 p-1 mr-1"
              />
            </div>
            <div className="flex space-x-1">
              <div className="w-9 h-9 rounded-full bg-white"></div>
              <ButtonDisplayLayout className="p-1 rounded-lg">
                <Image src={Chevron} alt="arrow down" />
              </ButtonDisplayLayout>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center lg:hidden w-full">
          <ButtonControl className="lg:hidden p-1">
            <Image src={SecureCheckFillIcon} alt="logout" className="" />
          </ButtonControl>
          <div className="rounded-full flex justify-center items-center px-2 lg:hidden text-center py-0 lg:block font-bold bg-semi-dark border border-gray-400 bg-slate-700 text-gray-300">
            <p className="text-center">{recodingTime}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
