var svgElem = document.querySelector('.s2');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  svgElem.style.top = y + 'px';
  svgElem.style.left = x + 'px';
});
