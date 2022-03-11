// variables

const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");

// 🔺 모든 tabLinks(버튼), tabcontent(div) - nodeList 형태

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

// 🔺 tabLinks 각 요소 클릭시 이벤트리스너

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const country = btnTarget.dataset.country;

  // 🔺 btnTarget = 누른 버튼 / country = 현재 누른 버튼의 dataset (data-country속성)

  // 1. 우선, 모든 active 다 제거함
  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  // 2. div부분 찾아서(#London) active 속성 추가 & 현재 타겟(=버튼)에도 active 추가
  document.querySelector("#" + country).classList.add("active");
  //  🔺 아래 div부분. 즉, <div id="London" class="tabcontent"> 에 active 추가
  btnTarget.classList.add("active");
}
