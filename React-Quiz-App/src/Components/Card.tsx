import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from './Card.styles';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}) => (
	<Wrapper>
		<p className='number'>
			Question: {questionNr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer) => (
				<ButtonWrapper
					key={answer}
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
				>
					<button
						disabled={userAnswer ? true : false}
						value={answer}
						onClick={callback}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);

export default QuestionCard;
