document.addEventListener("DOMContentLoaded", () => {
  let boxes = document.querySelectorAll(".box");
  let newgame = document.querySelector("#newgame");
  let reset = document.querySelector("#reset");
  let msg = document.querySelector("#msg");
  let msgcontainer = document.querySelector(".msg-container");
  let playerX = true;

  let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const resetgame = () => {
    playerX = true;
    enableboxes();
    msgcontainer.classList.add("hide");
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (playerX) {
        box.innerText = "O";
        box.style.color = "blue";
        playerX = false;
      } else {
        box.innerText = "X";
        box.style.color = "red";
        playerX = true;
      }
      box.disabled = true;
      checkwinner();
    });
  });

  const showwinner = (winner) => {
    msg.innerText = `Congratulations ${winner} won this game.`;
    msgcontainer.classList.remove("hide");
  };

  const disabled = () => {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  };

  const enableboxes = () => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerText = "";
    });
  };

  const checkwinner = () => {
    for (let pattern of winpattern) {
      let posval1 = boxes[pattern[0]].innerText;
      let posval2 = boxes[pattern[1]].innerText;
      let posval3 = boxes[pattern[2]].innerText;
      if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
        if (posval1 === posval2 && posval2 === posval3) {
          showwinner(posval1);
          disabled();
          break;
        }
      }
    }
  };

  newgame.addEventListener("click", resetgame);
  reset.addEventListener("click", resetgame);
});
