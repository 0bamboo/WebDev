import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
	width: 50%;
	height:50%;
	background-color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 12px;
`;

const StyledHeader = styled.div`
	background-color: black;
	color: white;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledBox = styled.div`
	margin-top: 50px;
	width: 50%;
	height: 50%;
	// border: 1px solid white;
`;

const StyledLine = styled.div`
	width: 100%;
	height: 33%;
	// border: 1px solid white;
	display: flex;
	
`;

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
	const [square, setSquares] = useState(
		() => JSON.parse(window.localStorage.getItem('squares')) ||
	Array(9).fill(null));

	const nextVal  = whatIsTheNextVal(square);
	const winner = getTheWinner(square);

	useEffect(() => {
		window.localStorage.setItem('squares', JSON.stringify(square))
	}, [square])

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
		if (square[index])
			return ;
		const copy = [...square]
		copy[index] = nextVal
		setSquares(copy)
		// setNextVal(whatIsTheNextVal(copy))
		console.log(square[index])
	}

	function selectSquare(index){

		return (
			<StyledButton onClick={() => fillSquare(index)}>
				{square[index]}
			</StyledButton>
		)
	}

	return (
		<>
			<StyledTicTacToe>
				<StyledHeader> TIC-TAC-TOE</StyledHeader>
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
				<StyledStatus>
					<Styledwin> STATUS: {winner ? `${winner} wins`: `next move ${nextVal}`} </Styledwin>
					<button style={{width: "100px", height: "40px", fontWeight: "600"}} onClick={() => { setSquares(Array(9).fill(null))}}>RESTART</button>
				</StyledStatus>
			</StyledTicTacToe>
		</>
	);
}
