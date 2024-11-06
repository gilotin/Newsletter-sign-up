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
        successCardEmailPlaceholder.textContent = `${email}`;
    }
}
