const searchIcon = document.querySelector('.fa-magnifying-glass');
const filterIcon = document.querySelector('.fa-filter');
const searchInputContainer = document.querySelector('.search-input-container');
const filterBox = document.querySelector('.filter-box');

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

searchIcon.addEventListener('click', () => {
	searchInputContainer.classList.toggle('visible');
});

filterIcon.addEventListener('click', () => {
	filterBox.classList.toggle('visible');
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	menu.classList.toggle('menu--active');
});
