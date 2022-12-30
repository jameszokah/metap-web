import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import ButtonDisplayLayout from "./button_display_layout";
import {
  HomeIcon,
  NotificationIcon,
  ChatOutlineIcon,
  VideoIcon,
  GroupOutlineIcon,
  SettingsOutlineIcon,
} from "./icons";

const Nav = ({ setChat }: { setChat: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      <nav className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center space-y-2 px-4">
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout>
              <Image src={HomeIcon} alt="Home Icon" className="" />
            </ButtonDisplayLayout>
          </div>
        </div>
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout>
              <Image src={VideoIcon} alt="Home Icon" className="" />
            </ButtonDisplayLayout>
          </div>
        </div>
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout onClick={() => setChat(true)}>
              <Image src={ChatOutlineIcon} alt="Home Icon" className="" />
            </ButtonDisplayLayout>
          </div>
        </div>
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout>
              <Image
                src={NotificationIcon}
                alt="Notification Icon"
                className=""
              />
            </ButtonDisplayLayout>
          </div>
        </div>
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout onClick={() => setChat(false)}>
              <Image src={GroupOutlineIcon} alt="Home Icon" className="" />
            </ButtonDisplayLayout>
          </div>
        </div>
        <div className="py-4">
          <div className="px-3 border-r-2 border-transparent hover:border-r-2 hover:border-primary">
            <ButtonDisplayLayout>
              <Image src={SettingsOutlineIcon} alt="Home Icon" className="" />
            </ButtonDisplayLayout>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
