import Image from "next/image";
import { FC } from "react";
import {
  UserFillIcon,
  VideoIcon,
  VideoOffIcon,
  MicOffIcon,
  MicOnIcon,
} from "./icons";

interface PeerProps {
  stream?: MediaStream;
  video?: boolean;
  audio?: boolean;
  name?: string;
}

const Peer: FC<PeerProps> = ({
  stream,
  video = false,
  audio = true,
  name = "James Zokah",
}) => {
  return (
    <>
      <div
        className={`rounded-lg ${
          video && "bg-black"
        } border  border-primary sm:w-40 h-40 xs:w-32 xs:h-32 lg:w-48 lg:h-48 flex justify-center items-center`}
      >
        <div
          className={`relative hover:cursor-pointer hover:[&>p]:invisible ${
            video ? "" : "w-28 h-28 lg:w-32 lg:h-32"
          }`}
        >
          <p
            className={`absolute text-sm  ${
              video
                ? "text-gray-400 -top-8 left-3"
                : "text-primary -top-6 -left-2 "
            }`}
          >
            {name}
          </p>
          {video ? (
            <video
              src={""}
              autoPlay
              controls
              className="w-full h-full"
            />
          ) : (
            <Image
              src={UserFillIcon}
              alt="peer"
              className="w-full h-full object-fill"
            />
          )}
          <div
            className={`absolute ${
              video ? "left-1 -bottom-8" : "-left-3 -bottom-5"
            } flex space-x-2`}
          >
            {video ? (
              <Image src={VideoIcon} alt="video on" className="p-1" />
            ) : (
              <Image src={VideoOffIcon} alt="video off" className="p-1" />
            )}
            {audio ? (
              <Image src={MicOnIcon} alt="video on" className="p-1" />
            ) : (
              <Image src={MicOffIcon} alt="video off" className="p-1" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Peer;
