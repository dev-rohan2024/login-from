// select element and asing them to variable
let firstRow = document.querySelector(".row-1-1");
let secondRow = document.querySelector(".row-1-2");
let singInButton = document.querySelector(".row-1-1 button");
let singUpButton = document.querySelector(".row-1-2 input[type='submit']");
// singInButton evenetlistener
singInButton.addEventListener("click", (e) => {
  e.preventDefault();
  firstRow.classList.add("active");

  firstRow === firstRow.classList
    ? "active"
    : (secondRow.classList = "row-1-2 ");
});
// singUpButton evenetlistener
singUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  secondRow.classList.add("active");
  firstRow !== firstRow.classList ? "active" : (firstRow.classList = "active");
});
