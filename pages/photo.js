import Image from "next/image";
import React from "react";
import chunsikImage from "@/chunsik.png";

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 100;

export default function Photo() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 mt-0 m-7 gap-8 xs:w-full">
      </div>
      <div className="shine text-center text-xl sm:text-3xl bg-white lg:text-5xl lg:p-[30px]">
        우리의 모든 순간이 빛나기를✨
      </div>
      <Image
        className="chunsik-image sm:-top-[740px] sm:w-[300px] sm:left-[320px]
        lg:-top-[1500px] lg:left-[600px] lg:w-[700px]"
        src={chunsikImage}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt="chunsikImage"
      />
    </div>
  );
}
