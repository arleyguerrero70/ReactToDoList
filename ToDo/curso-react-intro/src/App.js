import React from 'react';
import './globals.css'
import {ToDoCounter} from './ToDoCounter';
import {ToDoSearch} from './ToDoSearch';
import {ToDoList} from './ToDoList';
import { ToDoItem } from './ToDoItem';
import {CreateToDo} from './CreateToDo';


const exampleToDo = [
  {text: "Tarea de inicio", complete: true},
  {text: "Tarea 2", complete: false},
  {text: "Tarea 3", complete: true},
  {text: "Tarea 4", complete: false}
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completed={10} total={15}/>

      <ToDoSearch />

      <ToDoList>
        {exampleToDo.map(todo =>(
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
          />
        ))}
      </ToDoList>

      <CreateToDo/>

    </React.Fragment>
  );
}
export default App;
