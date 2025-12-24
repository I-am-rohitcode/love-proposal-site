const moveRandom = document.getElementById("move-random");
const container = document.querySelector(".container");

function moveRandomEl(elm) {
  const containerRect = container.getBoundingClientRect();
  const elmRect = elm.getBoundingClientRect();

  const maxX = containerRect.width - elmRect.width;
  const maxY = containerRect.height - elmRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

// Desktop hover
moveRandom.addEventListener("mouseenter", () => {
  moveRandomEl(moveRandom);
});

// Mobile tap
moveRandom.addEventListener("touchstart", () => {
  moveRandomEl(moveRandom);
});
