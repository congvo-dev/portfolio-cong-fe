"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "react-medium-image-zoom/dist/styles.css";
import { useRouter } from "next/navigation";

const projectSlides = {
  slides: [
    {
      images: [
        {
          title: "Home",
          path: "/./airpnp/airpnp.png",
        },
        {
          title: "Room list",
          path: "/./airpnp/room-list.png",
        },
        {
          title: "Booking",
          path: "/./airpnp/room-profile.png",
        },
        {
          title: "Admin",
          path: "/./airpnp/admin-number.png",
        },
      ],
      titleProject: "airpnp",
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
      titleProject: "movie",
    },
  ],
};

export default function ProjectSwiper() {
  const router = useRouter();

  const renderSwiperSlides = () => {
    return projectSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            {slide.images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-[100] md:h-[200] flex flex-col justify-center rounded-lg overflow-hidden portfolio__item group relative cursor-pointer "
                >
                  <img
                    src={image.path}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  {/* title */}
                  <div className="absolute opacity-0 bg-black bg-opacity-50 group-hover:opacity-100  text-red-500 duration-300 text-center w-full text-3xl text-bold">
                    <p>{image.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-auto w-full text-center mt-2">
            <button
              className="bg-red-500 hover:bg-red-400 duration-300 text-white py-2 px-3 rounded-lg cursor-pointer"
              onClick={() => {
                router.push(`/project/${slide.titleProject}`);
              }}
            >
              Detail
            </button>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <Swiper
      spaceBetween={10}
      // autoplay={{
      //   pauseOnMouseEnter: true,
      // }}
      pagination={{
        clickable: true,
      }}
      autoHeight={false}
      modules={[Autoplay, Pagination]}
    >
      {renderSwiperSlides()}
    </Swiper>
  );
}
