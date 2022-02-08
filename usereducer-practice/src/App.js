import { TodosProvider } from "./contexts/todos.context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  )
}

export default App;