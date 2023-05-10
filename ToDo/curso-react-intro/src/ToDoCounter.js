const styles = {
  color: '#B2CBED',
  fontSize: '2rem',
  textAlign: 'center',
  margin: '0',
  padding: '2rem'
}

function ToDoCounter({total, completed}) {
    return(
      <h1 style={styles}
      >Has completado {completed} de {total} tareas</h1>
    )
}

export {ToDoCounter};