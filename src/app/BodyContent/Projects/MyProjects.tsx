import React from "react";
import { Card } from "antd";
import movieWallpaper from "../../../assets/movie/movie.png";
import airbnbWallpaper from "../../../assets/airbnb/airbnb.png";
const { Meta } = Card;

export default function MyProjects() {
  return (
    <div className="space-y-5">
      <h1 className="text-5xl text-red-500">My Projects</h1>
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
      </div>
    </div>
  );
}
