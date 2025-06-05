"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useRouter } from "next/navigation";

const projectSlides = {
  slides: [
    {
      images: [
        {
          title: "Home",
          path: "/./airpnp/airbnb.png",
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
          <div className="grid grid-cols-2 gap-3">
            {slide.images.map((image, index) => {
              return (
                <Zoom key={index}>
                  <div className="flex flex-col item-center justify-center rounded-lg overflow-hidden portfolio__item group relative h-[280px]">
                    <img
                      src={image.path}
                      alt=""
                      height={300}
                      width={500}
                      className="object-cover w-full h-full"
                    />

                    {/* title */}
                    <div className="absolute opacity-0 group-hover:opacity-100  text-red-500 duration-300 text-center w-full text-3xl text-bold">
                      <p>{image.title}</p>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
          <div className="mx-auto w-full text-center mt-2">
            <button
              className="bg-red-500 text-white py-2 px-3 rounded-lg cursor-pointer"
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
      // spaceBetween={10}
      // pagination={{
      //   clickable: true,
      // }}
      navigation
      autoHeight={true}
      modules={[Autoplay, Navigation]}
      // className="h-[280px] sm:h-[480px]"
    >
      {renderSwiperSlides()}
    </Swiper>
  );
}
