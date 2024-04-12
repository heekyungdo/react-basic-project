import { useCallback, useState } from "react"

import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";

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

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [
                ...prevAnswers,
                selectedAnswer
            ];
        });

    }, []);


    // 타이머가 만료되면 일어나는 현상
    const handleSkipAnswer = useCallback(() =>
        handleSelectAnswer(null),
        [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="quiz complete" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                // Question 컴포넌트 초기화시키기 위해 key 사용
                key={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer} />
        </div>
    )
}