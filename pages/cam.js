import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function Cam() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);
  return (
    <div className="wrapper photo_head">
      <div className="text-center mt-5 text-5xl"><span className="headd">HBD CAM</span><span>📷</span>  </div>
      <div className="py-10 flex flex-col items-center space-y-4">
        <span className="text-lg ">
          생일자와 함께 기념 사진을 찍어보세요!
        </span>
        <div className="bg-white m-10 pt-[10px] pr-[10px] pb-[30px] pl-[10px]" >
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>
        <button
          className="w-[150px] h-[70px] bg-purple1 rounded-xl text-white text-2xl font-kangwon-bold bold"
          onClick={capture}
        >
          저장!
        </button>
        <div>저장 버튼을 누르면 사진이 저장됩니다. </div>
      </div>
      <div className="text-center">(저장된 사진은 우클릭으로 저장 가능합니다.)</div>
      {imgSrc && (
        <div
        className="flex flex-col items-center pt-[10px] pr-[10px] pb-[30px] pl-[10px]"
        >
          <div className="bg-white p-3">
          <Image src={imgSrc} width={300} height={100} alt="찍힌 사진"/>
          <div className="font-kangwon-bold text-xl pt-4 text-center">
            2023. 4. 14. 도도 생일 기념🎉
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
