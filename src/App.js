import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  //usar useState para gestionar los datos despues de volverlos JSON
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const res = await fetch (url);
    const data = await res.json();
    setTodos(data);
    
  }
  //usar useefect para gestionar la conexión a la api
  useEffect(()=>{
    fetchApi();
  }, [])

  return (
    <div className="App">
      Hola mundo
      <ul>
        {!todos ? 'Cargando...' : todos.map((todo, index) =>{
          return <li key={todo.id}>{todo.title} {todo.completed ? '🟩' : '🟥'}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
