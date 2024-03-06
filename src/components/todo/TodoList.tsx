import { Todo } from '../../types/interfaceTodo';

interface TodoListProps {
  todos: Todo[];
  listTitle: string;
}

export default function TodoList({ todos, listTitle }: TodoListProps) {
  return (
    <section>
      <h2>{listTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}></li>
        ))}
      </ul>
    </section>
  );
}
