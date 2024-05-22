import React from 'react';
import ExpertCard from "@/components/ExpertCard";

const ExpertsLayoutContainer = () => {
    return (
        <div className={'m-10 p-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto'}>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
        </div>
    );
};

export default ExpertsLayoutContainer;