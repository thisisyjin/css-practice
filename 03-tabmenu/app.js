// variables

const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");

// ๐บ ๋ชจ๋  tabLinks(๋ฒํผ), tabcontent(div) - nodeList ํํ

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

// ๐บ tabLinks ๊ฐ ์์ ํด๋ฆญ์ ์ด๋ฒคํธ๋ฆฌ์ค๋

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const country = btnTarget.dataset.country;

  // ๐บ btnTarget = ๋๋ฅธ ๋ฒํผ / country = ํ์ฌ ๋๋ฅธ ๋ฒํผ์ dataset (data-country์์ฑ)

  // 1. ์ฐ์ , ๋ชจ๋  active ๋ค ์ ๊ฑฐํจ
  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  // 2. div๋ถ๋ถ ์ฐพ์์(#London) active ์์ฑ ์ถ๊ฐ & ํ์ฌ ํ๊ฒ(=๋ฒํผ)์๋ active ์ถ๊ฐ
  document.querySelector("#" + country).classList.add("active");
  //  ๐บ ์๋ div๋ถ๋ถ. ์ฆ, <div id="London" class="tabcontent"> ์ active ์ถ๊ฐ
  btnTarget.classList.add("active");
}
