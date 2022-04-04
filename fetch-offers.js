function fetchOffers() {
	const offer = [];

	window
		.fetch('http://localhost:4000/offers')
		.then((response) => response.json())
		.then((data) => {
			renderOffers();
		});
}

fetchOffers();
