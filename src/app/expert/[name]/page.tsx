"use client";

import React, { FC, useState } from "react";
import ChatBubble from "@/components/chat/ChatBubble";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatQueryInput from "@/components/chat/ChatQueryInput";
import { parseExpertName } from "@/utils/stringUtils";
import { ExpertMapper, expertsData } from "@/data/geniusesData";
import ProgressiveImage from "@/components/progressiveImage";

interface ExpertPageProps {
  params: { name: ExpertMapper };
}

export type ContentState = {
  question: string;
  answer: string;
}[];

const ExpertPage: FC<ExpertPageProps> = ({ params: { name } }) => {
  const [content, setContent] = useState<ContentState>([]);
  const [isLoading, setIsLoading] = useState(false);
  const expertName = parseExpertName(name);
  const expert = expertsData.find((el) => el.name === name);

  return (
    <>
      <div className={"w-screen h-[300px] object-cover"}>
        <ProgressiveImage
          className={"w-full h-full object-cover"}
          src={expert?.content.bannerImg || expert?.content.imgUrl || ""}
          alt={"scientist image"}
        />
      </div>
      <ChatContainer>
        {content.map(({ question, answer }, i) => (
          <div
            className={
              "flex flex-col overflow-x-auto mb-4" +
              `${i === content.length - 1 ? " mb-[80px]" : ""}`
            }
            key={i}
          >
            <ChatBubble
              text={question}
              type={"user"}
              expertImgUrl={undefined}
            />
            <ChatBubble
              text={answer}
              type={"expert"}
              expertImgUrl={expert?.content.imgUrl}
            />
          </div>
        ))}
        <ChatQueryInput
          content={content}
          setContent={setContent}
          expertName={expertName}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </ChatContainer>
    </>
  );
};

export default ExpertPage;
