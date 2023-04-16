import "@/styles/globals.css";
import Image from "next/image";
import chococake from "@/public/chococake.jpg";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div style={{backgroundColor: "#B9A0FE", opacity: '0.8'}}>
      <Head>
				<title>celebrate your birthday</title>
        <link rel="metamong" href="/metamong.png" />
				<meta name="description" content="HBD 페이지입니다." />
			</Head>
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
