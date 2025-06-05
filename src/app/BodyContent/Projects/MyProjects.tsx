import React from "react";
import { Card } from "antd";
import movieWallpaper from "../../../assets/movie/movie.png";
import airbnbWallpaper from "../../../assets/airbnb/airbnb.png";
import ProjectSwiper from "./ProjectSwiper";
const { Meta } = Card;

export default function MyProjects() {
  return (
    <div className="lg:flex justify-between item-center gap-10 ">
      <div className="w-[30%] text-white flex flex-col justify-center items-center text-center mb-10 mx-auto">
        <h1 className="text-4xl text-red-500 mb-5">My work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          pariatur est ducimus dolore corporis assumenda.
        </p>
      </div>
      <ProjectSwiper />
    </div>
  );
}

{
  /* <h1 className="text-5xl text-red-500">My Projects</h1>
      <div className="flex justify-evenly">
        <Card
          hoverable
          style={{ width: 500 }}
          cover={<img alt="example" src={movieWallpaper.src} />}
        >
          <Meta title="Netflix" description="Dự án đặt vé xem phim" />
        </Card>
        <Card
          hoverable
          className="bg-gray-500"
          style={{ width: 500 }}
          cover={<img alt="example" src={airbnbWallpaper.src} />}
        >
          <Meta title="Airbnb" description="Dự án đặt phòng" />
        </Card>
      </div> */
}
