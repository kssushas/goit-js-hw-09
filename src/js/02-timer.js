import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let chossenTime = null;

startBtn.addEventListener('click', clickOnStartBtn);

startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const timeNow = new Date().getTime();
    chossenTime = new Date(selectedDates[0]).getTime();

    if (timeNow > chossenTime) {
      startBtn.setAttribute('disabled', true);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(input, options);

function clickOnStartBtn() {
  let id = setInterval(() => {
    let differenceTimes = chossenTime - new Date().getTime();
    let {
      days: day,
      hours: hour,
      minutes: min,
      seconds: sec,
    } = convertMs(differenceTimes);

    if (differenceTimes <= 0) {
      clearInterval(id);
      return;
    }

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
    
  }, 1000);
}



function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}




