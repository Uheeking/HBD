import React, { useState } from "react";
import dotenv from "dotenv";
const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;
const SECRET_URL = process.env.SECRET_URL;
import Gift from "@/components/api/gift";
import Link from "next/link";

export default function index({ projects }) {
  console.log(projects);
  const [giftbox, setGiftbox] = useState("");
  const saveGift = (event) => {
    setGiftbox(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="mt-3">
      <div className="notice text-center">
        <div className="text-xl mb-2 lg:text-2xl ">
          💌 갖고 싶은 선물 목록을 작성해주세요!
        </div>
        <div className="text-xl lg:text-2xl">❗주의❗</div>
        <div className="lg:text-xl">
        기한 내에 작성하지 못할 경우 선물은 존재하지 않습니다. 
        {/* <br /> */}
         {" "}왜냐하면 제 인내심이 그 때까지 기다리지 못합니다.
         </div>
        <div className="lg:text-xl">기한 : 2023-04-19(수) ~ 2023-04-23(일)</div>
      </div>
      <br />
      <div className="giftfor text-center lg:text-2xl">
        선물은 아래 사이트에 들어가서 작성해주세요😍
        <br />
        <a href={`${SECRET_URL}`} className="bold">
          사이트 접속하기
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-0 m-6 py-10 gap-8 xs:w-full">
        {projects.results.map((items) => (
          <Gift key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "Name", direction: "descending" }],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DB_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

