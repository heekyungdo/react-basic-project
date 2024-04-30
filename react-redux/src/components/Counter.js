import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => { };

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  }

  const handleIncrease = () => {
    dispatch({ type: 'increase', amount: 5 });
  }

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
