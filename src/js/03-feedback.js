import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
console.log(form);
const message = document.querySelector(".feedback-form textarea");
console.log(message);
const email = document.querySelector(".feedback-form input");
console.log(email);
const FEEDBACK_FORM_KEY = "feedback-form-state";


let formFeedback = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify({ email: email.value, message: message.value }));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    event.currentTarget.reset();
}

try {
  formFeedback = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
  if (formFeedback !== null) {
    email.value = formFeedback.email;
    message.value = formFeedback.message;
  }
}catch (error) {
  console.log(error);
}