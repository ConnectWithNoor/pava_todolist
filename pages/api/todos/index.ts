import { NextApiRequest, NextApiResponse } from 'next';
import { useId } from 'react';

let todosList = [
  {
    id: '6297781a',
    name: 'Learn Next js',
    isDone: false,
  },
  {
    id: '341c3abb',
    name: 'Learn HTML',
    isDone: false,
  },
  {
    id: 'f9e955d8',
    name: 'Start a new project',
    isDone: false,
  },
];

export default function todos(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const todo = JSON.parse(req.body);

    todosList.push(todo);

    res.status(200).json({
      todos: todosList,
    });
  }

  if (req.method === 'GET') {
    res.status(200).json({
      todos: todosList,
    });
  }

  if (req.method === 'PUT') {
    const { id: editId, isDone: editIsDone } = JSON.parse(req.body);

    todosList.forEach((todo) => {
      if (todo.id === editId) {
        todo.isDone = editIsDone;
      }
    });

    res.status(200).json({
      todos: todosList,
    });
  }

  if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body);

    todosList = todosList.filter((todo) => todo.id !== id);

    res.status(200).json({
      todos: todosList,
    });
  }
}
