let button = document.querySelector("#submit");
let input = document.querySelector("#input");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let age = moment(input.value.toString(), "MMDDYYYY").fromNow();
  let formatAge = parseInt(age, 10);

  if (formatAge > 21) {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">YOU CAN SERVE THEM. THEY ARE <strong class="text-success">${
      formatAge - 1
    }</strong> YEARS OLD</h2></>`;
  } else {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">DO NOT SERVE THEM. THEY ARE <strong class="text-danger">${
      formatAge - 1
    }</strong> YEARS OLD</h2>`;
  }
  input.value = "";
});
