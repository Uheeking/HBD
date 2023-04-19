import Image from "next/image";
import React from "react";
import season from "@/public/photo/photo.jpg";
import season2 from "@/public/photo/photo2.jpg";
import season3 from "@/public/photo/photo3.jpg";
import season4 from "@/public/photo/photo4.jpg";
import chunsik from "@/public/chunsik.png";

export default function photo() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 mt-0 m-7 gap-8 xs:w-full">
        <Image src={season} width={180} height={100} />
        <Image src={season2} width={180} height={100} />
        <Image src={season3} width={180} height={100} />
        <Image src={season4} width={180} height={100} />
      </div>
      <div className="shine text-center text-xl bg-white">
        우리의 모든 순간이 빛나기를✨
      </div>
      <Image className="sik" src={chunsik} width={180} height={100} />
    </div>
  );
}
