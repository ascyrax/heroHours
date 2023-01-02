import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LeaderBoards from "./components/LeaderBoards";

export default function App(props) {
	return (
		<div className="app">
			<Link to="/">Home</Link>
			<Link to="/leaderboards">LeaderBoards</Link>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/leaderboards" element={<LeaderBoards />}></Route>
			</Routes>
		</div>
	);
}
