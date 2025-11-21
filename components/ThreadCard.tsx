import Link from "next/link";
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

function ThreadCard() {
  return (
    <div className="bg-card px-10 py-7 space-y-5 rounded-lg">
      <h1 className="text-xl font-bold">What is next js? How does it work?</h1>
      <div className="space-x-3">
        <Link
          href={"/?filter" + "vue"}
          className={`w-[100px] rounded-xl px-4 py-2 text-gray-300 bg-tertiary`}
        >
          Vue
        </Link>
        <Link
          href={"/?filter" + "react"}
          className={`w-[100px] rounded-xl px-4 py-2 text-gray-300 bg-tertiary`}
        >
          React
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
          <Image
            src={profile}
            width={35}
            height={35}
            className="rounded-full"
            alt="Profile"
          />
          <span>Aye Chan Soe, asked 3 minutes ago.</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-gray-300 text-[14px]">
            <span>
              <AiTwotoneLike />
            </span>
            <span>1k Likes</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-300 text-[14px]">
            <span>
              <RiQuestionAnswerLine />
            </span>
            <span>500 Answers</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-300 text-[14px]">
            <span>
              <FaEye />
            </span>
            <span>1.2k Views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
