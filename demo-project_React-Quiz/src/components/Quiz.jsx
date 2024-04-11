import { useEffect, useState } from "react"

import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js';
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    // ** 이 자리에 두면 에러발생
    // const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // shuffledAnswers.sort(() => Math.random() - 0.5);
    // ** 이 자리에 두면 에러발생

    // 왜??
    // quizIsComplete 값을 생성하기도 전에 무작위로 섞은 답변을 얻기 위해 activeQuestionIndex에 접근하려고 하기 때문에.
    // 퀴즈가 완료되었을 때 에러가 발생하는 이유는 이미 모든 질문에 답을 해버렸기 때문에
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function HandleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="quiz complete" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    // 퀴즈가 완료된 이후인 이 자리에 와야 에러 발생하지 않음.
    // 그래야만 이 코드가 아직 표시할 문제가 남아 있을 때만 실행될 수 있다.
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // 100가지의 경우의 수 중에서 50개는 양수, 50개는 음수가 된다.
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={() => HandleSelectAnswer(null)} />
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