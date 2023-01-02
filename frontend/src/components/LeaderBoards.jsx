import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import { useState } from "react";
import { useEffect } from "react";

export default function LeaderBoards(props) {
	const [users, setUsers] = useState([]);

	useEffect;
	async function getData() {
		const data = await fetch("http://localhost:7000/api/hour/users");
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
		console.log(users);
	}

	return (
		<div className="leaderBoards">
			<Daily users={users} />
			<Weekly users={users} />
			<Monthly users={users} />
		</div>
	);
}
