"use client";

import React, { FC, FormEvent, useState } from "react";
import ChatBubble from "@/components/ChatBubble";

interface ExpertPageProps {
  params: { name: string };
}

type ContentState = {
  question: string;
  answer: string;
}[];

const ExpertPage: FC<ExpertPageProps> = ({ params: { name } }) => {
  const [content, setContent] = useState<ContentState>([]);
  const [query, setQuery] = useState<string>("");
  const handleRequest = async (e: FormEvent) => {
    e.preventDefault();
    const expert = "Albert Einstein";
    const res = await fetch(
      `http://localhost:8080/expert?expert=${expert}&question=${query}`
    );
    const data = await res.json();
    setContent([...content, { question: query!, answer: data.reply }]);
    setQuery("");
  };

  return (
    <>
      <img
        className={"inline-block w-screen h-[300px] object-cover"}
        src={
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3efefa81-34f9-4faf-9475-99ed2c5045a7/d717tp5-1a9a9973-1dbb-4a64-a332-175e0e53a67e.jpg/v1/fit/w_800,h_297,q_70,strp/albert_einstein_banner_by_hero_of_timothy_d717tp5-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjk3IiwicGF0aCI6IlwvZlwvM2VmZWZhODEtMzRmOS00ZmFmLTk0NzUtOTllZDJjNTA0NWE3XC9kNzE3dHA1LTFhOWE5OTczLTFkYmItNGE2NC1hMzMyLTE3NWUwZTUzYTY3ZS5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ymAwPsc_RuX7DsRZZNsZf_Clj7PsusU7Y2EILQlYmdc"
        }
      />
      <div className="flex flex-col flex-auto h-full p-6 ">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className={"h-[60vh] overflow-y-scroll"}>
            {content.map(({ question, answer }, i) => (
              <div
                className={
                  "flex flex-col overflow-x-auto mb-4" +
                  `${i === content.length - 1 ? " mb-[80px]" : ""}`
                }
              >
                <ChatBubble
                  text={question}
                  type={"user"}
                  expertImgUrl={undefined}
                />
                <ChatBubble
                  text={answer}
                  type={"expert"}
                  expertImgUrl={
                    "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/03/Albert_Einstein_Head_H3000x1688.jpg?itok=QUAc_yMr"
                  }
                />
              </div>
            ))}
            <form
              onSubmit={handleRequest}
              className="flex flex-col md:flex-row items-center h-16 rounded-xl bg-gray-100 gap-2 w-[85%] md:w-[94%] px-4 pt-2 md:pt-0 mt-20 absolute md:bottom-2 bottom-6 left-3 md:left-6"
            >
              <div className="relative w-[80%] md:w-[100%]">
                <input
                  type="text"
                  placeholder={"Type your query here ..."}
                  value={query}
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-8 md:h-10"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="w-[80%] md:w-auto md:ml-4">
                <button
                  className="h-8 flex w-full items-center justify-center bg-gray-800  hover:bg-gray-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  type={"submit"}
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertPage;
