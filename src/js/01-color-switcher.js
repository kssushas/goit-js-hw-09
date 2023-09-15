const selectors = {
  body: document.querySelector('body'),
  startrBtn: document.querySelector('[data-start]'),
  stoptrBtn: document.querySelector('[data-stop]'),
};
let intervalId = null;
let bool = true;
selectors.startrBtn.addEventListener('click', clickOnStart);
selectors.stoptrBtn.addEventListener('click', clickOnStop);

function clickOnStart() {
  if (bool === true) {
    selectors.body.style.backgroundColor = getRandomHexColor();
    intervalId = setInterval(() => {
      selectors.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    bool = false;
  }
}

function clickOnStop() {
  clearInterval(intervalId);
  bool = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



