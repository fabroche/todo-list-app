// estilos
import './App.css'

// assets
import freeCodeCampLogo from './images/freecodecamp-logo.png'

// components
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp'
import TodoList from './components/TodoList'
// hooks


function App() {


  return (
    <div className="aplicacion-tareas">

      <LogoFreeCodeCamp src={freeCodeCampLogo} />
      <TodoList />

    </div>
  )
}

export default App
