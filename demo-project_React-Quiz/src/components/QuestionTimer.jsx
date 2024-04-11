import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // setTimeout(() => {
    //     onTimeout();
    // }, timeout);

    // useEffect로 감싸줘야해. 그렇지 않으면, 남은 시간을 setInterval에서 100 밀리초마다 업데이트 할 때
    // QuestionTimer 컴포넌트 함수가 재 실행되고, setTimeout 이 타이머가 재생성되기 때문에.
    // 그럼 다수의 timer가 실행될 것이다.

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100);

        // return (() => {
        //     clearInterval(interval);
        // });
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}