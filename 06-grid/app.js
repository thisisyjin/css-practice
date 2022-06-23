// DOM
const navigation = document.querySelector('.navigation');

const $projects = document.querySelector('.projects');
const $project = [...document.querySelectorAll('.project')];

let cellSizes = $project.map((item) => item.getBoundingClientRect());

window.addEventListener('resize', (e) => {
  $projects.style.marginLeft = 0;
  $projects.style.marginTop = 0;
  cellSizes = $project.map((item) => item.getBoundingClientRect());
  //   console.log(cellSizes[3].x, cellSizes[3].y);
});

$project.forEach((item, index) => {
  const button = document.createElement('button');
  button.innerHTML = `Project ${index + 1}`;
  navigation.appendChild(button);
});

const changeCell = (index) => {
  const xWidth = cellSizes[3].x;
  const yHeight = cellSizes[3].y;
  console.log(xWidth, yHeight);
  console.log('change');
  if (index === 1) {
    console.log(2 + '변경');
    $projects.style.marginLeft = `-${xWidth}px`;
    $projects.style.marginTop = 0;
  } else if (index === 2) {
    console.log(3 + '변경');
    $projects.style.marginLeft = 0;
    $projects.style.marginTop = `-${yHeight}px`;
  } else if (index === 3) {
    console.log(4 + '변경');
    $projects.style.marginLeft = `-${xWidth}px`;
    $projects.style.marginTop = `-${yHeight}px`;
  } else if (index === 0) {
    $projects.style.marginLeft = 0;
    $projects.style.marginTop = 0;
  }
};

const buttons = navigation.querySelectorAll('button');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    changeCell(index);
  });
});
