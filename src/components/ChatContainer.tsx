import React, { FC, ReactNode } from "react";

interface ChatContainerProps {
  children: ReactNode;
}

const ChatContainer: FC<ChatContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col flex-auto h-full p-6 ">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className={"h-[60vh] overflow-y-scroll"}>{children}</div>
      </div>
    </div>
  );
};

export default ChatContainer;
