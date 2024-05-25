"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { ExpertsDataType } from "@/types/ExpertsTypes";
import { parseExpertName } from "@/utils/general";

interface ExpertCardProps {
  expertInfo: ExpertsDataType;
}

const ExpertCard: FC<ExpertCardProps> = ({ expertInfo }) => {
  const router = useRouter();
  return (
    <div
      className={
        "bg-white/30 text-black flex flex-col gap-4 p-4 text-center cursor-pointer border border-gray-500 rounded-lg hover:-translate-y-2 transition hover:shadow-xl hover:shadow-gray-400   backdrop-filter backdrop-blur-lg bg-opacity-40"
      }
      onClick={() => router.push(`/expert/${expertInfo.name}`)}
    >
      <img
        src={expertInfo.content.imgUrl}
        alt={parseExpertName(expertInfo.name)}
        className={
          "inline-block  rounded-lg mx-auto shadow-2xl shadow-blue-100 h-[300px] w-full object-cover"
        }
      />
      <div>{parseExpertName(expertInfo.name)}</div>
      <div>{expertInfo.content.description}</div>
    </div>
  );
};

export default ExpertCard;
