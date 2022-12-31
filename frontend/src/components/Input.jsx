import { useState } from "react";

export default function Input(props) {
	// controlled form
	const [formState, setFormState] = useState({ username: "", hours: "" });

	function handleChange(e) {
		let target = e.target;
		console.log(target);
		let [name, val] = [target.name, target.value];
		console.log(name, val);

		setFormState((prevFormState) => ({
			...prevFormState,
			[name]: val,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch("http://localhost:7000/api/hour/userInput", {
			method: "POST",
			body: JSON.stringify(formState),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((data) => data.json())
			.then((json) => console.log(json))
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="input">
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">enter your hero name: </label>
				<input
					type="text"
					name="username"
					id="username"
					value={formState.username}
					onChange={handleChange}
				/>
				<p />
				<label htmlFor="hours">Input no of hours you worked today:</label>
				<input
					type="text"
					name="hours"
					id="hours"
					value={formState.hours}
					onChange={handleChange}
				/>
				<p />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
