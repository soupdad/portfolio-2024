const hamMenu = document.getElementById("ham_menu");
const mainNav = document.getElementById("main_nav");
const tagLineDiv = document.getElementById("tag_line");
const blob = document.getElementById("blob");

const blobShapes = ["82% 18% 28% 72% / 60% 65% 35% 40%",
					"34% 66% 16% 84% / 34% 38% 62% 66%",
					"70% 30% 65% 35% / 51% 43% 57% 49%",
					"91% 9% 73% 27% / 68% 47% 53% 32%",
					"88% 12% 46% 54% / 48% 77% 23% 52%",
					"74% 26% 68% 32% / 23% 36% 64% 77%",
					"43% 57% 47% 53% / 35% 49% 51% 65%",
					"43% 57% 26% 74% / 63% 30% 70% 37%",
					"31% 69% 66% 34% / 44% 19% 81% 56%",
					"39% 61% 66% 34% / 22% 14% 86% 78%"]

function moveBlob() {
	let num = Math.floor(Math.random() * 10) - 1;
	blob.style.borderRadius = blobShapes[num];
}

function load() {
	hamMenu.addEventListener('click', () => {
		hamMenu.classList.toggle('active');
		mainNav.classList.toggle('active');
	});

	if (tagLineDiv != null) {
		tagLineDiv.addEventListener('mouseenter', moveBlob);
		tagLineDiv.addEventListener('mouseleave', moveBlob);
		tagLineDiv.addEventListener('click', moveBlob);
	}

	hideErrors();
}

document.addEventListener("DOMContentLoaded", load);