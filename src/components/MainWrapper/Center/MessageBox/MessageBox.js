import React, { useContext } from "react";
import { GlobalContext } from "../../../../context/Global";

const MessageBox = () => {
  const { textarea, setTextarea } = useContext(GlobalContext);
  return (
    <div className="w-full py-2 px-4 flex items-center justify-between">
      <div className="w-1/12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
        p
      </div>
      <form className="w-10/12">
        <textarea
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea}
          className="bg-transparent w-full border-b border-gray-400"
          placeholder="What's happening?"
        />
        <button className="bg-blue-400 font-bold py-1 px-3 text-white rounded-3xl mt-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageBox;
