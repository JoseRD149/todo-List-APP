import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Agregar tarea"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default TodoForm;
