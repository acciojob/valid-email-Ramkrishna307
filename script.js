function validEmail(str) {
  //your JS code here.
  // Define a regular expression pattern for a valid email address
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the input string matches the email pattern
  return pattern.test(str.trim());

}

// Do not change the code below.
const str = prompt("Enter an email address.")
alert(validEmail(str));
