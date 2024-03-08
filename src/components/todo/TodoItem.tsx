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
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
          <button onClick={() => handleDeleteClick(id)}>삭제하기</button>
          <button onClick={() => handleToggleClick(id)}>
            {isDone ? '취소' : '완료'}
          </button>
        </div>
      </article>
    </li>
  );
}
