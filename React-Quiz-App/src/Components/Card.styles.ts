import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 600px;
	min-width: 400px;
	background: #fff6ea;
	border-radius: 10px;
	margin-top: 20px;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	p {
		font-size: 1.3rem;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;

	:hover {
		opacity: 0.8;
	}

	button {
		cursor: pointer;
		user-select: none;
		font-size: 1rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? 'linear-gradient(90deg, #56ffa4, #59bc86)'
				: !correct && userClicked
				? 'linear-gradient(90deg, #ff5656, #c16868)'
				: 'linear-gradient(90deg, #c38527, #cf9b4d)'};
		border: 3px solid #fff;
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: #fff;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
