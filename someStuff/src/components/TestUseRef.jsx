import React from "react";
import { useRef, useEffect, useState } from "react";

export default function TestUseRef() {
	const [mutableVal, setMutableVal] = useState(0);
	const countRenders = useRef(mutableVal);
	const buttonRef = useRef()

	useEffect(() => {
		countRenders.prev = countRenders.current;
		countRenders.current = countRenders.current + 1;

		console.log(`${countRenders.current} ----------- ${countRenders.prev}`);
	});

	function focus() {
		buttonRef.current.focus()
		console.log(buttonRef.current)
	}

	return (
		<>
			<button
				ref={buttonRef}
				style={{ fontSize: "100px" }}
				onClick={() => {
					setMutableVal(mutableVal + 1);
					
				}}
			>
				{mutableVal}
			</button>
			<div onClick={focus}>{`${countRenders.current}`}</div>
		</>
	);
}
