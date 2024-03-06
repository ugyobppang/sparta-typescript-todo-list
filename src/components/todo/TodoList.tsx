import { Todo } from '../../types/interfaceTodo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  listTitle: string;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  listTitle,
  deleteTodo,
}: TodoListProps) {
  return (
    <section>
      <h2>{listTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </section>
  );
}
