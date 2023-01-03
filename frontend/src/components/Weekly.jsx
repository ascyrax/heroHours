export default function Weekly({ users }) {
	let usersCopy = JSON.parse(JSON.stringify(users));

	for (let i = 0; i < usersCopy.length; i++) {
		let hours = usersCopy[i].hours;
		let sum = 0;
		for (let j = 0; j < 7; j++) {
			if (hours.length - 1 - j >= 0) sum += hours[hours.length - 1 - j];
		}
		usersCopy[i].hours = sum;
	}
	usersCopy.sort((a, b) => b.hours - a.hours);
	return (
		<div className="weekly">
			<h1>weekly</h1>
			<ul className="weekly-li">
				{usersCopy.map((el, i) => {
					return (
						<li key={i}>
							{el.username} {el.hours}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
