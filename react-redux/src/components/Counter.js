import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter.js';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleIncrease = () => {
        dispatch(counterActions.increase(10));
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter &&
                <div className={classes.value}>{counter}</div>
            }
            <div>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleIncrease}>Increase by 10</button>
                <button onClick={handleDecrement}>-</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
