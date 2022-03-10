const toggleBtn = document.querySelector(".toogle");
const menu = document.querySelector(".menus-grp");
const icons = document.querySelector(".icons-grp");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
