import React, { FC } from "react";

import { ExpertsDataType } from "@/data/geniusesData";
import { parseExpertName } from "@/utils/stringUtils";
import Link from "next/link";
import ProgressiveImage from "@/components/progressiveImage";

interface GeniusCardProps {
  expertInfo: ExpertsDataType;
}

const GeniusCard: FC<GeniusCardProps> = ({ expertInfo }) => {
  return (
    <Link
      className={
        "group bg-transparent text-white flex flex-col gap-4 p-4 text-center cursor-pointer border-2 border-yellow-100 rounded-lg lg:hover:-translate-y-2 transition hover:shadow-2xl   backdrop-filter backdrop-blur-lg bg-opacity-40"
      }
      href={`/expert/${expertInfo.name}`}
    >
      <div
        className={
          "inline-block  group-hover:shadow-amber-100  rounded-lg mx-auto shadow-2xl  h-[280px] w-full overflow-hidden"
        }
      >
        <ProgressiveImage
          src={expertInfo.content.imgUrl}
          alt={parseExpertName(expertInfo.name)}
          className={"h-full w-full object-cover"}
        />
      </div>
      <div className={"italic"}>{parseExpertName(expertInfo.name)}</div>
      <div>{expertInfo.content.description}</div>
    </Link>
  );
};

export default GeniusCard;
