var button = document.querySelector(".booking__btn");
var form = document.querySelector(".booking-form");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("booking-form--hide");
})
