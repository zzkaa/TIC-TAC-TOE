let activePlayer = 0;

const fields = document.querySelectorAll(".field");

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = function (player) {
  return (
    winning.find(function (positions) {
      for (const position of positions) {
        if (
          !document
            .getElementById(`${position}`)
            .classList.contains(`${player}img`)
        ) {
          return false;
        }
      }
      return true;
    }) !== undefined
  );
};

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function () {
    if (
      fields[i].classList.contains("oimg") ||
      fields[i].classList.contains("ximg")
    ) {
    } else {
      if (activePlayer === 0) {
        fields[i].classList.add("oimg");
        if (checkWinner("o")) {
          document.querySelector(".alert").textContent = "VICTORY!";
          document.querySelector(".board").classList.add("hidden");
          document.querySelector(".trophy").classList.remove("hidden");
        } else {
          activePlayer = 1;
        }
      } else if (activePlayer === 1) {
        fields[i].classList.add("ximg");
        if (checkWinner("x")) {
          document.querySelector(".alert").textContent = "VICTORY!";
          document.querySelector(".board").classList.add("hidden");
          document.querySelector(".trophy").classList.remove("hidden");
        }

        activePlayer = 0;
      }
    }
  });
}
document.querySelector(".btn").addEventListener("click", function () {
  activePlayer = 0;
  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.remove("oimg", "ximg");
  }
  document.querySelector(".alert").textContent = " ";
  document.querySelector(".board").classList.remove("hidden");
  document.querySelector(".trophy").classList.add("hidden");
});
