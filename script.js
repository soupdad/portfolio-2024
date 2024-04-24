const hamMenu = document.getElementById("ham_menu");
const mainNav = document.getElementById("main_nav");
const tagLineDiv = document.getElementById("tag_line");
const blob = document.getElementById("blob");
const contactForm = document.getElementById("contact_form");

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

function validate(e) {
	hideErrors();

	if (formError()) {
		e.preventDefault();
	}
}

function formError() {
	let errorFlag = false;

	let regex;

	let requiredFields = ["name", "phone_number", "email", "message"];

	for (let i = 0; i < requiredFields.length; i++) {
		let field = document.getElementById(requiredFields[i]);
		let otherField;

		if (requiredFields[i] == "email" || requiredFields[i] == "phone_number") {
			if (requiredFields[i] == "email") {
				regex = new RegExp(/^\S+@\S+\.\S+$/);
				otherField = document.getElementById("phone_number").value;
			} 
			else {
				regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
				otherField = document.getElementById("email").value;
			}

			if (field.value == null || field.value.trim() == "") {
				if (otherField == null || otherField.trim() == "") {
					document.getElementById("email_error").style.display = "block";
					document.getElementById("phone_number_error").style.display = "block";

					if (!errorFlag) {
						field.focus();
						errorFlag = true;
					}
				}
			}
			else if (!regex.test(field.value)) {
				document.getElementById(requiredFields[i] + "_format_error").style.display = "block";
			
				if (!errorFlag) {
					field.focus();
					errorFlag = true;
				}
			}
		} else if (field.value == null || field.value.trim() == "") {
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
		
			if (!errorFlag) {
				field.focus();
				errorFlag = true;
			}
		}
	}

	return errorFlag;
}

function hideErrors() {
	let errorMessages = document.getElementsByClassName("error");

	for (let i = 0; i < errorMessages.length; i++) {
		errorMessages[i].style.display = "none";
	}
}

function resetForm(e) {
	if (confirm('Clear Form?')) {
		hideErrors();
		document.getElementById("name").focus();
		return true;
	}

	e.preventDefault();
	return false;
}

function moveBlob() {
	let num = Math.floor(Math.random() * 10) - 1;
	blob.style.borderRadius = blobShapes[num];
}

function load() {
	hamMenu.addEventListener('click', () => {
		hamMenu.classList.toggle('active');
		mainNav.classList.toggle('active');
	});
	
	if (contactForm != null) {
		contactForm.reset();
		contactForm.addEventListener('submit', validate);
		contactForm.addEventListener('reset', resetForm);
	}

	if (tagLineDiv != null) {
		tagLineDiv.addEventListener('mouseenter', moveBlob);
		tagLineDiv.addEventListener('mouseleave', moveBlob);
		tagLineDiv.addEventListener('click', moveBlob);
	}

	hideErrors();
}

document.addEventListener("DOMContentLoaded", load);