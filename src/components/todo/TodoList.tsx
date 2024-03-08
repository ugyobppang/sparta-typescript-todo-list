import styled from 'styled-components';
import { Todo } from '../../types/interfaceTodo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  listTitle: string;
  deleteTodo: (id: string) => void;
  toggleTodoIsDone: (id: string) => void;
}

export default function TodoList({
  todos,
  listTitle,
  deleteTodo,
  toggleTodoIsDone,
}: TodoListProps) {
  return (
    <SectionArea>
      <h2>{listTitle}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoIsDone={toggleTodoIsDone}
          />
        ))}
      </ul>
    </SectionArea>
  );
}

const SectionArea = styled.section`
  margin-top: 1rem;
  & h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 26px;
  }
`;
