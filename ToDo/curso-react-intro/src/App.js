import React from 'react';
import './globals.css'
import {ToDoCounter} from './ToDoCounter';
import {ToDoSearch} from './ToDoSearch';
import {ToDoList} from './ToDoList';
import {ToDoItem} from './ToDoItem';
import {CreateToDo} from './CreateToDo';


const exampleToDo = [
  {text: "Tarea de inicio", completed: true},
  {text: "Tarea 2", completed: false},
  {text: "Tarea 3", completed: true},
  {text: "Tarea 4", completed: false},
  {text: "Tarea 5", completed: false}
]

function App() {

  const [todos, setTodos] = React.useState(exampleToDo)

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Estás haciendo búsqueda de: ' + searchValue)

  const completedToDos = exampleToDo.filter(
    todo => !!todo.completed
  ).length;

  const totalToDos = exampleToDo.length;


  return (
    <React.Fragment>

      <ToDoCounter
        completed={completedToDos}
        total={totalToDos}
      />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {exampleToDo.map(todo =>(
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDo/>

    </React.Fragment>
  );
}
export default App;
