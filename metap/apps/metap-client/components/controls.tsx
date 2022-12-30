import { FC } from "react";
import Image from "next/image";
import ButtonControl from "./button_control";
import {
  ShareOutlineIcon,
  AddToolsFillIcon,
  MicOnIcon,
  VideoIcon,
  ScreenShareFillIcon,
  CallFillIcon,
  EditBoardFillIcon,
  PollFillIcon,
  HandsUpFillIcon,
  HMenuFillIcon,
  SecureCheckFillIcon,
} from "./icons";

const Controls: FC = () => {
  return (
    <>
      <div className="flex w-[80%] lg:w-full h-full justify-between items-center border border-gray-600 lg:border-none rounded-lg px-1 lg:px-0 ">
        <div className="hidden md:flex lg:flex justify-evenly items-center w-[50%]">
          <ButtonControl className="p-2 hover:shadow-md focus:shadow-lg active:shadow-lg">
            <Image src={ShareOutlineIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="flex justify-between items-center text-center p-2 hover:shadow-md focus:shadow-lg active:shadow-lg">
            <Image src={AddToolsFillIcon} alt="logout" className="" />
            <p className=" ml-3 text-gray-400 text-center">Tools</p>
          </ButtonControl>
        </div>

        <div className="flex justify-around lg:justify-evenly items-center w-full">
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={MicOnIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={VideoIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 hidden lg:block focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={ScreenShareFillIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-rose-700 rounded-lg p-2 active:bg-gray-400/10">
            <Image src={CallFillIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 hidden lg:block focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={EditBoardFillIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 hidden lg:block focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={PollFillIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="bg-gray-300/20 rounded-lg p-2 hidden lg:block focus:bg-gray-700 hover:bg-gray-700 hover:shadow-lg active:bg-gray-400/10">
            <Image src={HandsUpFillIcon} alt="logout" className="" />
          </ButtonControl>
        </div>

        <div className=" flex justify-evenly items-center w-[50%]">
          <ButtonControl className="p-2 hove:shadow-md focus:shadow-lg active:shadow-lg">
            <Image src={HMenuFillIcon} alt="logout" className="" />
          </ButtonControl>
          <ButtonControl className="hidden lg:block p-2 hover:shadow-md focus:shadow-lg active:shadow-lg">
            <Image src={SecureCheckFillIcon} alt="logout" className="" />
          </ButtonControl>
        </div>
      </div>
    </>
  );
};

export default Controls;
