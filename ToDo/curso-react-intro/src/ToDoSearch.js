import React from "react"

function ToDoSearch({
    searchValue,
    setSearchValue
}) {
    return(
        <div className="containerInput">
            <input
                onChange={
                    (event) => {
                        setSearchValue(event.target.value)
                    }
                }
                placeholder="Buscar Tarea"
                className="inputSearch"
                value={searchValue}
                />
        </div>
    )
}

export {ToDoSearch};