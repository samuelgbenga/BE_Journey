import Todo from "./components/todo";
import { useEffect, useState } from "react";
import { getAllTodo, addTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add todos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={() => addTodo(text, setText, setTodo)}>
            Add
          </div>
        </div>
        <div className="list">
          {todo && todo.map((item) => <Todo key={item._id} text={item.text} />)}
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
