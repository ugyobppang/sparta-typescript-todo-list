import styled from 'styled-components';
import { Todo } from '../../types/interfaceTodo';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodoIsDone: (id: string) => void;
}

export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodoIsDone,
}: TodoItemProps) {
  const { id, title, content, isDone } = todo;

  const handleDeleteClick = (id: string) => {
    deleteTodo(id);
  };

  const handleToggleClick = (id: string) => {
    toggleTodoIsDone(id);
  };

  return (
    <li>
      <TodoCard>
        <h3>{title}</h3>
        <p>{content}</p>
        <ButtonArea>
          <button onClick={() => handleDeleteClick(id)}>삭제하기</button>
          <button onClick={() => handleToggleClick(id)}>
            {isDone ? '취소' : '완료'}
          </button>
        </ButtonArea>
      </TodoCard>
    </li>
  );
}

const TodoCard = styled.article`
  border: 2px solid black;
  border-radius: 5px;
  width: 280px;
  height: 160px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  & h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  & button {
    width: 113px;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }
  & :nth-child(1) {
    background-color: #ff0000;
  }
  & :nth-child(1):hover {
    background-color: #e90000;
  }
  & :nth-child(2) {
    background-color: #00ff00;
  }
  & :nth-child(2):hover {
    background-color: #00e900;
  }
`;
