import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// ReactDOM.render(<h1>hi</h1>, document.getElementById("root"));
root.render(
	<App />
);