/*
Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
*/
(function (p) {
  var d = [];
  var o = "";
  var successCallback = "Your password is cool!";
  var errorCallback = "Your password is invalid!";
  if (p.length >= 6) {
    for (var i = 0; i < p.length; i++) {
      d[i] = parseInt(p[i]);
      if (isFinite(d[i])) {
        o = successCallback;
        break;
      } else {
        o = errorCallback;
      }
    }
  } else {
    o = errorCallback;
  }
  console.log(o);
})("JsGuru123");
