//Popup Pledge Window

//Pledge Button in the Nav
const pledgeButton = document.querySelector(".nav-button__pledge");

//Popup Modal - goal to have it show only on click of button
const pledgeModal = document.querySelector("#add-pledge-modal");

//Close Button in the Modal
const closeButton = document.querySelector(".modal__close-button");

//Event Listener on Click of pledgeButton
pledgeButton.addEventListener("click", () => {
  openModal();
});

//Open Modal Function
function openModal() {
  console.log("Is this correct?");
  pledgeModal.classList.add("modal_opened");
}

//Event Listener on Click of closeButton
closeButton.addEventListener("click", () => {
  closeModal();
});

//Close Modal Function
function closeModal() {
  console.log("Close function shows up?");
  pledgeModal.classList.remove("modal_opened");
}

// Conditional Visibility of Email Field
const yesEmail = document.getElementById("email-yes");
const noEmail = document.getElementById("email-no");
const emailInputElement = document.querySelector(".modal__form_email-input");

//Event Listener on Click of Yes in Email Reminder
yesEmail.addEventListener("change", () => {
  emailInputElement.style.display = "block";
});

//Event Listener on Click of No in Email Reminder
noEmail.addEventListener("change", () => {
  emailInputElement.style.display = "none";
});
