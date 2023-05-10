import React from "react"

function ToDoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Estás haciendo búsqueda de: ' + searchValue)

    return(
        <div className="containerInput">
            <input
                onChange={
                    (event) => {
                        console.log('Has escrito en el buscador de To Do')
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