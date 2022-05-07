import "./style.css"

function Header()
{
	return (
		<header>
			<nav className="nav">
				<img src="./logo512.png" alt="react logo" className="logo"/>
				<ul className="nav-items">
					<li>About</li>
					<li>Pricing</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}

function Footer(){
	return (
		<footer>
			<div>This is a Footer</div>
		</footer>
	);
}

function MainContent()
{
	return (
		<div>
		<h2>Fun facts about React : </h2>
		<ul>
			<li>achraf zaaml</li>
			<li>malk sirr tqrra </li>
			<li>jarwila jarjar</li>
		</ul>
		</div>
	);
}

export default function App() {
	return (
		<div>
			<Header />
			<hr className="sampleLine"/>
			<MainContent />
			<Footer/>
		</div>
	);
}

// export default App; same thing
