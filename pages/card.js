import Image from 'next/image'
import React from 'react'
import sora from "@/public/sora.jpg";

export default function card() {
  return (
    <div>
      <Image src={sora}/>
    </div>
  )
}
