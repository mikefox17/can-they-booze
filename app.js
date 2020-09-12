let button = document.querySelector("#submit");
let input = document.querySelector("#input");
let date = new Date().toJSON().slice(0, 10).replace(/-/g, "");
let formatDate = parseInt(date, 10);
console.log(formatDate);

button.addEventListener("click", function (e) {
  e.preventDefault();
  let inputDob = input.value;
  let dob = parseInt(inputDob, 10);
  console.log(dob);
  let age = Math.floor((formatDate - dob) / 10000);
  if (age >= 21) {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">YOU CAN SERVE THEM. THEY ARE <strong class="text-success">${age}</strong> YEARS OLD</h2></>`;
  } else {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">DO NOT SERVE THEM. THEY ARE <strong class="text-danger">${age}</strong> YEARS OLD</h2>`;
  }
  input.value = "";
});
