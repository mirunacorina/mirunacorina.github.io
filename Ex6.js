function checkCookieHasASpecificValue() {
  if (document.cookie.split(";").some((item) => item.includes("favorite_task=collect Data"))) {
    const output = document.getElementById("a-specific-value-of-the-cookie");
    output.textContent = '> The cookie "favorite_task" has a value of "collect Data"';
  }
}

function clearASpecificValueOfTheCookie() {
  const output = document.getElementById("a-specific-value-of-the-cookie");
  output.textContent = "";
}
