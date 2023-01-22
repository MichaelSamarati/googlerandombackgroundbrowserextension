run();

function run() {
  const mainElement = document.getElementsByClassName("L3eUgb")[0];
  const newDiv = document.createElement("div");
  newDiv.classList.add("random-background-image-wrapper");
  newDiv.classList.add("no-select");
  newDiv.innerHTML =
    "<div class='random-background-image random-background-image-blur'></div>" + //random-background-image-blur is used in blur chrome extension
    "<div class='random-background-image random-background-image-normal'></div>"; //random-background-image-normal is used in blur chrome extension
  mainElement.appendChild(newDiv);
}
