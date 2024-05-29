import React from "react";
import ExpertCard from "@/components/ExpertCard";
import { expertsData } from "@/types/experts-types";

const ExpertsLayoutContainer = () => {
  return (
    <div
      className={
        "m-4 mt-1 mb-[60px] p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1000px]  xl:max-w-[1200px] mx-auto"
      }
    >
      {expertsData.map((expert, index) => (
        <ExpertCard key={index} expertInfo={expert} />
      ))}
    </div>
  );
};

export default ExpertsLayoutContainer;
