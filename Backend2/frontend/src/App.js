import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input type="text" placeholder="Add todos..."></input>
          <div className="add">Add</div>
        </div>
        <div className="list">
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
