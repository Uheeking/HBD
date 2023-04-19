import Image from "next/image";
import React from "react";
import seasonImage1 from "@/photo/photo.jpg";
import seasonImage2 from "@/photo/photo2.jpg";
import seasonImage3 from "@/photo/photo3.jpg";
import seasonImage4 from "@/photo/photo4.jpg";
import chunsikImage from "@/chunsik.png";

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 100;

export default function Photo() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 mt-0 m-7 gap-8 xs:w-full">
      <Image src={seasonImage1} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
        <Image src={seasonImage2} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
        <Image src={seasonImage3} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
        <Image src={seasonImage4} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      </div>
      <div className="shine text-center text-xl bg-white">
        우리의 모든 순간이 빛나기를✨
      </div>
      <Image className="chunsik-image" src={chunsikImage} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
    </div>
  );
}
