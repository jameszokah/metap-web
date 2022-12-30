'use client'
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Box from "../../components/box";
import Participants from "../../components/participants";
import Chats from "../../components/chats";
import VideoGridLayout from "../../components/video_grid_layout";
import ButtonDisplayLayout from "../../components/button_display_layout";
import { GroupOutlineIcon, Chevron, AddFillIcon } from "../../components/icons";
import Controls from "../../components/controls";

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  const [chat, setChat] = useState(false);

  return (
    <div className={"w-screen h-screen bg-dark-primary"}>
      <Head>
        <title>Metap</title>
        <meta name="description" content="Metap video conferencing app" />
      </Head>
      <div className="relative">
        <Box className="left-[60%] top-[14.5%] rotate-45" />
        <Box className="left-[10%] top-[20.5%] rotate-12" />
        <Box className="left-[35%] top-[20.5%] rotate-45" />
        <Box className="left-[30%] -bottom-[5%] rotate-[75deg]" />
        <Box className="right-[21%] top-[50.5%] rotate-[35deg]" />
        <Box className="right-[20%] -bottom-[7.5%] rotate-45" />
        <Box className="right-[12%] bottom-[27.5%] rotate-45" />
        <Box className="right-[14%] bottom-[20.5%] rotate-45" />
        <Header
          roomTitle="Political Science Lectures"
          recodingTime="1:20:45"
          setOpen={() => setOpen(!open)}
        />
        <main className="flex">
          <div
            className={`flex flex-col justify-between mt-14 transition-all duration-500 ease-in-out ${
              open ? "" : "w-0 transition-all duration-500 ease-in-out"
            }`}
          >
            <Nav setChat={setChat} />
          </div>

          <div className="lg:flex lg:flex-col lg:grow w-screen">
            <div className="hidden h-px bg-gray-700 w-[70.6%] md:block lg:block ml-3 my-3"></div>
            <div className={`flex ${open ? "ml-0" : "ml-6"}`}>
              <div className="hidden z-20 lg:flex rounded-full px-2 w-24 lg:justify-between lg:items-center border border-gray-400">
                <Image
                  src={GroupOutlineIcon}
                  alt="people"
                  className="w-5 h-5"
                />
                <p className="text-gray-400">{"56"}</p>
                <Image
                  src={Chevron}
                  alt="people"
                  className="w-3 h-3 cursor-pointer"
                />
              </div>
              <ButtonDisplayLayout className="hidden z-20 lg:flex justify-center items-center text-primary px-2 py-px ml-2 rounded-full hover:bg-primary/30">
                <Image src={AddFillIcon} alt="people" className="w-5 h-5" />
                <p className="pl-2">Invite a Participant</p>
              </ButtonDisplayLayout>
            </div>

            <section className="flex gap-4 lg:gap-x-8 lg:gap-y-8 relative z-50">
              <div className="flex flex-col grow lg:w-[73%] lg:absolute">
                <section className="flex lg:grid lg:grid-flow-col w-[100vw] justify-center lg:w-full gap-4 text-blue-500">
                  <div
                    className={`bg-semi-dark  max-h-[65vh] lg:max-h-[75vh]  lg:w-full gap-4 lg:mt-1 overflow-auto scroll-smooth p-4 lg:p-4  rounded-md scrollbar-hide lg:scrollbar-default ${
                      open ? "ml-0" : "ml-6"
                    }`}
                  >
                    <VideoGridLayout />
                  </div>
                  {/* <div className='max-h-[65vh]'>
                    </div> */}
                </section>
                <section
                  className={`w-full flex justify-center items-center fixed lg:mt-1 lg:w-[76vw] h-16 absolute left-0 -bottom-20 lg:-left-20 lg:-bottom-20 ${
                    open
                      ? ""
                      : "lg:-left-2 transition-all duration-500 ease-in-out"
                  }`}
                >
                  <Controls />
                </section>
              </div>
              <div className="lg:absolute  lg:right-0 lg:-top-9 bg-semi-dark hidden lg:min-h-[88vh] py-auto lg:w-[25%] lg:block lg:col-end-5 rounded-md">
                <div className="flex flex-col lg:relative w-full h-full">
                  <div className="flex text-white justify-center lg:relative">
                    <ButtonDisplayLayout
                      onClick={() => setChat(!chat)}
                      className={`lg:absolute bg-dark-primary w-[50%] rounded-bl-none rounded-tl rounded-tr-none text-white transition-all duration-500 ease-in-out ${
                        chat
                          ? "right-0 rounded-tl-none rounded-bl-lg rounded-br-none"
                          : "left-0"
                      }`}
                    >
                      {chat ? "Chats" : "Participant"}
                    </ButtonDisplayLayout>
                    <p
                      className={`w-[50%] text-center p-2 lg:absolute transition-all duration-500 ease-in-out ${
                        chat ? "left-0" : "right-0"
                      }`}
                    >
                      {chat ? "Participant" : "Chats"}
                    </p>
                  </div>
                  <div className="flex w-full h-full transition-all duration-500 ease-in-out ">
                    {chat ? <Participants /> : <Chats />}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
