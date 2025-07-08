import TodoFooter from "@/components/main/todo_footer";
import TodoInput from "@/components/main/todo_input";
import TodoList from "@/components/main/todo_list";
import Todo from "@/data/model_todo";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [todos, setTodos] = useState([
    new Todo(0, "Let's move to win", false),
    new Todo(1, "Here let's be Productive", true),
  ]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, new Todo(Date.now(), text, false)]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  return (
    // first of all
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#fafafa] dark:bg-[#181824] relative">
      <div className="absolute top-0">
        {theme === "dark" ? (
          <Image
            src={"/bg-desktop-dark.jpg"}
            height={100}
            width={5000}
            alt="background dark"
          />
        ) : (
          <Image
            src={"/bg-desktop-light.jpg"}
            height={100}
            width={5000}
            alt="background dark"
          />
        )}
      </div>

      {/* the main container */}
      <div className="w-[40vw] h-[80vh] absolute flex flex-col gap-4">
        {/* the first title with theme toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-white font-semibold tracking-[13px]">
            TODO
          </h1>
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            {theme === "dark" ? (
              <Image
                src={"/icon-sun.svg"}
                height={100}
                width={30}
                alt="icon sun"
              />
            ) : (
              <Image
                src={"/icon-moon.svg"}
                height={100}
                width={30}
                alt="icon sun"
              />
            )}
          </div>
        </div>

        {/* text input where the text is */}
        <TodoInput onAddTodo={addTodo} />

        {/* the list of the TODOs */}
        <div className="w-full bg-[#ffffff] rounded-sm dark:bg-[#25273c] shadow-lg shadow-gray-300 dark:shadow-black">
          <TodoList
            Todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <TodoFooter
            total={todos.filter((todo) => !todo.completed).length}
            onClear={clearCompleted}
            onFilter={setFilter}
          />
        </div>

        {/* little hint */}
        <p className="text-center text-[0.7rem] mt-4 text-gray-500 font-semibold">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}
