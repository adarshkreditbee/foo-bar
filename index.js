const absoluteButton = document.querySelector("#absolute-button");
const stickyButton = document.getElementById("btn-sticky");
const invisiblePara = document.getElementsByClassName("foo-bar");

absoluteButton.addEventListener("click", () => {
  alert("You clicked absolute button!");
});

stickyButton.addEventListener("click", () => {
  console.log(invisiblePara);
  invisiblePara[0].style.display = "block";
  getDataFromApi();
});

const getDataFromApi = async () => {
  return fetch("http://localhost:3001/api")
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
      tableCreate(jsonData);
      return jsonData;
    });
};

function tableCreate(jsonData) {
  // var body = document.body,
  var body = document.getElementById("positioning"),
    tbl = document.createElement("table");
  // tbl.style.width = "100px";
  // tbl.style.border = "1px solid black";
  for (const [key, values] of Object.entries(jsonData)) {
    console.log(key);
    var tr = tbl.insertRow();

    const th = document.createElement("th");
    tr.appendChild(th) 
    th.appendChild(document.createTextNode(key));

    values.map((value) => {
      var td = tr.insertCell();
      td.appendChild(document.createTextNode(value));
      td.style.border = "1px solid black";
      td.style.padding = "5px"
    })
  }

  // for (var i = 0; i < 3; i++) {
  //   var tr = tbl.insertRow();
  //   for (var j = 0; j < 2; j++) {
  //     if (i == 2 && j == 1) {
  //       break;
  //     } else {
  //       var td = tr.insertCell();
  //       td.appendChild(document.createTextNode(value));
  //       var value;
  //       td.style.border = "1px solid black";
  //       if (i == 1 && j == 1) {
  //         td.setAttribute("rowSpan", "2");
  //       }
  //     }
  //   }
  // }
  body.appendChild(tbl);
}
