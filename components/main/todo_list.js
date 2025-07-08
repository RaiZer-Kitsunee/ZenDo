import TodoItem from "./todo_item";

export default function TodoList({ Todos, onToggle, onDelete }) {
  return (
    <>
      {Todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </>
  );
}
