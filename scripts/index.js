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

//Popup Pledge Window

//Pledge Button in the Nav
const pledgeButton = document.querySelector(".nav-button__pledge");

//Popup Modal - goal to have it show only on click of button
const pledgeModal = document.querySelector("#add-pledge-modal");

//Close Button in the Modal
const closeButtons = document.querySelectorAll(".modal__close-button");

//Event Listener on Click of pledgeButton
pledgeButton.addEventListener("click", () => {
  openModal(pledgeModal);
});

//Open Modal Function
//Edited to open for both modals. - Roman
function openModal(modal) {
  console.log("Is this correct?");
  modal.classList.add("modal_opened");
}

//Event Listener on Click of closeButtons
//Edited to close for both modal close buttons. - Roman
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

//Close Modal Function
function closeModal(modal) {
  console.log("Close function shows up?");
  modal.classList.remove("modal_opened");
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

/* ========================================= Energy Saver Quiz ========================================= */
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

const radioBtnQuestions = [
  // {
  //   name: "shower-minutes",
  //   energyType: "gallons",
  // },
  {
    name: "brush-teeth",
    choice: ["yes", "sometimes", "no"],
    energyType: "gallons",
  },
  {
    name: "hand-wash",
    choice: ["yes", "sometimes", "no"],
    energyType: "gallons",
  },
  // {
  //   name: "dishwasher-cycles",
  //   energyType: "gallons",
  // },
  // {
  //   name: "lawn-watering",
  //   energyType: "gallons",
  // },
  {
    name: "lights-off",
    choice: ["yes", "sometimes", "no"],
    energyType: "watts",
  },
  {
    name: "unplug-electronics",
    choice: ["yes", "sometimes", "no"],
    energyType: "watts",
  },
  {
    name: "ceiling-fan",
    choice: ["yes", "sometimes", "no"],
    energyType: "watts",
  },
  {
    name: "charge-phone",
    choice: ["yes", "sometimes", "no"],
    energyType: "watts",
  },
  {
    name: "thermostat",
    choice: ["yes", "sometimes", "no"],
    energyType: "watts",
  },
];

const quiz = document.querySelector(".quiz__Questions");
const numAnswers = quiz.querySelectorAll(".quiz__Question_number_Answer");
const radioBtns = quiz.querySelectorAll(".quiz__radio_buttons");
const choiceAnswers = quiz.querySelectorAll(".quiz__Question_choice_Answer");
let userGallons = 0;
let userWatts = 0;

function calculateNumAnswers(event) {
  userGallons = 0;
  userWatts = 0;
  event.preventDefault();
  numAnswers.forEach((numAnswers) => {
    if (numAnswers.id == "shower-minutes") {
      userGallons += Math.round(10 - ((numAnswers.value - 5) / 15) * 10);
      // console.log(`${numAnswers.id} added to userGallons: ${userGallons}`);
    } else if (numAnswers.id == "dishwasher-cycles") {
      userGallons += 7 - Number(numAnswers.value) + 3;
      // console.log(`${numAnswers.id} added to userGallons: ${userGallons}`);
    } else if (numAnswers.id == "lawn-watering") {
      //10 gallons for 10 minutes
      userGallons += 7 - Number(numAnswers.value) + 3;
      // console.log(`${numAnswers.id} added to userGallons: ${userGallons}`);
    }
  });
  // console.log(userGallons);
  // return userGallons;
}

function calculateChoiceAnswers() {
  choiceAnswers.forEach((element) => {
    const elementName = element.name;
    // console.log(element);
    // console.log(element.checked);
    // console.log(element.name);

    // loop through radioBtnQuestions to compare the name within it to the element.name
    for (let i = 0; i < radioBtnQuestions.length; i++) {
      if (radioBtnQuestions[i].name === elementName && element.checked) {
        // check which energy type is used for the element, and update the appropriate energy variable
        // console.log(`radioBtn Name is ${radioBtnQuestions[i].name}`);
        if (radioBtnQuestions[i].energyType === "gallons") {
          // console.log(`Value to add to Gallons: ${Number(element.value)}`);
          userGallons += Number(element.value);
        } else if (radioBtnQuestions[i].energyType === "watts") {
          // console.log(`Value to add to Watts: ${Number(element.value)}`);
          userWatts += Number(element.value);
        }
        break;
      }
    }
  });
  // console.log(`userGallons: ${userGallons}`);
  // console.log(`userWatts: ${userWatts}`);
}

function userScore() {
  const archetypeOne = "Earth's Best Ally";
  const archetypeTwo = "Tree Hugger ";
  const archetypeThree = "Sustainable Striver";
  const archetypeFour = "Resource Reckless";
  const userScoreNum = userGallons + userWatts;
  console.log(userScoreNum);
  switch (true) {
    case userScoreNum >= 0 && userScoreNum <= 25:
      console.log(archetypeFour);
      break;
    case userScoreNum >= 26 && userScoreNum <= 50:
      console.log(archetypeThree);
      break;
    case userScoreNum >= 51 && userScoreNum <= 75:
      console.log(archetypeTwo);
      break;
    case userScoreNum >= 76 && userScoreNum <= 100:
      console.log(archetypeOne);
      break;
    default:
      console.log(
        `Hmmm... something is wrong here. Please check the quiz and ensure you answered all questions.`
      );
  }
}

quiz.addEventListener("submit", (data) => {
  calculateNumAnswers(data);
  calculateChoiceAnswers(data);
  userScore(data);
  openModal(quizResultsModal);
});

/* TO DO
-- DONE Set up SUBMIT BUTTON
-- DONE Create formula for the numerical answer questions.
-- DONE Create formula for the radio button questions.
-- UNSURE Can all of the usage formulas be used in one function?
-- DONE When Submit button is submitted, ensure execution of all usage formulas.
-- Create modal to project % score to user after submission.
*/

/* ========================================= Quiz Results Modal ========================================= */
const quizResultsModal = document.querySelector("#quiz-results-modal");
