import React from "react"
import LogoCheck from './iconCheck.svg'
import LogoDelete from './iconDelete.svg'


function ToDoItem(props){
    return(
      <li className="toDoItem">
        <span>
          <figure className="toDoItem__icon">
              <img className="toDoItem__icon--check" src={LogoCheck} alt="Logo Check" />
          </figure>
        </span>
        <p>{props.text}</p>
        <span>
          <figure className="toDoItem__icon">
            <img className="toDoItem__icon--delete" src={LogoDelete} alt="Logo Delete" />
          </figure>
          </span>
      </li>
    )
}

export {ToDoItem}