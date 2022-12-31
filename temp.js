fetch("https://localhost:7000/api/hourInput")
	.then((data) => data.json())
	.then((json) => console.log(json))
	.catch((err) => console.log("err", err));
