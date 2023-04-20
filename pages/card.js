import Image from "next/image";
import React, { useState } from "react";
import sora from "@/public/sora.jpg";
import letter1 from "@/public/letter1.png";
import Modal from "react-modal";
import { Typewriter } from "react-simple-typewriter";
import { WRITE, QUESTION } from "../components/write";
require("dotenv").config();
console.log(process.env.QUESTION);

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

export default function card() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ minWidth: "370px", maxWidth: '700px', margin: '0 auto' }}
    className="">
      <div className="parent text-center">
        <Image
          className="w-full"
          src={sora}
          alt="image"
          quality={100}
          width={300}
          height={100}
          onClick={openModal}
        />
        <span className="children bg-white p-1 font-black sm:-top-[190px] sm:text-2xl">
          <Typewriter
            words={[QUESTION]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="text-center npoint sm:text-4xl">
          대답을 듣고 싶다면 <p className="point">소라고동🎺</p>을 클릭해주세요!
        </div>
      </div>
      <div className="otherfont">
        <Modal
          className="otherfont"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="backImg">
            <Typewriter
              words={[WRITE]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              delaySpeed={1000}
            />
          </div>
          <div className="text-center">
            <button onClick={closeModal}>close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
