import React, { useEffect, useState } from "react";
require("dotenv").config();

export default function Gift() {
  const [giftbox, setGiftbox] = useState("");
  const [inputValue, setinputValue] = useState([]);
  if (typeof window !== "undefined") {
    var myArr = localStorage.getItem("hbdbox");
  }

  const saveGift = (event) => {
    setGiftbox(event.target.value);
  };

  useEffect(() => {
    if (myArr == null || myArr == "") {
      localStorage.setItem("hbdbox", JSON.stringify([]));
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setinputValue((el) => [...el, giftbox]);
    setGiftbox("");
  };

  useEffect(() => {
    localStorage.setItem("hbdbox", JSON.stringify(inputValue));
  }, [inputValue])
  

  return (
    <div className="otherfont">
      <form className="text-center" onSubmit={onSubmit}>
        <input
          type="text"
          value={giftbox}
          onChange={saveGift}
          placeholder="선물을 입력해주세요><"
          style={{ border: "black", background: "transparent" }}
        />
        <button className="cursor-pointer">저장</button>
      </form>
    </div>
  );
}
