//setting up variables to grab the date value for the click event
const button = document.querySelector("#submit");
const input = document.querySelector("#input");

//setting a variable to the current date, setting it to JSON, slicing the date to only contain Year, Month, Day, removing the special characters on the returned data
const date = new Date().toJSON().slice(0, 10).replace(/-/g, "");
//formating the date from JSON to numbers
const formatDate = parseInt(date, 10);
console.log(formatDate);

//click event function
button.addEventListener("click", function (e) {
  e.preventDefault();
  //setting a variable to the value from the form
  let date = input.value;

  //removes special characters from the date input and turns the data into an array
  let splitDate = date.split("-");

  //using the join array method to set the var as a string instead of an array
  let inputDob = splitDate.join("");

  //parsing the the string to a number
  let dob = parseInt(inputDob, 10);
  console.log(dob);

  //setting age to be the Formatted Date(current date) subtract the DOB. Dividing by 10000 so the returned value will be a 2 digit number. Rounding down just incase there is a decimal
  let age = Math.floor((formatDate - dob) / 10000);

  //setting the conditional that if the person is 21 or older they can drink
  if (age >= 21) {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">YOU CAN SERVE THEM. THEY ARE <strong class="text-success">${age}</strong> YEARS OLD</h2></>`;
  }
  //conditional if the person is younger than 21 then they can not drink
  else {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">DO NOT SERVE THEM. THEY ARE <strong class="text-danger">${age}</strong> YEARS OLD</h2>`;
  }
  //clearing the input date
  input.value = "";
});
