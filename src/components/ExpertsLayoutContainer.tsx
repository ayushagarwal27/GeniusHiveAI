import React from "react";
import ExpertCard from "@/components/ExpertCard";
import { expertsData } from "@/types/ExpertsTypes";

const ExpertsLayoutContainer = () => {
  return (
    <div
      className={
        "m-10 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto"
      }
    >
      {expertsData.map((expert, index) => (
        <ExpertCard key={index} expertInfo={expert} />
      ))}
    </div>
  );
};

export default ExpertsLayoutContainer;
