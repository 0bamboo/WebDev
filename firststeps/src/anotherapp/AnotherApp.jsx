// import Todo from "./components/Todo.jsx"
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetup.jsx";
import Favorites from "./pages/Favorites.jsx";
import MainNavigation from "./components/layout/MainNavigation";

function AnotherApp() {
	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<AllMeetupsPage />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default AnotherApp;
