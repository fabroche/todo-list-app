import React, {useEffect, useState} from "react";
import '../styles/TodoList.css'
import ListaDeTareas from "./ListaDeTareas.jsx";

function TodoList({titulo}) {


  const [todoTitulo, settodoTitulo] = useState(titulo);

  useEffect((e) => {
    document.title = todoTitulo;
  }, [todoTitulo]);

  const manejarTitulo = (e) => {
    settodoTitulo(e.target.value)
  }

  return (
    <div className="tareas-lista-principal">
      <h1>
        <input
          onChange={manejarTitulo}
          className='todo-title'
          type="text"
          defaultValue={titulo}
          placeholder="Pick a Title"
        />
      </h1>
      <ListaDeTareas/>
    </div>
  );
}

export default TodoList;