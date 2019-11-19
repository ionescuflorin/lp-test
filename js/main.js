function ValidateEmail(inputText, e) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("You have entered a valid email address!"); //The pop up alert for a valid email address
    return true;
  } else {
    alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
    return e.preventDefault();
  }
}
