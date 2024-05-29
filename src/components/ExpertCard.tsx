"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { ExpertsDataType } from "@/types/experts-types";
import { parseExpertName } from "@/utils/general";

interface ExpertCardProps {
  expertInfo: ExpertsDataType;
}

const ExpertCard: FC<ExpertCardProps> = ({ expertInfo }) => {
  const router = useRouter();
  return (
    <div
      className={
        "group bg-transparent text-white flex flex-col gap-4 p-4 text-center cursor-pointer border-2 border-yellow-100 rounded-lg hover:-translate-y-2 transition hover:shadow-2xl   backdrop-filter backdrop-blur-lg bg-opacity-40"
      }
      onClick={() => router.push(`/expert/${expertInfo.name}`)}
    >
      <img
        src={expertInfo.content.imgUrl}
        alt={parseExpertName(expertInfo.name)}
        className={
          "inline-block  group-hover:shadow-amber-100  rounded-lg mx-auto shadow-2xl  h-[280px] w-full object-cover"
        }
      />
      <div className={"italic"}>{parseExpertName(expertInfo.name)}</div>
      <div>{expertInfo.content.description}</div>
    </div>
  );
};

export default ExpertCard;
