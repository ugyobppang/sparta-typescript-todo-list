import { useState } from 'react';
import TodoSubmit from './TodoSubmit';
import { Todo } from '../../types/interfaceTodo';
import TodoList from './TodoList';

export default function TodoController() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: '리액트 배우기',
      content: '리액트 기초 강의 보기',
      isDone: false,
    },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoSubmit addTodo={addTodo} />
      <TodoList
        listTitle="Working..."
        todos={workingTodos}
        deleteTodo={deleteTodo}
      />
      <TodoList listTitle="Done!" todos={doneTodos} deleteTodo={deleteTodo} />
    </main>
  );
}
