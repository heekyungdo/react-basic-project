import { useRef, useState } from "react"

import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    if (QUESTIONS.length === activeQuestionIndex + 1) {

    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // 100가지의 경우의 수 중에서 50개는 양수, 50개는 음수가 된다.
    shuffledAnswers.sort(() => Math.random() - 0.5);

    function HandleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer =>
                        <li key={answer} className="answer">
                            <button onClick={() => HandleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}