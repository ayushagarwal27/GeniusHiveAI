import React, { FC } from "react";

interface ChatBubbleProps {
  text: string;
  type: "expert" | "user";
  expertImgUrl: string | undefined;
}

const ChatBubble: FC<ChatBubbleProps> = ({ text, type, expertImgUrl }) => {
  return (
    <div className="flex flex-col">
      <div
        className={
          "grid grid-cols-12 gap-y-2" +
          `${type === "user" ? " bg-gray-400" : ""}`
        }
      >
        <div className="col-start-1 col-end-12 lg:col-end-8 p-3 rounded-lg ">
          <div className="flex flex-row items-center ">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-gray-300 flex-shrink-0 overflow-hidden">
              {type === "user" ? (
                "Q"
              ) : (
                <img
                  src={expertImgUrl || ""}
                  className={" w-full object-cover"}
                  alt={"expert image"}
                />
              )}
            </div>
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
