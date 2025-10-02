document
  .getElementById("order-service-btn")
  .addEventListener("click", function () {
    document.getElementById("backdrop").classList.add("is-open");
  });

document
  .getElementById("close-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("backdrop").classList.remove("is-open");
  });

// Закриття модального вікна при клику на backdrop
document.getElementById("backdrop").addEventListener("click", function (event) {
  if (event.target === this) {
    document.getElementById("backdrop").classList.remove("is-open");
  }
});

document
  .getElementById("close-modal-sign-in")
  .addEventListener("click", function () {
    document.getElementById("modal-sign-in").classList.remove("is-open");
  });
