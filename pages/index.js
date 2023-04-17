import React, {useState} from "react";
require("dotenv").config();
const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;
import Gift from "@/components/api/gift";

export default function index({ projects }) {
  const [giftbox, setGiftbox] = useState('');
  const saveGift = event => {
    setGiftbox(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="mt-3">
      <div className="notice text-center">
        <div className="text-xl mb-2">
          💌 갖고 싶은 선물 목록을 작성해주세요!
        </div>
        <div className="text-xl">❗주의❗</div>
        기한 내에 작성하지 못할 경우 선물은 존재하지 않습니다.
        <br />
        왜냐하면 제 인내심이 그 때까지 기다리지 못합니다.
        <div>기한 : 2023-04-17(수) ~ 2023-04-23(일)</div>
      </div>
      <br />
      <Gift />
      {/* <div className="otherfont">
        
        <form className="text-center">
          
            <input
              type="text"
              value={giftbox}
              onChange={saveGift}
              placeholder="선물을 입력해주세요><"
              style={{ border: "black", background: "transparent" }}
            />
            <input type="submit" className="cursor-pointer" />
        </form>
      </div> */}
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
