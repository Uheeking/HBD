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
      <div className="text-center mt-5 text-xl ">HBD CAM 📷 </div>
      <div className="py-10 flex flex-col items-center space-y-4">
        <span className="text-lg ">
          생일자와 함께 기념 사진을 찍어보세요!
        </span>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button
          className="w-[150px] h-[70px] bg-purple1 rounded-xl text-white text-2xl font-kangwon-bold photo_head bold"
          onClick={capture}
        >
          저장!
        </button>
        <div>저장 버튼을 누르면 사진이 저장됩니다. </div>
      </div>
      <div className="text-center">(저장된 사진은 우클릭으로 저장 가능합니다.)</div>
      {imgSrc && (
        <div
          className="px-4 border flex flex-col items-center pt-4 mb-5 ml-2 mr-2 "
        >
          <Image src={imgSrc} width={300} height={100}/>
          <span className="font-kangwon-bold text-xl pt-4 pb-4">
            2023. 4. 14. 도도 생일 기념🎉
          </span>
        </div>
      )}
    </div>
  );
}
