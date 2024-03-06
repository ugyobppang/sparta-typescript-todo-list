import { Todo } from '../../types/interfaceTodo';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, title, content, isDone } = todo;

  return (
    <li>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
          <button>삭제하기</button>
          <button>완료</button>
        </div>
      </article>
    </li>
  );
}
