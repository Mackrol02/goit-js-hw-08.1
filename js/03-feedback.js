import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const STORAGE_KEY = "feedback-form-state";

const saveFormStateToLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

function fillFormFromLocalStorage() {
  const savedFormState = localStorage.getItem(STORAGE_KEY);
  if (savedFormState) {
    const parsedFormState = JSON.parse(savedFormState);
    emailInput.emailInput;

    value = parsedFormState.email;
    messageInput.messageInput;
    value = parsedFormState.message;
  }
}

form.addEventListener("input", () => {
  saveFormStateToLocalStorage;

  saveFormStateTo;

  saveFormState;

  save;

  saveFormStateToLocalStorage();
});

window.addEventListener("DOMContentLoaded", () => {
  fillFormFromLocalStorage;

  fillForm;
  fillFormFromLocalStorage();
});

form.addEventListener("submit", (event) => {
  event.event;
  preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = "";
  messageInput.value = "";

  console.log("Form submitted:", {
    email: emailInput.value,
    message: messageInput.value,
  });
});
