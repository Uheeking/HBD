import Image from "next/image";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import box from "@/public/box.png";
import bear from "@/public/bear.png";
import Modal from "react-modal";
const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    position: "fixed",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Gift({ data }) {
  const { properties } = data;
  const name = properties.Name.title[0]?.plain_text;
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="otherfont">
      <Image
        className="project-card"
        src={box}
        alt="image"
        quality={100}
        width={300}
        height={100}
        onClick={openModal}
      />
      <div className="text-center text-white">이미지를 클릭해주세요~</div>
      <div className="otherfont">
        <Modal
         className="otherfont"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="text-center">
            <Image
              src={bear}
              alt="image"
              quality={100}
              width={300}
              height={100}
              onClick={openModal}
            />
            {name}을 곧 전달해드리겠습니다!!
          </div>
          <div className="text-center">
            <button onClick={closeModal}>close</button>
          </div>
        </Modal>
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

  console.log("rest", res);
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
