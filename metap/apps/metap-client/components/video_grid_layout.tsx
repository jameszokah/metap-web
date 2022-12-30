// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, EffectFade } from "swiper";
import Peer from "./peer";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const VideoGridLayout = () => {
  return (
    <>
      <Swiper
        navigation
        slidesPerView={3}
        // effect="fade"
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // wrapperClass="w-full h-full grid justify-center content-center max-h-[65vh] grid-rows-2 lg:max-h-[70vh] gap-4 scroll-smooth p-4 lg:p-0 lg:gap-x-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 overflow-x-auto bg-semi-dark lg:col-start-1 lg:col-end-4 m-1 h-full sm:flex-grow  rounded-md sm:flex-wrap sm:grid-auto-fit-sm md:grid-auto-fit lg:grid-auto-fit-lg scrollbar-hide lg:scrollbar-default bg-red-600"
        spaceBetween={10}
        // slidesPerColumnFill="row"
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className=""
      >
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((peer, i) => {
          return (
            <SwiperSlide
              key={i}
              className="lg:flex lg:justify-center lg:items-center"
            >
              <Peer />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Swiper
  navigation
  grid={{
    rows: 2,
    columns: 3,
  }}
  modules={[Navigation]}
>
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
  <Peer />
</Swiper> */}

    </>
  );
};

export default VideoGridLayout;
