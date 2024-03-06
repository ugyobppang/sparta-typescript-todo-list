import styled from 'styled-components';
import { Todo } from '../../types/interfaceTodo';

interface TodoSubmitProps {
  addTodo: (todo: Todo) => void;
}

export default function TodoSubmit({ addTodo }: TodoSubmitProps) {
  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    addTodo(nextTodo);
  };

  return (
    <section>
      <FormArea onSubmit={handleSubmitTodo}>
        <label>제목 : </label>
        <input type="text" name="title" />
        <label>내용 : </label>
        <input type="text" name="content" />
        <button type="submit">추가하기</button>
      </FormArea>
    </section>
  );
}

const FormArea = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
  & label {
    font-weight: bold;
  }
  & input {
    margin-left: -1.6rem;
    border: none;
    border-bottom: 2px solid black;
    width: 280px;
    height: 30px;
    outline: none;
  }
  & button {
    border: none;
    border-radius: 5px;
    background-color: #00ff00;
    width: 150px;
    height: 30px;
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
  }
  & button:hover {
    background-color: #00e900;
  }
`;
