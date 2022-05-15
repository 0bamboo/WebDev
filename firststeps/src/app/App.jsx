import "./style.css"

function Navbar() {
	return (
		<div className="nav">
			<img alt = "img" src = "./logo192.png" className="nav--icon" />
			<h3 className="nav--logo_text"> React facts</h3>
			<h4 className="nav--title"> React Course - Project 1 </h4>
		</div>
	)
}

function Main()
{
	return (
		<div className="main">
			<h1 className="main--title">Fun Facts about React</h1>
			<ul className="main--facts">
				<li> was first released in 2013.</li>
				<li> was first released in 2013.</li>
				<li> was first released in 2013.</li>
				<li> was first released in 2013.</li>
				<li> was first released in 2013.</li>
				<li> was first released in 2013.</li>
			</ul>
		</div>
	)
}

export default function App() {
	return (
		<div>
			<Navbar />
			<Main />
		</div>
	);
}

// export default App; same thing
