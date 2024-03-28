import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallengeInterval({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    // 너무 늦게 눌렀을 때 (시간이 남아 있지 않을 때))
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }
    // 아예 누르지 못했을 때
    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} result='lost' targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>
                    {timeIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}

export default TimerChallengeInterval;