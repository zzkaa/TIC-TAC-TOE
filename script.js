let activePlayer = 0;

const fields = document.querySelectorAll(".field");

function checkWinnerO() {
  if (
    document.getElementById("0").classList.contains("oimg") &&
    document.getElementById("1").classList.contains("oimg") &&
    document.getElementById("2").classList.contains("oimg")
  ) {
    return true;
  } else if (
    document.getElementById("3").classList.contains("oimg") &&
    document.getElementById("4").classList.contains("oimg") &&
    document.getElementById("5").classList.contains("oimg")
  ) {
    return true;
  } else if (
    document.getElementById("6").classList.contains("oimg") &&
    document.getElementById("7").classList.contains("oimg") &&
    document.getElementById("8").classList.contains("oimg")
  )
    return true;
  else if (
    document.getElementById("0").classList.contains("oimg") &&
    document.getElementById("3").classList.contains("oimg") &&
    document.getElementById("6").classList.contains("oimg")
  )
    return true;
  else if (
    document.getElementById("1").classList.contains("oimg") &&
    document.getElementById("4").classList.contains("oimg") &&
    document.getElementById("7").classList.contains("oimg")
  )
    return true;
  else if (
    document.getElementById("2").classList.contains("oimg") &&
    document.getElementById("5").classList.contains("oimg") &&
    document.getElementById("8").classList.contains("oimg")
  )
    return true;
  else if (
    document.getElementById("0").classList.contains("oimg") &&
    document.getElementById("4").classList.contains("oimg") &&
    document.getElementById("8").classList.contains("oimg")
  )
    return true;
  else if (
    document.getElementById("2").classList.contains("oimg") &&
    document.getElementById("4").classList.contains("oimg") &&
    document.getElementById("6").classList.contains("oimg")
  )
    return true;
}

function checkWinnerX() {
  if (
    document.getElementById("0").classList.contains("ximg") &&
    document.getElementById("1").classList.contains("ximg") &&
    document.getElementById("2").classList.contains("ximg")
  ) {
    return true;
  } else if (
    document.getElementById("3").classList.contains("ximg") &&
    document.getElementById("4").classList.contains("ximg") &&
    document.getElementById("5").classList.contains("ximg")
  ) {
    return true;
  } else if (
    document.getElementById("6").classList.contains("ximg") &&
    document.getElementById("7").classList.contains("ximg") &&
    document.getElementById("8").classList.contains("ximg")
  )
    return true;
  else if (
    document.getElementById("0").classList.contains("ximg") &&
    document.getElementById("3").classList.contains("ximg") &&
    document.getElementById("6").classList.contains("ximg")
  )
    return true;
  else if (
    document.getElementById("1").classList.contains("ximg") &&
    document.getElementById("4").classList.contains("ximg") &&
    document.getElementById("7").classList.contains("ximg")
  )
    return true;
  else if (
    document.getElementById("2").classList.contains("ximg") &&
    document.getElementById("5").classList.contains("ximg") &&
    document.getElementById("8").classList.contains("ximg")
  )
    return true;
  else if (
    document.getElementById("0").classList.contains("ximg") &&
    document.getElementById("4").classList.contains("ximg") &&
    document.getElementById("8").classList.contains("ximg")
  )
    return true;
  else if (
    document.getElementById("2").classList.contains("ximg") &&
    document.getElementById("4").classList.contains("ximg") &&
    document.getElementById("6").classList.contains("ximg")
  )
    return true;
}

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function () {
    if (
      fields[i].classList.contains("oimg") ||
      fields[i].classList.contains("ximg")
    ) {
    } else {
      if (activePlayer === 0) {
        fields[i].classList.add("oimg");
        if (checkWinnerO()) {
          document.querySelector(".alert").textContent = "VICTORY!";
          document.querySelector(".board").classList.add("hidden");
          document.querySelector(".trophy").classList.remove("hidden");
        } else {
          activePlayer = 1;
        }
      } else if (activePlayer === 1) {
        fields[i].classList.add("ximg");
        if (checkWinnerX()) {
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
