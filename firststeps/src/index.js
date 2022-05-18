import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from './app/App.jsx'
import AnotherApp from "./anotherapp/AnotherApp.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// ReactDOM.render(<h1>hi</h1>, document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AnotherApp />
	</BrowserRouter>
);
