const selectors = {
  body: document.querySelector('body'),
  startrBtn: document.querySelector('[data-start]'),
  stoptrBtn: document.querySelector('[data-stop]'),
};
let intervalId = null;
selectors.startrBtn.addEventListener('click', clickOnStart);
selectors.stoptrBtn.addEventListener('click', clickOnStop);

function clickOnStart() {
  selectors.body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    selectors.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  selectors.startrBtn.setAttribute('disabled', true);
}

function clickOnStop() {
  clearInterval(intervalId);
  selectors.startrBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
