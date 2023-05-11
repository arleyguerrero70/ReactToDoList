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

  const resultSearchToDo = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase()
      const todoResult = searchValue.toLowerCase()
      return todoText.includes(todoResult)
    }
  )

  const completeTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = false
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }


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
        {resultSearchToDo.map(todo =>(
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDo/>

    </React.Fragment>
  );
}
export default App;
