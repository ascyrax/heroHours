export default function Daily({ users }) {
	// console.log(users);
	let usersCopy = JSON.parse(JSON.stringify(users));
	usersCopy.map((el) => {
		let hours = el.hours;
		let hour = hours[hours.length - 1];
		el.hours = hour;
		return el;
	});
	console.log(usersCopy);
	// [DOUBT] = > THIS LINE SHOULD PRINT AN UNSORTED usersCopy. but it doesnt. why?
	usersCopy.sort((a, b) => b.hours - a.hours);
	console.log(usersCopy);

	return (
		<div className="daily">
			<h1>daily</h1>
			<ul className="daily-li">
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
