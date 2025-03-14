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
