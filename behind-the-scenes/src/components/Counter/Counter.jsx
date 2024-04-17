import { useState, memo, useCallback, useMemo, useEffect } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log('Calculating if is prime number', 2, 'other');

  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  // initialCount가 처음 컴포넌트 생성 이후 리셋하기 위해 useEffect 사용
  // 하지만 useEffect 사용은 제한하는게 좋아.
  // 대부분 최적의 방법으로 쓰이지 않고, 추가적인 컴포넌트 실행을 요구하기 때문에. 
  // 또, 다른 컴포넌트 함수 실행을 야기하기 때문에.
  // initialCount가 바뀔 때마다 컴포넌트가 reset되도록
  // initialCount를 컴포넌트 키에 사용하는 것이 좋아.
  useEffect(() => {
    setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }])
  }, [initialCount]);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([{ value: initialCount, id: Math.random() * 1000 }]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [{ value: -1, id: Math.random() * 1000 }, ...prevCounterChanges]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [{ value: 1, id: Math.random() * 1000 }, ...prevCounterChanges]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;