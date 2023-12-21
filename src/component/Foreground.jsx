import React from 'react'
import Card from './Card'
import { motion } from "framer-motion"

function Foreground() {
  const data=[{
    desc:"this is card section here that would be great ",
    fileSize:".9mb",
    close:false,
    tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
  },
  {
    desc:"this is card section here that would be great ",
    fileSize:".9mb",
    close:true,
    tag:{isOpen:true, tagTitle:"Upload Now", tagColor:"green"}
  },
  {
    desc:"this is card section here that would be great ",
    fileSize:".9mb",
    close:false,
    tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
  }]
  return (
    <div className='fixed z-[3] left-0 top-0 w-full h-full bg-sky-800/20 flex flex-shrink-0 flex-wrap gap-5 p-5'>
        {data.map((item,index)=>(
          <Card data={item}/>
        ))}
      </div>
  )
}

export default Foreground