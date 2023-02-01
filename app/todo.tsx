'use client';

import { useRouter } from 'next/navigation';

const isCheckTodo = async (
  id: string,
  isDone: boolean,
  refresh: () => void
) => {
  await fetch('http://localhost:3000/api/todos', {
    method: 'PUT',
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
};

const deleteTodo = async (id: string, refresh: () => void) => {
  await fetch('http://localhost:3000/api/todos', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  });

  refresh();
};

export default function Todo({
  todo,
}: {
  todo: { name: string; id: string; isChecked: boolean };
}) {
  const router = useRouter();
  return (
    <>
      <input
        type='checkbox'
        onChange={(e) => isCheckTodo(todo.id, e.target.checked, router.refresh)}
        checked={todo.isChecked}
      />
      {todo.name}
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
