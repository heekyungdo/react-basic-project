import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from '../questions.js'

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer }) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            // 정답인지 오답인지 2초 안에 보여준다.
            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000)
    }

    let answerState = '';

    if (answer.selectedAnswer) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer} />
            <h2>
                {QUESTIONS[index].text}
            </h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    )
}