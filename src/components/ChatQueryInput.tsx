import React, { FC, FormEvent, useState } from "react";
import { ContentState } from "@/app/expert/[name]/page";

interface ChatQueryInputProps {
  content: ContentState;
  setContent: (content: ContentState) => void;
  expertName: string;
}

const ChatQueryInput: FC<ChatQueryInputProps> = ({
  content,
  setContent,
  expertName,
}) => {
  const [query, setQuery] = useState<string>("");
  const handleRequest = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:8080/expert?expert=${expertName}&question=${query}`
    );
    const data = await res.json();
    setContent([...content, { question: query!, answer: data.reply }]);
    setQuery("");
  };
  return (
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
  );
};

export default ChatQueryInput;
