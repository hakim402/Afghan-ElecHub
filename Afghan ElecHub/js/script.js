// Login Form Validation
function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
  } else {
    alert("Login Successful!");
  }
}

// Registration From Validation
function validateRegistrationForm() {
  var RegName = document.getElementById("RegName").value;
  var RegUserName = document.getElementById("RegUserName").value;
  var RegPhone = document.getElementById("RegPhone").value;
  var RegEmail = document.getElementById("RegEmail").value;
  var RegPassword = document.getElementById("RegPassword").value;

  if (
    RegName === "" ||
    RegUserName === "" ||
    RegPhone === "" ||
    RegEmail === "" ||
    RegPassword === ""
  ) {
    alert("Please fill all the feild.");
  } else {
    alert("Register Successful!");
  }
}

// Contact form Validation
function validateContactForm() {
  var contactName = document.getElementById("contactName").value;
  var contactEmail = document.getElementById("contactEmail").value;
  var contactPhone = document.getElementById("contactPhone").value;
  var message = document.getElementById("message").value;

  if (
    contactName === "" ||
    contactEmail === "" ||
    contactPhone == "" ||
    message === ""
  ) {
    alert("Please fill all the feild");
  } else {
    alert("Message successfully send");
  }
}
