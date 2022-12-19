import React from "React";

function Home(props) {
	let [state, setState] = React.useState({ hours: 0 });

	function handleChange(event) {
		console.log(event);
		let currentInput = event.target.value;
		setState({ hours: currentInput });
	}

	function handleSubmit(event) {
		console.log(event);
		event.preventDefault();
		window.location.href = "http://localhost:5173/leaderboards";
	}

	return (
		<div id="home">
			<div id="home-input">
				<h1>How many hero hours did you work today?</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="number"
						name="input-hours"
						value={state.hours}
						placeholder="more than All Might"
						onChange={handleChange}
					></input>
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		</div>
	);
}

export default Home;
