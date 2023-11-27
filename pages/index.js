import React from "react";
import Gift from "@/components/api/gift";

const { NOTION_TOKEN, NOTION_DATABASE_ID, SECRET_URL } = process.env;

export default function Index({ projects }) {
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
        기한이 만료되어 선물을 입력할 수 없습니다. 내년을 노려주세요!😍
        <br />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-0 m-6 py-10 gap-8 xs:w-full">
        {projects.results.map((item) => (
          <Gift key={item.id} data={item} />
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
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "Name", direction: "descending" }],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, 
  };
}

