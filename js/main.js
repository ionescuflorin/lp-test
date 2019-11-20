let inputFname = document.getElementById("input-fname");
let inputLname = document.getElementById("input-lname");
let inputCompany = document.getElementById("input-company");
let inputEmail = document.getElementById("input-email");
let button = document.querySelector(".form__btn");
let regEx = /\S+@\S+\.\S+/;
let form = document.getElementById("form");


const validateField = () => {
  let textFields = document.getElementsByTagName("input");
  for (let i = 0; i < textFields.length; i++) {
    if (textFields[i].type !== "submit" && textFields[i].value == "") {
      textFields[i].style.borderColor='red';
      
    } else if (!regEx.test(inputEmail.value)) {
      inputEmail.style.borderColor='red';
    }
    
    else {
      textFields[i].style.borderColor = "#00FF00";
    }
  }
}


const validateFieldOut = () => {
  let textFields = document.getElementsByTagName("input");
  for (let i = 0; i < textFields.length; i++) {
    textFields[i].style.borderColor='#ccc';
  }
}

// Enable Register button if all fields are filled
const checkInput = () => {
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

}

// Clear fileds after submitting
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("From Submitted");
  inputFname.value = "";
  inputLname.value = "";
  inputCompany.value = "";
  inputEmail.value = "";
});



