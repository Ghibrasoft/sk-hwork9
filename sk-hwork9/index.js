// toggle modal
const modalBtn = document.querySelector("#modalBtn");
const modal = document.querySelector("#modal");
const modalBgOverlay = document.querySelector(".modalBgOverlay");
document.addEventListener("click", (e) => {
  if (
    modal.style.display === "flex" ||
    (!modal.contains(e.target) && e.target !== modalBtn)
  ) {
    modal.style.display = "none";
    modalBgOverlay.style.display = "none";
  } else {
    modal.style.display = "flex";
    modalBgOverlay.style.display = "flex";
  }
});

// change body's bg
const changeBtn = document.querySelector("#changeBtn");
const colorInp = document.querySelector("#colorInp");
const validColors = ["red", "blue", "green", "black", "white"];
changeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validColors.includes(colorInp.value)) {
    document.body.style.backgroundColor = colorInp.value;
  } else {
    alert("Insert valid colors! (red, blue, green, black, white)");
  }
});

// average of inputed numbers
const averageInp = document.querySelector("#averageInp");
const averageBtn = document.querySelector("#averageBtn");
const averageResult = document.querySelector("#averageResult");

averageBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const inpValue = averageInp.value.split(":");
  let sum = 0;
  for (let num of inpValue) {
    sum += Number(num);
  }
  const average = sum / inpValue.length;
  averageResult.textContent = `Average: ${average}`;
});
