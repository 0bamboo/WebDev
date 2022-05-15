import Todo from "./components/Todo.jsx"

function AnotherApp()
{
	return (
		<div >
			{/* <h1>Hello.</h1> */}
			<h1>My todos</h1>
			<Todo title="First todo "/>
			<Todo title="Second todo"/>
			<Todo title="Third todo"/>
		</div>
	);
}

export default AnotherApp;