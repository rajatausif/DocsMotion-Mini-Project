import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data }) {
  return (
    <motion.div drag className="w-60 h-72 bg-zinc-900/90 rounded-[50px] relative py-10 px-8 overflow-hidden text-white">
      <FaFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold ">
        {data.desc}
      </p>
      <div className="footer absolute bottom-1 w-full left-0 py-7">
        <div className="flex justify-between items-center py-3 px-4 text-white">
          <h4 className="mt-32">
            {data.fileSize}
          </h4>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex justify-center ml-34 mt-32 items-center">
            {data.close
              ? <IoIosClose />
              : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen &&(
          <div className={`tag absolute w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} justify-center py-2 rounded-lg items-center`}>
            <h3 className="text-sm font-semibold justify-center ml-20">
            {data.tag.tagTitle}
            </h3>
          </div>)}
      </div>
    </motion.div>
  );
}

export default Card;
