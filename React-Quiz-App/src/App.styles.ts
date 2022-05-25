import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/compbg2.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;

  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #00092c;
	}
	.score {
		color: #f3e9dd;
		font-size: 2rem;
		margin: 0;
	}
	h1 {
		font-family: 'Roboto Mono', monospace;
		color: #f3e9dd;
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		font-size: 50px;
		font-weight: 400;
		text-align: center;
		margin-top: 120px;
	}
	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #fff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
		font-size: 1.5rem;
		font-weight: 600;
		width: 40%;
	}
	.start {
		max-width: 400px;
	}
`;
