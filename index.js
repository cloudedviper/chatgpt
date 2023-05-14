// Smooth scrolling when clicking on nav links
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Toggle menu on mobile devices
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
	navList.classList.toggle('show');
});

// Validate contact form
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const form = document.querySelector('form');
const errorList = document.querySelector('.errors');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	// Reset error list
	errorList.innerHTML = '';

	// Validate name input
	if (nameInput.value === '') {
		appendError('Please enter your name');
	}

	// Validate email input
	if (emailInput.value === '') {
		appendError('Please enter your email');
	} else if (!isValidEmail(emailInput.value)) {
		appendError('Please enter a valid email');
	}

	// Validate message input
	if (messageInput.value === '') {
		appendError('Please enter a message');
	}

	// Submit form if no errors
	if (errorList.childElementCount === 0) {
		form.submit();
	}
});

function appendError(message) {
	const li = document.createElement('li');
	li.textContent = message;
	errorList.appendChild(li);
}

function isValidEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}
