import { useState, useRef } from "react";

// 1. 상태가 변하면 함수는 재실행된다. 
// 2. timer 변수를 TimerChallengeg함수 안에 선언하면
// 3. TimerChallenge 함수가 재실행되면서 timer가 또 재생성된다.
// 4. handleStart의 timer와 handleStop의 timer는 다르다.
// 5. 왜냐하면 handleStart함수 내 두번째 setTimerStarted로 인해 상태를 업데이트했기 때문에
// 6. 즉, handleStop() 함수에 오기 전에 이미 한번 상태가 업데이트되어 TimerChallenge함수가 재실행된다.
// 7. 그래서 handleStop() 함수를 클릭해도 setTimeout이 없어지지 않는 것이다.
// 8. 결론, timer 변수를 TimerChallenge함수 밖으로 뺀다.
// 9. 하지만 이렇게 해도 문제가 생긴다. 변수가 해결 방법이 아니다.
// 10. 왜? 첫번째 게임 시작 -> 두번째 게임 시작 => setTimeout이 첫번째 게임으로 덮어쓰여져 두번째 게임에 대한 데이터를 없어져버린다.

// let timer; => 최종 클릭한 게임으로 덮어쓰여짐

function TimerChallenge({ title, targetTime }) {
    // timer는 컴포넌트 함수 안에 내장되어 있기 때문에 특정 컴포넌트 인스턴스에만 할당된 것이다.
    // 컴포넌트 내 다른 인스턴스들의 참조들과 독립적인 동작한다.
    // ref는 함수가 재실행되도 초기화되거나 지워지지 않는다.
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // let timer; => 상태 업데이트되며 재생성된다.

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            // 1000 곱해서 밀리초로 변환.
        }, targetTime * 1000);
        // 타이머 설정되고 바로 실행
        setTimerStarted(true);
    }

    function handleStop() {
        // handleStart 함수 내 타이머에 접근하는 방법
        // handleStart 함수 내 타이머를 어떻게 멈추게 할까?
        // timer를 멈추고는 싶지만, ui변경은 하고 싶어하지 않을때 ref 사용.
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}

export default TimerChallenge;