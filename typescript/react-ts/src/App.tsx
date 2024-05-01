import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('todo'),
    new Todo('todo1'),
  ]; 

  return (
    <div >
      <Todos items={todos} />
    </div>
  );
}

export default App;
