import AddNewTodo from './addNewTodo';
import TodoList from './todoList';

export default function Home() {
  return (
    <div>
      <AddNewTodo />
      {/* @ts-expect-error*/}
      <TodoList />
    </div>
  );
}
