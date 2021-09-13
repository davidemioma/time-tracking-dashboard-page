"use strict";

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const time1 = (document.querySelector(".time1").textContent = 32);
const time2 = (document.querySelector(".time2").textContent = 10);
const time3 = (document.querySelector(".time3").textContent = 4);
const time4 = (document.querySelector(".time4").textContent = 4);
const time5 = (document.querySelector(".time5").textContent = 5);
const time6 = (document.querySelector(".time6").textContent = 2);

const lastTime1 = (document.querySelector(".last_week1").textContent = 36);
const lastTime2 = (document.querySelector(".last_week2").textContent = 8);
const lastTime3 = (document.querySelector(".last_week3").textContent = 5);
const lastTime4 = (document.querySelector(".last_week4").textContent = 5);
const lastTime5 = (document.querySelector(".last_week5").textContent = 10);
const lastTime6 = (document.querySelector(".last_week6").textContent = 2);

daily.addEventListener("click", function () {
  daily.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");
  document.querySelector(".time1").textContent = Math.round(time1 / 7);
  document.querySelector(".time2").textContent = Math.round(time2 / 7);
  document.querySelector(".time3").textContent = Math.round(time3 / 7);
  document.querySelector(".time4").textContent = Math.round(time4 / 7);
  document.querySelector(".time5").textContent = Math.round(time5 / 7);
  document.querySelector(".time6").textContent = Math.round(time6 / 7);
  document.querySelector(".last_week1").textContent = Math.round(lastTime1 / 7);
  document.querySelector(".last_week2").textContent = Math.round(lastTime2 / 7);
  document.querySelector(".last_week3").textContent = Math.round(lastTime3 / 7);
  document.querySelector(".last_week4").textContent = Math.round(lastTime4 / 7);
  document.querySelector(".last_week5").textContent = Math.round(lastTime5 / 7);
  document.querySelector(".last_week6").textContent = Math.round(lastTime6 / 7);
});

weekly.addEventListener("click", function () {
  daily.classList.remove("active");
  weekly.classList.add("active");
  monthly.classList.remove("active");
  document.querySelector(".time1").textContent = time1;
  document.querySelector(".time2").textContent = time2;
  document.querySelector(".time3").textContent = time3;
  document.querySelector(".time4").textContent = time4;
  document.querySelector(".time5").textContent = time5;
  document.querySelector(".time6").textContent = time6;
  document.querySelector(".last_week1").textContent = lastTime1;
  document.querySelector(".last_week2").textContent = lastTime2;
  document.querySelector(".last_week3").textContent = lastTime3;
  document.querySelector(".last_week4").textContent = lastTime4;
  document.querySelector(".last_week5").textContent = lastTime5;
  document.querySelector(".last_week6").textContent = lastTime6;
});

monthly.addEventListener("click", function () {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.add("active");
  document.querySelector(".time1").textContent = time1 * 4;
  document.querySelector(".time2").textContent = time2 * 4;
  document.querySelector(".time3").textContent = time3 * 4;
  document.querySelector(".time4").textContent = time4 * 4;
  document.querySelector(".time5").textContent = time5 * 4;
  document.querySelector(".time6").textContent = time6 * 4;
  document.querySelector(".last_week1").textContent = lastTime1 * 4;
  document.querySelector(".last_week2").textContent = lastTime2 * 4;
  document.querySelector(".last_week3").textContent = lastTime3 * 4;
  document.querySelector(".last_week4").textContent = lastTime4 * 4;
  document.querySelector(".last_week5").textContent = lastTime5 * 4;
  document.querySelector(".last_week6").textContent = lastTime6 * 4;
});
