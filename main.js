// - View an age in years, months, and days after submitting a valid date through the form
// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The date is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
// - **Bonus**: See the age numbers animate to their final number when the form is submitted

// [] Get all the dates(day, month and year.) and its wrong show a menssage error:

const day = document.getElementById("fday");
const month = document.getElementById("fmonth");
const year = document.getElementById("fyear");

function getData() {
  const day = document.getElementById("fday").value;
  const month = document.getElementById("fmonth").value;
  const year = document.getElementById("fyear").value;

  return { day, month, year };
}

function validadeDate() {
  if (day < 1 || day > 31 || month < 1 || month > 12 || ano < 1900) {
    alert("please, insert a valid date");
    return false;
  }

  return true;
}

validadeDate();

// https://chat.openai.com/share/4f350b80-2f6e-493e-8b85-611a85f1b04d
