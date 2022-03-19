// TODO: install better comments extension
// TODO: create folders per file type

const searchIcon = document.querySelector(".fa-magnifying-glass");
const filterIcon = document.querySelector(".fa-filter");
const searchInput = document.querySelector(".search-input");
const filterBox = document.querySelectorAll(".filter-box-button");

const hamburger = document.querySelector(".hamburger");
const hamburgerInner = document.querySelector(".hamburger__inner");
const menu = document.querySelector(".menu");

let flagSearch = false;
let flagFilter = false;

searchIcon.addEventListener("click", () => {
	searchInput.style.display = flagSearch ? "flex" : "none";
	flagSearch = !flagSearch;
});

filterIcon.addEventListener("click", () => {
	filterBox.forEach(button => {
		button.style.display = flagFilter ? "flex" : "none";
	});
	flagFilter = !flagFilter;
});

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger--active");
	menu.classList.toggle("menu--active");
});
