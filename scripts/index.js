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
  const size = Math.floor(Math.random() * 30) + 15;
  span.textContent = pledgeWord;
  span.className = "pledge__word";
  span.style.fontSize = `${size}px`;
  span.style.color = `hsl(${Math.random() * 360}, 100%, 40%)`;
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
