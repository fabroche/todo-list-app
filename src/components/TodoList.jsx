import React from "react";
import '../styles/TodoList.css'
import ListaDeTareas from "./ListaDeTareas.jsx";

function TodoList({titulo}) {
  return (
    <div className="tareas-lista-principal">
      <h1>{titulo}</h1>
      <ListaDeTareas />
    </div>
  );
}

export default TodoList;