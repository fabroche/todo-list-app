import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TodoList from "../components/TodoList.jsx";
import ListaSubTareas from "../components/ListaSubTareas.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/TodoList">
        <TodoList/>
      </ComponentPreview>
      <ComponentPreview path="/ListaSubTareas">
        <ListaSubTareas/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews