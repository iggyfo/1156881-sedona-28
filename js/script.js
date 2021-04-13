const searchButton = document.querySelector(".booking__btn");
const form = document.querySelector(".booking-form");
const formInputIn = form.querySelector(".form__input-in");
const formInputOut = form.querySelector(".form__input-out")

let isStorageSupport = true;
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
    formInputOut.focus();
  } else {
    formInputIn.focus();
  }
})

form.addEventListener("submit", function(evt) {
  if (!formInputIn.value || !formInputOut.value) {
    evt.preventDefault();
    form.classList.remove("booking-form--error");
    form.classList.add("booking-form--error");
  } else {
    localStorage.setItem("date-in", formInputIn.value);
    localStorage.setItem("date-out", formInputOut.value);
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
