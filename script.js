run();

function run() {
  const mainElement = document.getElementsByClassName("L3eUgb")[0];
  const randomBackgroundImageWrapper = document.createElement("div");
  randomBackgroundImageWrapper.classList.add("random-background-image-wrapper");
  randomBackgroundImageWrapper.classList.add("no-select");
  randomBackgroundImageWrapper.innerHTML =
    "<div class='random-background-image'></div>";
  mainElement.appendChild(randomBackgroundImageWrapper);
}
