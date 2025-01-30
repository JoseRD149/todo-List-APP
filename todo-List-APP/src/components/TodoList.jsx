function TodoList({ todos, onDelete, onMove }) {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onMove(index, -1)}>↑</button>
            <button onClick={() => onMove(index, 1)}>↓</button>
            <button onClick={() => onDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  