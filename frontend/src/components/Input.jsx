import { useState } from "react";

export default function Input(props) {
	// controlled form
	const [formState, setFormState] = useState({ hourInput: "" });
	function handleChange(e) {
		const val = e.target.value;
		setFormState((prevFormState) => ({
			...prevFormState,
			hourInput: val,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		let target = e.target;
		let val = document.getElementsByName("hourInput");
		console.log(target, val);
	}
	return (
		<div className="input">
			<form method="POST" action="/hourInput" onSubmit={handleSubmit}>
				<label htmlFor="hourInput">Input no of hours you worked today</label>
				<input
					type="text"
					name="hourInput"
					id="hourInput"
					value={formState.hourInput}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
