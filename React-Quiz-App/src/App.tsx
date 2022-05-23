import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import QuestionCard from './Components/Card';

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};
function App() {
	const TOTAL_QUESTIONS = 15;

	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.Medium,
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswer([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[number].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswer((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;
		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper className='App'>
				<h1>FUN QUIZ FOR PROGRAMMERS</h1>
				{gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
					<button className='start' onClick={startTrivia}>
						START
					</button>
				) : null}
				{!gameOver ? <p className='score'>Score: {score}</p> : null}
				{loading ? <p>Loading Questions...</p> : null}
				{!loading && !gameOver && (
					<QuestionCard
						questionNr={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={userAnswer ? userAnswer[number] : undefined}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
				!loading &&
				userAnswer.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className='next' onClick={nextQuestion}>
						NEXT
					</button>
				) : null}
			</Wrapper>
		</>
	);
}

export default App;
