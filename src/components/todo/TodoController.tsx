import { useState } from 'react';
import TodoSubmit from './TodoSubmit';
import { Todo } from '../../types/interfaceTodo';

export default function TodoController() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <main>
      <TodoSubmit addTodo={addTodo} />
    </main>
  );
}
