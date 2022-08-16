let button = document.querySelector(".ripple");

button.addEventListener("click", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  let btnTop = e.target.offsetTop;
  let btnLeft = e.target.offsetLeft;

  let xInside = x - btnLeft;
  let yInside = y - btnTop;

  let span = document.createElement("span");
  span.classList.add("circle");

  span.style.top = yInside + "px";
  span.style.left = xInside + "px";

  button.append(span);

  setTimeout(function () {
    span.remove();
  }, 1000);
});
