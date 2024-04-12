import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // setTimeout(() => {
    //     onTimeout();
    // }, timeout);

    // useEffect로 감싸줘야해. 그렇지 않으면, 남은 시간을 setInterval에서 100 밀리초마다 업데이트 할 때
    // QuestionTimer 컴포넌트 함수가 재 실행되고, setTimeout 이 타이머가 재생성되기 때문에.
    // 그럼 다수의 timer가 실행될 것이다.

    // 카운터타이머 이후에 배열이 쌓이게
    useEffect(() => {
        console.log('timeout')
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [onTimeout, timeout])

    // 질문 카운터
    useEffect(() => {
        console.log('interval')
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}

// 1. 코드 순서는 setInterval로 한 질문마다 카운터 다운이 되고
// 2. setTimeout에 두번째 인자인 timeout(카운트 다운이 끝나면), onTimeout으로 새로운 배열이 쌓여 다음 질문으로 넘어가게 한다.