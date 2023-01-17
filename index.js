const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
  updateTime();
}, 1000);
function updateTime() {
  let now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  hdeg = (h / 12) * 360;
  mdeg = (m / 60) * 360;
  sdeg = (s / 60) * 360;
  console.log(hdeg, mdeg, sdeg);

  hours.style.transform = `rotate(${hdeg}deg)`;
  minutes.style.transform = `rotate(${mdeg}deg)`;
  seconds.style.transform = `rotate(${sdeg}deg)`;
}

updateTime();
