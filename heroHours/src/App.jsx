import Home from "../components/Home";
import DashBoard from "../components/DashBoard";
import LeftNav from "../components/LeftNav";
import LeaderBoards from "../components/LeaderBoards";
import About from "../components/About";

import "../styles/app.css";

function App(props) {
	return (
		<div id="app">
			<LeftNav />
			{window.location.href == "http://localhost:5173/" && <Home />}
			{window.location.href == "http://localhost:5173/dashboard" && (
				<DashBoard />
			)}
			{window.location.href == "http://localhost:5173/leaderboards" && (
				<LeaderBoards />
			)}
			{window.location.href == "http://localhost:5173/about" && <About />}
		</div>
	);
}

export default App;
