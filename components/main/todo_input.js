import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export default function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <>
      <div className="bg-[#ffffff] flex items-center p-4 mt-4 gap-5 rounded-md dark:bg-[#25273c]">
        <Checkbox
          checked={false}
          className={
            "w-4.5 h-4.5 rounded-full border-gray-300 dark:border-gray-500"
          }
        />
        <input
          className="w-full text-gray-500 outline-none placeholder:text-gray-400 dark:text-gray-400"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What's on mind today....."
        />
      </div>
    </>
  );
}
