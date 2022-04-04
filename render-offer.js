const mainContainer = document.querySelector('.index__main');

const renderOffers = function () {
	const sectionOfferElement = document.createElement('section');
	sectionOfferElement.classList.add('offer');
	mainContainer.appendChild(sectionOfferElement);

	const offerLogoDivElement = document.createElement('div');
	offerLogoDivElement.classList.add('offer__logo');
	sectionOfferElement.appendChild(offerLogoDivElement);

	const offerLogoImgElement = document.createElement('img');
	offerLogoImgElement.classList.add('offer__logo__img');
	sectionOfferElement.appendChild(offerLogoImgElement);

	const offerTitleElement = document.createElement('h3');
	offerTitleElement.classList.add('offer__title');
	sectionOfferElement.appendChild(offerTitleElement);

	const offerCityElement = document.createElement('div');
	offerCityElement.classList.add('offer__city');
	sectionOfferElement.appendChild(offerCityElement);

	const offerStackElement = document.createElement('div');
	offerStackElement.classList.add('offer__stack');
	sectionOfferElement.appendChild(offerStackElement);

	const offerSalaryElement = document.createElement('div');
	offerSalaryElement.classList.add('offer__salary');
	sectionOfferElement.appendChild(offerSalaryElement);

	const offerTypeElement = document.createElement('div');
	offerTypeElement.classList.add('offer__type');
	sectionOfferElement.appendChild(offerTypeElement);
};
