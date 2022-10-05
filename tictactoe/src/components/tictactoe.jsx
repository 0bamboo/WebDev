import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocalStorageState } from "../customHooks/customhook";

// const StyledDiv = styled.div`
// 	width: 50%;
// 	height: 50%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: white;
// 	cursor: pointer;
// `;

// const StyledDivSec = styled.div`
// 	width: 50%;
// 	height: 50%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: beige;
// 	cursor: pointer;
// `;
const StyledTicTacToe = styled.div`
	width: 800px;
	height: 700px;
	background-color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 12px;
`;

const StyledHeader = styled.div`
	background-color: black;
	color: white;
	font-size: 70px;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledBox = styled.div`
	/* margin-top: 50px; */
	width: 50%;
	height: 50%;
	// border: 1px solid white;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 70%;
	justify-content: space-evenly;
	align-items: center;
`;

const StyledLine = styled.div`
	width: 100%;
	height: 33%;
	// border: 1px solid white;
	display: flex;
	
`;

const History = styled.div`
	width: 30%;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const HistoryHeader = styled.h3`
	font-weight: 300;
	font-size: 22px;
	color: white;
	margin: 0;
	padding: 0;
	margin-bottom: 5px;
`
const Historycontent  = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 200px;
	overflow: auto;
	/* background-color: white; */
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`

const HistoryButton = styled.button`
	margin: 0;
	padding: 0;
	width:60%;
	height:20px;
	color: black;
	background-color: grey;
	border: 1px solid black;
	border-radius: 12px;
	cursor: pointer;
	margin-bottom: 4px;
`

const StyledButton = styled.button`
	border: 1px solid white;
	height: 100%;
	width: 33%;
	background-color: black;
	color: white;
	font-weight: 700;
	font-size: 50px;
	cursor: pointer;
	&:hover {
		background-color: #1a1a1a;
	}
	
`;

const StyledStatus = styled.div`
	display: flex;
	/* border: 1px solid white; */
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 70px;
	padding: 20px;
`;

const Styledwin = styled.div`
	color: white;
	font-size: 20px;
`;
export default function T_t_t() {
	// const [square, setSquares] = useState(
	// 	() => JSON.parse(window.localStorage.getItem('squares')) ||
	// Array(9).fill(null));
	
	// const [history, setHistory] = useState([Array(9).fill(null)])
	const [history, setHistory] = useLocalStorageState('tictactoe-history', [Array(9).fill(null)])
	const [currentStep, setCurrStep] = useLocalStorageState('tictactoe-step', 0)
	// const [currentStep, setCurrStep] = useState(0)
	
	// const [an, setSom] = useLocalStorageState('som', "hello")
	const square = history[currentStep]
	const nextVal  = whatIsTheNextVal(square);
	const winner = getTheWinner(square);
	

	function whatIsTheNextVal(sq){
		return (sq.filter(Boolean).length % 2 === 0 ? "X": "O")
	}

	function getTheWinner(squares){
		const lines = [
			[0,1,2],
			[0,3,6],
			[0,4,8],
			[1,4,7],
			[2,5,8],
			[2,4,6],
			[6,7,8],
			[3,4,5]
		]
		for (let i = 0; i < lines.length; i++)
		{
			const [a,b,c] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
				return (squares[a])
		}
		return null;
	}

	function fillSquare(index){
		if (winner || square[index])
			return ;
		const copy = [...square]
		const his = history.slice(0, currentStep + 1)
		copy[index] = nextVal
		setHistory([...his, copy])
		setCurrStep(his.length)

	}

	function selectSquare(index){

		return (
			<StyledButton onClick={() => fillSquare(index)}>
				{square[index]}
			</StyledButton>
		)
	}
	const moves = history.map((stepSquare, step)=>{
		const content = !step ? "Go to game start": `Go to move #${step}`
		const isCurrStep = step === currentStep
		console.log("hell-> ",isCurrStep)
		return (
			<HistoryButton disabled={isCurrStep} key={step} onClick={()=> setCurrStep(step)}>{content} {isCurrStep ? '(current)':null}</HistoryButton>
		)
	})

	return (
		<>
			<StyledTicTacToe>
				<StyledHeader> TIC-TAC-TOE</StyledHeader>
				<Wrapper>
					<StyledBox>
						<StyledLine>
							{selectSquare(0)}
							{selectSquare(1)}
							{selectSquare(2)}
						</StyledLine>
						<StyledLine>
							{selectSquare(3)}
							{selectSquare(4)}
							{selectSquare(5)}
						</StyledLine>
						<StyledLine>
							{selectSquare(6)}
							{selectSquare(7)}
							{selectSquare(8)}
						</StyledLine>
					</StyledBox>
					<History>
						<HistoryHeader>History:</HistoryHeader>
						<Historycontent>
							{moves}
						</Historycontent>
					</History>
				</Wrapper>
				<StyledStatus>
					<Styledwin> STATUS:{winner ? `${winner} wins`: square.every(Boolean) ? 'Draw' : `next move ${nextVal}`} </Styledwin>
					<button style={{width: "100px", height: "40px", fontWeight: "600"}} onClick={() => { setHistory([Array(9).fill(null)]); setCurrStep(0)}}>RESTART</button>
				</StyledStatus>
			</StyledTicTacToe>
		</>
	);
}
