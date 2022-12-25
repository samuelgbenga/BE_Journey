import Todo from "./components/todo";
import { useEffect, useState } from "react";
import { getAllTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input type="text" placeholder="Add todos..."></input>
          <div className="add">Add</div>
        </div>
        <div className="list">
          {todo && todo.map((item) => <Todo key={item._id} text={item.text} />)}
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
