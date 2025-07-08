import { TbHttpDelete } from "react-icons/tb";
import { Checkbox } from "../ui/checkbox";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <>
      {/* item inside the list */}
      <div className="relative group flex w-full p-4 justify-between items-center border-b-1 border-gray-200 dark:border-gray-600">
        {/* left side */}
        <div className=" flex items-center gap-5">
          <Checkbox
            id={`item-${todo.id}`}
            checked={todo.completed}
            onCheckedChange={onToggle}
            className={
              "w-4.5 h-4.5 rounded-full border-gray-300 hover:border-purple-600 dark:hover:border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500 dark:data-[state=checked]:bg-purple-600 dark:data-[state=checked]:border-purple-500 transition-all duration-300 dark:border-gray-500"
            }
          />
          <label
            htmlFor={`item-${todo.id}`}
            className="w- font-semibold text-[0.9rem] text-gray-500 dark:text-gray-400"
          >
            {todo.title}
          </label>
        </div>
        {/* right side */}
        <TbHttpDelete
          onClick={onDelete}
          className="absolute right-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-white cursor-pointer hidden group-hover:block"
        />
      </div>
    </>
  );
}
