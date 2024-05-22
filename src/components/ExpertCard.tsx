'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const ExpertCard = () => {
    const router = useRouter()
    return (
        <div className={'bg-white/30 text-black flex flex-col gap-4 p-4 text-center cursor-pointer border border-gray-500 rounded-lg hover:-translate-y-2 transition hover:shadow-xl hover:shadow-gray-400   backdrop-filter backdrop-blur-lg bg-opacity-40'} onClick={() => router.push('/expert/albert-einstein') }>
            <img src={'https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/Albert-Einstein-thumbnail.png.rend.hgtvcom.616.616.suffix/1583779004606.png'} alt={'einstein'} className={'inline-block  rounded-lg mx-auto shadow-2xl shadow-blue-100'}/>
            <div>Albert Einstein</div>
            <div>I can help you with Theory of relativity, Physics, some maths</div>
        </div>
    );
};

export default ExpertCard;