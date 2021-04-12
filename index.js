const absoluteButton = document.querySelector("#absolute-button");
const stickyButton = document.getElementById("btn-sticky");
const invisiblePara = document.getElementsByClassName("foo-bar");

absoluteButton.addEventListener("click", () => {
  alert("You clicked absolute button!");
});

stickyButton.addEventListener("click", () => {
  console.log(invisiblePara);
  invisiblePara[0].style.display = "block";
});

fetch("http://localhost:3001/api")
  .then((response) => {
    //   var node = document.createElement("table"); // Create a <li> node
    //   var textnode = node.appendChild("tr");
    return response.json();
    //   document.getElementById("positioning").appendChild();
  })
  .then((data) => {
    console.log(data);
  });
