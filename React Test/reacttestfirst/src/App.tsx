import TodoEntity from "./components/todo";

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <TodoEntity title="Start a React procject"/>
      <TodoEntity title="Create a component"/>
      <TodoEntity title="Add a prop to the component"/>
    </div>
  );
}

export default App;