//setting up variables to grab values for the click event
const button = document.querySelector("#submit");
const inputMonth = document.querySelector("#inputMonth");
const inputDay = document.querySelector("#inputDay");
const inputYear = document.querySelector("#inputYear");
//setting a variable to the current date, setting it to JSON, slicing the date to only contain Year, Month, Date, removing the special characters on the returned data
const date = new Date().toJSON().slice(0, 10).replace(/-/g, "");
//formating the date from JSON to numbers
const formatDate = parseInt(date, 10);
console.log(formatDate);

//click event function
button.addEventListener("click", function (e) {
  e.preventDefault();
  //setting variables to the values from the form
  let day = inputDay.value;
  let month = inputMonth.value;
  let year = inputYear.value;
  //setting all variables into an array
  let inputDate = [year, month, day];
  //using the join array method to set the var as a a formated string YYYYMMDD
  let inputDob = inputDate.join("");
  console.log(inputDob);
  //parsing the the string of YYYYMMDD to a number
  let dob = parseInt(inputDob, 10);
  console.log(dob);
  //setting age to be the Formatted Date(current date) minus the DOB. Dividing by 10000 so the returned value will be a 2 digit number. Rounding down just incase there is a decimal
  let age = Math.floor((formatDate - dob) / 10000);
  //setting the conditional that is the person is 21 or older they can drink
  if (age >= 21) {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">YOU CAN SERVE THEM. THEY ARE <strong class="text-success">${age}</strong> YEARS OLD</h2></>`;
  }
  //conditional if they are younger than 21 then they can not drink
  else {
    document.querySelector(
      ".display"
    ).innerHTML = `<h2 class="text-center">DO NOT SERVE THEM. THEY ARE <strong class="text-danger">${age}</strong> YEARS OLD</h2>`;
  }
  //clearing the input form
  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});
