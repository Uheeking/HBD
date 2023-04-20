import "@/styles/globals.css";
import Image from "next/image";
import chococake from "@/public/choco.png";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div style={{minWidth: '300px'}}>
      <Head>
        <title>celebrate your birthday</title>
        <link rel="icon" href="/metamong.png" />
        <meta name="description" content="HBD 페이지입니다." />
      </Head>
      <Link href="/">
      <Image
        className="pt-3 sm:w-[150px] sm:pt-5"
        src={chococake}
        alt="chococake"
        width={100}
        height={100}
        style={{ margin: "0 auto" }}
      />
      </Link>
      {/* 갖고 싶은 선물 목록 선물 링크 선물 이미지 등*/}
      <div className="flex p-5 headname sm:text-3xl lg:text-4xl">
        <Link href="/">gift</Link>
        <Link href="/card">card</Link>
        <Link href="/photo">photo</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
