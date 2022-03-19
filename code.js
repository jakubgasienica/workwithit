const searchIcon = document.querySelector(".fa-magnifying-glass");
const filterIcon = document.querySelector(".fa-filter");
const searchInput = document.querySelector(".search-input");
const filterBox = document.querySelectorAll(".filter-box-button");

const hamburger = document.querySelector('.hamburger');
const hamburgerInner = document.querySelector('.hamburger__inner');
const menu = document.querySelector('.menu');

let flagSearch = false;
let flagFilter = false;

searchIcon.addEventListener("click", () => {
	if (flagSearch === false) {
		searchInput.style.display = "flex";
		flagSearch = true;
	} else {
		searchInput.style.display = "none";
		flagSearch = false;
	}
});

filterIcon.addEventListener("click", () => {
	if (flagFilter === false) {
		filterBox.forEach(button => {
            button.style.display = "flex";
        });
		flagFilter = true;
	} else {
		filterBox.forEach(button => {
            button.style.display = "none";
        });
		flagFilter = false;
	}
    
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
})