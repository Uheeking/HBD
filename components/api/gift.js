import Image from "next/image";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import box from "@/public/box.png";
import bear from "@/public/bear.png";
const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;

export default function Gift({data}) {
  const { properties } = data;
  const name = properties.Name.title[0].plain_text;

  const onClicks = (e) => {
    alert('test')
  }

  return (
    <div className="otherfont">
      <Image
      className="project-card"
      src={box}
      alt="image"
      quality={100}
      width={300}
      height={100}
      onClick={onClicks}
    />
    <div class="container">
      <div class="modal">
         <button onclick="CloseModal();"><Image src={bear} alt="" /></button>
         <h1>- Happy New Year 2021 -</h1>
         <h2>2021년 신축년 (辛丑年) </h2>
         <h2>새해 복 많이 받으세요!</h2>
      </div>
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

  console.log('rest', res);
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
