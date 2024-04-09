import { useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        // return 해주지 않으면 모달창이 꺼져도 setInterval 계속 실행된다.
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress value={remainingTime} max={timer} />
    )
}