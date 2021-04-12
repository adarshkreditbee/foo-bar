const absoluteButton = document.querySelector("#absolute-button");
const stickyButton = document.getElementById("btn-sticky");
const invisiblePara = document.getElementsByClassName("foo-bar");

absoluteButton.addEventListener("click", () => {
  alert("You clicked absolute button!");
});

stickyButton.addEventListener("click", () => {
    console.log(invisiblePara)
    invisiblePara[0].style.display = "block"
});
