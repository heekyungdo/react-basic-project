import { useState } from 'react';
import NewToDo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // 아래와 같이 작성하면, todos가 never 타입이라고 나온다.
  // never이란 타입은 배열이 언제나 비어있다는 의미. 어떤 값도 추가될 수 없다.
  // const [todos, setTodos] = useState([]);

  // 이렇게 써줘야한다. setState는 원래 제네릭타입이다.
  // Todo[] => state가 Todo 배열을 관리한다는 의미이다.
  // 처음에는 빈 배열이지만, 나중에 배열에 항목을 추가할 때는 반드시 Todo 타입이어야한다.
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    })
  }

  return (
    <div >
      <NewToDo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
