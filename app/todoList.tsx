import Todo from './todo';

const getTodos = async () => {
  const todos = await fetch('http://localhost:3000/api/todos');
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  return (
    <div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        {todos.map((todo: any) => {
          return (
            <li style={{ padding: '5px 0' }} key={todo.id}>
              <Todo todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
