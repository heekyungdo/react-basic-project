import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        // 퀴즈가 완료된 이후인 이 자리에 와야 에러 발생하지 않음.
        // 그래야만 이 코드가 아직 표시할 문제가 남아 있을 때만 실행될 수 있다.
        shuffledAnswers.current = [...answers];
        // 100가지의 경우의 수 중에서 50개는 양수, 50개는 음수가 된다.
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current.map(answer => {
                const isSelected = selectedAnswer === answer;

                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}>
                            {answer}
                        </button>
                    </li>
                )
            }

            )}
        </ul>
    )
}