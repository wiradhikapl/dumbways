let barsIsOpen = false;
function barsopen() {
  let barsContainer = document.getElementById("bars-container");
  if (!barsIsOpen) {
    barsContainer.style.display = "flex";
    barsIsOpen = true;
  } else {
    barsContainer.style.display = "none";
    barsIsOpen = false;
  }
}
