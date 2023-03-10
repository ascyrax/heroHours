import { useState } from "react";

export default function Input(props) {
	// controlled form
	const [formState, setFormState] = useState({ username: "", hours: "" });

	function handleChange(e) {
		let target = e.target;
		let [name, val] = [target.name, target.value];

		setFormState((prevFormState) => ({
			...prevFormState,
			[name]: val,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch("https://hero-hours.vercel.app/api/hour/userInput", {
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

	async function handleClick() {
		try {
			let data = await fetch("http://localhost:7000/");
			data = await data.json();
			console.log(data);
		} catch (e) {
			console.log(e);
		}
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
