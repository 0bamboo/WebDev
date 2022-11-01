import React from "react";
import "./App.css";
import Fetch from "./components/fetch";
import T_t_t from "./components/tictactoe";
import TestUseRef from "./components/TestUseRef";
import DoNothing from "./components/DoNothing";

function App() {
	return (
		<div className="App">
			{/* <T_t_t /> */}
			{/* <Fetch/> */}
			{/* <TestUseRef/> */}
			<DoNothing/>
		</div>
	);
}

export default App;
