export default function TodoFooter({ total, onFilter, onClear }) {
  return (
    <>
      {/* the Filters in the bottom */}
      <div className="flex text-[0.7rem] font-semibold justify-around gap-14 py-3 ">
        {/* how mush items left */}
        <p className="text-gray-500">{total} items left</p>

        {/* the main Filters active and Completed */}
        <div className="flex gap-4">
          <button
            onClick={() => onFilter("all")}
            className="text-blue-500 hover:text-blue-600 cursor-pointer dark:hover:text-blue-400"
          >
            All
          </button>
          <button
            onClick={() => onFilter("active")}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-white cursor-pointer"
          >
            Active
          </button>
          <button
            onClick={() => onFilter("Completed")}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-white cursor-pointer"
          >
            Completed
          </button>
        </div>

        {/* Clear Completed where i delete all the Completed tasks */}
        <button
          onClick={onClear}
          className="hover:text-gray-500 text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer"
        >
          Clear Completed
        </button>
      </div>
    </>
  );
}
