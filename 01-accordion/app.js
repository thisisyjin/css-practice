// Ref. rafaelavlucas (https://codepen.io/rafaelavlucas/pen/zyVXYV)

// variables

const accordionBtn = document.querySelectorAll(".accordion-title");
const texts = document.querySelectorAll(".text");
const icons = document.querySelectorAll(".icon");

console.log(accordionBtn, texts, icons);
// 🔺 accordionBtn, texts, icons는 nodelist 이다. (5개 요소 담은 리스트. forEach로 다뤄야함.)

// event listener

accordionBtn.forEach(el => {
  el.addEventListener("click", toogleAccordian);
});

// function

function toogleAccordian(el) {
  // 🔺 콜백에서의 el은 위에 forEach의 el과 다르다.
  // forEach에서 el은 HTML element를 의미하는데, 여기서는 event객체이다.

  const target = el.currentTarget;
  const targetIcon = el.currentTarget.children[0];
  const targetText = el.currentTarget.nextElementSibling;
  console.log(targetText);
  // 🔺 target, targetIcon, targetText는 currentTarget
  // 즉, 클릭 이벤트가 일어난 accordionBtn과 그 sibling, children

  if (targetText.classList.contains("show")) {
    targetText.classList.remove("show");
    targetIcon.classList.remove("anime");
    target.classList.remove("accordionTitleActive");
  } else {
    accordionBtn.forEach(el => {
      el.classList.remove("accordionTitleActive");
      texts.forEach(el => {
        el.classList.remove("show");
      });
      icons.forEach(el => {
        el.classList.remove("anime");
      });
    });
    targetText.classList.add("show");

    target.classList.add("accordionTitleActive");
    targetIcon.classList.add("anime");
  }
}
