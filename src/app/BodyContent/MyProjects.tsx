import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

export default function MyProjects() {
  return (
    <div className="space-y-5">
      <h1 className="text-5xl text-red-500">My Projects</h1>
      <div className="flex justify-evenly">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
}
