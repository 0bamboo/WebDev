import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const increment = (nbr = 1) => {
	return {
		type: 'INCREMENT',
		data: nbr
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

const DoNothing  = () => {
	const counter = useSelector(state => state.counter)
	const dispatch = useDispatch();
	return (
		<>
			<button style={{width:'100px',fontSize: '30px'}} onClick={()=> dispatch(increment(5))}>+</button>
			{`counter : ${counter}`}
			<button style={{width:'100px',fontSize: '30px'}} onClick={()=> dispatch(decrement())}>-</button>
			{/* nionen nessi */}
		</>
	)
}

export default DoNothing;