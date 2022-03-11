// Div 사이즈 js로 조절하기

const outer = document.querySelector(".outer");
const innerGrp = document.querySelector(".inner-grp");
const inners = document.querySelectorAll(".inner");

let currentIndex = 0;

inners.forEach(inner => {
  inner.style.width = `${outer.clientWidth}px`;
  console.log(outer.clientWidth);
});

innerGrp.style.width = `${outer.clientWidth * inners.length}px`;

// Event Listener

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex;
  innerGrp.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= inners.length ? inners.length - 1 : currentIndex;
  innerGrp.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});
