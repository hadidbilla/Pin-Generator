function generateNumber() {
  let randomNumber = parseInt(Math.random() * 10000);
  if (randomNumber <= 999) {
    generateNumber();
  } else {
    document.getElementById("random-input").value = randomNumber + "";
  }
}
function handelClickNumber(number) {
  let clickNumber = (document.getElementById("match-input").value +=
    number + "");
}
function matchTwoNumber() {
  let firstNumber = document.getElementById("random-input").value;
  let secondNumber = document.getElementById("match-input").value;
  if (firstNumber == "" && secondNumber == "") {
    document.getElementById("pls-write").style.display = "block";
    document.getElementById("random-input").value = "";
    document.getElementById("match-input").value = "";
  } else if (firstNumber == secondNumber) {
    document.getElementById("yes-match").style.display = "block";
    document.getElementById("random-input").value = "";
    document.getElementById("match-input").value = "";
  } else {
    document.getElementById("not-match").style.display = "block";
  }
}
