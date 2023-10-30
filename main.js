// Javascript to set the main JS code:

const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const dayResult = document.querySelector(".day-result");
const monthResult = document.querySelector(".month-result");
const yearResult = document.querySelector(".year-result");
const submitBtn = document.querySelector(".btn");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputRequiredError = "This field is required";
const inputDayError = "Must be a valid day";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be a valid year";
const canvas = document.querySelector(".can");

// function to check the day:

function CheckDayInput() {
  let value = inputDay.value;
  if (value == "") {
    dayError.innerHTML = inputRequiredError;
    return false;
  } else if (value < 1 || value > 31) {
    dayError.innerHTML = inputDayError;
    return false;
  } else {
    dayError.innerHTML = "";
    return true;
  }
}

// function to check the Month:

function CheckMonthInput() {
  let value = inputMonth.value;
  if (value == "") {
    monthError.innerHTML = inputRequiredError;
    return false;
  } else if (value < 1 || value > 12) {
    monthError.innerHTML = inputMonthError;
    return false;
  } else {
    monthError.innerHTML = "";
    return true;
  }
}

// function to check the Year:

function CheckYearInput() {
  let value = inputYear.value;
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  if (value == "") {
    yearError.innerHTML = inputRequiredError;
    return false;
  } else if (value > currentYear) {
    monthError.innerHTML = inputYearError;
    return false;
  } else {
    yearError.innerHTML = "";
    return true;
  }
}

//   function to calculate the Age:

function calculateAge(birthday) {
  let birthdate = new Date(birthday);
  let today = new Date();

  let days = today.getDate() - birthdate.getDate();
  let months = today.getFullYear() - birthdate.getMonth();
  let years = today.getFullYear() - birthdate.getFullYear();

  //   if the birthdate month and date are after the current month and day,
  // substract one year from the age

  if (months < 0 || (month == 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }
  dayResult.innerHTML = days;
  monthResult.innerHTML = months;
  yearResult.innerHTML = years;
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let day = CheckDayInput;
  let month = CheckMonthInput;
  let year = CheckYearInput;
  if (!day || !month || !year) return;
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  calculateAge(birthday);
  canvasanvas.style.display = "block";
  setTimeout(function () {
    canvasanvas.style.display = "none";
  }, 8000);
});
