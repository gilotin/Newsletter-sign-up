const form = document.querySelector(".subscribe-card__form");
const clearButton = document.querySelector(".success-card__button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let email = formData.get("email");

    errorCheck(email);
});

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    const subscribeCard = document.querySelector(".subscribe-card");
    const successCard = document.querySelector(".success-card");
    const subscribeCardInput = document.querySelector(".subscribe-card__form-input");

    subscribeCard.classList.remove("hidden");
    successCard.classList.add("hidden");

    subscribeCardInput.value = "";
});

function errorCheck(email) {
    const subscribeCard = document.querySelector(".subscribe-card");
    const successCard = document.querySelector(".success-card");
    const successCardEmailPlaceholder = document.querySelector(".success-card__description--bold");
    const errorLabel = document.querySelector(".subscribe-card__form-error");
    const subscribeCardInput = document.querySelector(".subscribe-card__form-input");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailRegex)) {
        errorLabel.classList.remove("hidden");
        subscribeCardInput.classList.add("subscribe-card__form-input--error");
        subscribeCardInput.textContent = `${email}`;
    } else {
        subscribeCard.classList.add("hidden");
        successCard.classList.remove("hidden");

        errorLabel.classList.add("hidden");
        subscribeCardInput.classList.remove("subscribe-card__form-input--error");
        successCardEmailPlaceholder.textContent = `${email}`;
    }
}

// Code provided by ChatGPT for studying purposes only !!!
// NOTE: this code in refactored by ChatGPT, helping me to learn better abstraction and encapsulation and clean code!!!

// // Select frequently accessed elements once at the top

// const form = document.querySelector(".subscribe-card__form");
// const clearButton = document.querySelector(".success-card__button");
// const subscribeCard = document.querySelector(".subscribe-card");
// const successCard = document.querySelector(".success-card");
// const subscribeCardInput = document.querySelector(".subscribe-card__form-input");
// const errorLabel = document.querySelector(".subscribe-card__form-error");
// const successCardEmailPlaceholder = document.querySelector(".success-card__description--bold");

// // Event listener for form submission
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     handleFormSubmission(email);
// });

// // Event listener for clear button
// clearButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     resetForm();
// });

// // Function to handle form submission and validate email
// function handleFormSubmission(email) {
//     if (!isValidEmail(email)) {
//         showErrorState();
//     } else {
//         showSuccessState(email);
//     }
// }

// // Helper function to validate email format
// function isValidEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }

// // Function to handle error state
// function showErrorState() {
//     errorLabel.classList.remove("hidden");
//     subscribeCardInput.classList.add("subscribe-card__form-input--error");
// }

// // Function to handle success state
// function showSuccessState(email) {
//     subscribeCard.classList.add("hidden");
//     successCard.classList.remove("hidden");
//     errorLabel.classList.add("hidden");
//     subscribeCardInput.classList.remove("subscribe-card__form-input--error");
//     successCardEmailPlaceholder.textContent = email;
// }

// // Function to reset form to initial state
// function resetForm() {
//     subscribeCard.classList.remove("hidden");
//     successCard.classList.add("hidden");
//     subscribeCardInput.value = "";
//     errorLabel.classList.add("hidden");
//     subscribeCardInput.classList.remove("subscribe-card__form-input--error");
// }
