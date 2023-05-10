

function ToDoList({children}){
    return(
        <div className="containerToDoList">
            <ul className="listContent">
                {children}
            </ul>
        </div>
    )
}

export {ToDoList}