// SIGNUP JS CODE, DATA PRESICISTENCE KIND OF #1  //


function setCookie(name, value, days) {
  // Set the expiration date of the cookie
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  // Set the cookie
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  // Split the cookies string into an array of individual cookies
  const cookies = document.cookie.split(";");

  // Find the named cookie
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() == name) {
      return cookieValue;
    }
  }

  // Return null if the cookie does not exist
  return null;
}

function signUp() {
  let username = document.getElementById("nameUser").value;
  let password = ("passWord");
  // Check if a cookie with the username already exists
  if (getCookie(username)) {
    alert("Welcome Back, " + username + "!");
  } else {
    alert("Hello, " + username + "!");
  
    // Set a cookie with the username and password
    setCookie(username, password, 7);
  }
}