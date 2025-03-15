const pledges = [
  "Bike more",
  "Composting",
  "Ban plastic cups",
  "Go vegan",
  "Reduce food waste",
  "Grow our own produce",
  "Plant trees",
  "Start a garden",
  "Public transit",
  "Car pool",
  "Recycling",
  "Pick up trash",
  "Use less water",
  "Eat organic foods",
  "Save electricity",
];
const PledgeWords = pledges
  .toString()
  .split(",")
  .filter((pledgeWord) => pledgeWord.trim() !== ",");
const wordCloud = document.getElementById("wordCloud");
wordCloud.innerHTML = "";

PledgeWords.forEach((pledgeWord) => {
  const span = document.createElement("span");
  const size = Math.floor(Math.random() * 30) + 25;
  span.textContent = pledgeWord;
  span.className = "pledge__word";
  span.style.fontSize = `${size}px`;
  span.style.color = `hsl(${Math.random() * 360}, 100%, 40%)`;
  span.style.padding = `0 5px`;
  span.addEventListener("mouseover", () => {
    span.style.backgroundColor = span.style.color;
    span.style.border = `2px solid #3A426D`;
    span.style.color = "#fff";
    span.style.fontSize = `${size + 5}px`;
    span.style.transition = `color 0.5s; backgroundColor 0.5s; fontSize 0.5s`;
  });
  span.addEventListener("mouseleave", () => {
    span.style.color = span.style.backgroundColor;
    span.style.backgroundColor = "transparent";
    span.style.border = "none";
    span.style.fontSize = `${size}px`;
  });
  wordCloud.appendChild(span);
});

/* Water Usage Questions:
Enter Number - How many minutes do you typically spend in the shower?
Yes, No, or Sometimes - Do you turn off the water while you brush your teeth? (Yes/No)
Yes, No, or Sometimes - When washing dishes by hand, do you leave the water running? (Yes/No)
Enter Number - How many times do you run the dishwasher per week?
Enter Number - How often do you water your lawn or garden? (Every [blank] days)

Electricity Usage Questions:
Yes, No, or Sometimes - Do you turn off the lights when you leave a room? (Yes/No/Sometimes)
Yes, No, or Sometimes - Do you unplug electronics when they are not in use? (Yes/No/Sometimes)
Yes, No, or Sometimes - Do you use a ceiling fan instead of air conditioning when possible? (Yes/No/Sometimes)
Yes, No, or Sometimes - Do you charge your phone overnight? (Yes/No)
Yes, No, or Sometimes - Do you use a programmable thermostat to manage heating and cooling? (Yes/No/Not Sure)
*/
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
