'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const addTodo = async (name: string, refresh: () => void) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    name,
    isDone: false,
  };
  await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  });

  refresh();
};

export default function AddNewTodo() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button
        onClick={() => {
          addTodo(inputRef.current?.value!, router.refresh);
          inputRef.current?.value ? (inputRef.current.value = '') : null;
        }}
      >
        Add
      </button>
    </div>
  );
}
