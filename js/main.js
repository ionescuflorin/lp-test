var inputFname = document.getElementById("input-fname");
var inputLname = document.getElementById("input-lname");
var inputCompany = document.getElementById("input-company");
var inputEmail = document.getElementById("input-email");
var button = document.querySelector(".form__btn");
var valid = document.querySelector(".u-valid");
var invalid = document.querySelector(".u-invalid");
var regEx = /\S+@\S+\.\S+/;
var form = document.getElementById("form");

function validateField() {
  var textFields = document.getElementsByTagName("input");
  for (var i = 0; i < textFields.length; i++) {
    if (textFields[i].type !== "submit" && textFields[i].value == "") {
      textFields[i].style.borderColor='red';
    } else {
      textFields[i].style.backgroundColor = "transparent";
    }
  }
}

function emailNotValid() {
  if( regEx.test(inputEmail.value)) {
    inputEmail.style.borderColor = "#00FF00";
  } else {
    inputEmail.style.borderColor='red';
  }
}

function checkInput() {
  if (
    inputFname.value.trim() !== "" &&
    regEx.test(inputEmail.value) &&
    inputLname.value.trim() !== "" &&
    inputCompany.value.trim() !== ""
  ) {
    button.style.backgroundColor = "#00b5ef";
    button.disabled = false;
    
  } else {
   
    button.style.backgroundColor = "#5f5f5f";
    button.disabled = true;

  }
  validateField()
  emailNotValid()
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("From Submitted");
  inputFname.value = "";
  inputLname.value = "";
  inputCompany.value = "";
  inputEmail.value = "";
});
