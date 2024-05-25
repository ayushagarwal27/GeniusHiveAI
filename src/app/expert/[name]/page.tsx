"use client";

import React, { FC, useState } from "react";
import ChatBubble from "@/components/ChatBubble";
import ChatContainer from "@/components/ChatContainer";
import ChatQueryInput from "@/components/ChatQueryInput";
import { parseExpertName } from "@/utils/general";
import { ExpertMapper, expertsData } from "@/types/ExpertsTypes";

interface ExpertPageProps {
  params: { name: ExpertMapper };
}

export type ContentState = {
  question: string;
  answer: string;
}[];

const ExpertPage: FC<ExpertPageProps> = ({ params: { name } }) => {
  const [content, setContent] = useState<ContentState>([]);
  const expertName = parseExpertName(name);
  const expert = expertsData.find((el) => el.name === name);
  return (
    <>
      <img
        className={"inline-block w-screen h-[300px] object-contain"}
        src={expert?.content.imgUrl || ""}
        alt={"scientist image"}
      />
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
        />
      </ChatContainer>
    </>
  );
};

export default ExpertPage;
