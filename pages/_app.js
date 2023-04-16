import "@/styles/globals.css";
import Image from "next/image";
import chococake from "@/public/chococake.jpg";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Image
        src={chococake}
        width={100}
        height={100}
        style={{ margin: "0 auto" }}
      />
      {/* 갖고 싶은 선물 목록 선물 링크 선물 이미지 등*/}
      <div>
        <div>gift</div>
        <div>card</div>
        <div>photo</div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
