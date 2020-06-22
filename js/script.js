var searchButton = document.querySelector(".booking__btn");
var submitButton = document.querySelector(".booking-form__btn")
var form = document.querySelector(".booking-form");
var formInputIn = form.querySelector(".form__input-in");
var forminputOut = form.querySelector(".form__input-out")

var isStorageSupport = true;
var storage = "";
try {
  storageIn = localStorage.getItem("date_in");
  storageOut = localStorage.getItem("date_out");
} catch(err) {
  isStorageSupport = false;
}

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("booking-form--hide");
  form.classList.remove("booking-form--error");

  if (storageIn) {
    formInputIn.value = storageIn;
    forminputOut.focus();
  } else {
    formInputIn.focus();
  }
})

form.addEventListener("submit", function(evt) {
  if (!formInputIn.value || !forminputOut.value) {
    evt.preventDefault();
    form.classList.remove("booking-form--error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("booking-form--error");
  } else {
    localStorage.setItem("date-in", formInputIn.value);
    localStorage.setItem("date-out", forminputOut.value);
  }
})

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(!form.classList.contains("booking-form--hide")) {
      evt.preventDefault();
      form.classList.add("booking-form--hide");
      form.classList.remove("booking-form--error");
    }
  }
})
