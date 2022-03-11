// Div 사이즈 js로 조절하기

const outer = document.querySelector(".outer");
const innerGrp = document.querySelector(".inner-grp");
const inners = document.querySelectorAll(".inner");

let currentIndex = 0;
let currentTransition;

inners.forEach(inner => {
  inner.style.width = `${outer.clientWidth}px`;
  console.log(outer.clientWidth);
});

innerGrp.style.width = `${outer.clientWidth * inners.length}px`;

// Event Listener

let isSlide = false;
let slideStartX = 0;
let slideGab = 0;

const flipGab = 80;

const slideStart = clientX => {
  slideStartX = clientX;
  isSlide = true;

  currentTransition = window.getComputedStyle(innerGrp).transition;

  innerGrp.style.transition = "initial";
};

const slideMove = clientX => {
  if (isSlide) {
    slideGab = slideStartX - clientX;
    if (currentIndex >= inners.length - 1 && slideGab > 0) {
      slideGab = 0;
    }
    innerGrp.style.marginLeft = `-${
      outer.clientWidth * currentIndex + slideGab
    }px`;
  }
};

const slideEnd = () => {
  if (slideGab >= flipGab) {
    currentIndex++;
    currentIndex =
      currentIndex >= inners.length ? inners.length - 1 : currentIndex;
  } else if (slideGab <= -flipGab) {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
  }
  innerGrp.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  slideGab = 0;
  isSlide = false;
  innerGrp.style.transition = currentTransition;
};

// 데스크탑 전용

innerGrp.addEventListener("mousedown", e => {
  slideStart(e.clientX);
});
innerGrp.addEventListener("mousemove", e => {
  slideMove(e.clientX);
});
innerGrp.addEventListener("mouseup", e => {
  slideEnd();
});

// 터치 - 모바일 전용

innerGrp.addEventListener("touchstart", e => {
  slideStart(e.changedTouches[0].clientX);
});
innerGrp.addEventListener("touchmove", e => {
  slideMove(e.changedTouches[0].clientX);
});
innerGrp.addEventListener("touchend", e => {
  slideEnd();
});
