import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import { useState } from "react";
import { useEffect } from "react";

export default function LeaderBoards(props) {
	const [inputFetched, setInputFetched] = useState(false);
	const [state, setState] = useState([]);

	useEffect(() => {
		async function temp() {
			let users = await getData();
			let tempDeepCopy = JSON.parse(JSON.stringify(users));
			setState(tempDeepCopy);
			setInputFetched(true);
		}
		temp();
	}, []);
	async function getData() {
		const data = await fetch("https://hero-hours.vercel.app/api/hour/users");
		let json;
		try {
			json = await data.json();
		} catch (e) {
			console.log(e);
		}

		let users = json.users;
		users = users.map((el) => {
			return { username: el.username, hours: el.hours };
		});
		return users;
	}

	return (
		<div className="leaderBoards">
			{inputFetched && (
				<>
					<Daily users={state} />
					<Weekly users={state} />
					<Monthly users={state} />
				</>
			)}
		</div>
	);
}
