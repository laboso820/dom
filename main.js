document.title = "dom manipulation";
const body = document.getElementById("hero");
const buttonEl = document.getElementById("btn");
const buttonEl2 = document.getElementById("btn2");
const buttonEl3 = document.getElementById("btn3");
// console.log("this from script")
// const headingEl=document.getElementById("heading")
// headingEl.innerHTML("document object model")
const heading = document.getElementById("heading");
// console.log(typeof document.getElementById("heading"))
document.querySelector("heading");
heading.innerHTML = "dom manipulation";
// body.innerHTML=" lorem ipsum nmnm"
buttonEl.addEventListener("click", function () {
  body.style.color = "red";
});
buttonEl2.addEventListener("click", function () {
  body.style.color = "green";
});
buttonEl3.addEventListener("click", function () {
  body.style.color = "blue";
});
