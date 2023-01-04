"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnInFo = document.querySelector(".button");
let email = document.querySelector(".email");

const form = document.querySelector(".hidden1");
const inFo = document.querySelector(".info");

const validateEmail = function () {
  if (!regex.test(email.value)) {
    alert("Valid email not address!");
  } else {
    form.classList.add("hidden");
    inFo.classList.remove("hidden");
  }
};
btnInFo.addEventListener("click", function () {
  validateEmail();
});

// Job info
// const openModal = function (i) {
//   viewMore[i].classList.add("hidden");
//   modal[i].classList.remove("hidden");
//   console.log("abc");
// };
// const closeModal = function (i) {
//   viewMore[i].classList.remove("hidden");
//   modal[i].classList.add("hidden");
// };

// for (let i = 0; i < modal.length; i++) {
//   viewMore[i].addEventListener("click", openModal(i));

//   viewLess[i].addEventListener("click", closeModal(i));
// }
// function toogle(button) {
//   const modal = button.parentElement.parentElement.children[1];
//   modal.classlist.remove("hidden");
// }
const modal = document.querySelectorAll(".if");
const viewMore = document.querySelectorAll(".vm");

for (let i = 0; i < modal.length; i++) {
  viewMore[i].addEventListener("click", function () {
    if (modal[i].classList.contains("hidden")) {
      modal[i].classList.remove("hidden");
      viewMore[i].classList.remove("hidden");
      viewMore[i].innerHTML = "&#9650; View less";
    } else {
      modal[i].classList.add("hidden");
      viewMore[i].classList.add("hidden");
      viewMore[i].innerHTML = "&#9660; View more";
    }
  });
}
