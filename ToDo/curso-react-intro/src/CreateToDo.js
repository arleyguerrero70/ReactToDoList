import React from "react"
import logo from './iconPlus.svg'

function CreateToDo(){
    return(
        <div className="containerButtonAddToDon">
            <button className="buttonAddToDo"
                onClick={
                    (event) =>{
                        console.log('Le has dado click al botón de crear tarea')
                        console.log(event)
                        console.log(event.target)

                    }
                }
            >
                <figure className="buttonAddToDo__icon">
                    <img src={logo} alt="iconPlus" />
                </figure>
            </button>
        </div>
    )
}

export {CreateToDo}