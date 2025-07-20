document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const newgame = document.querySelector("#newgame");
  const reset = document.querySelector("#reset");
  const msg = document.querySelector("#msg");
  const msgcontainer = document.querySelector(".msg-container");
  let playerX = true;

  const winpattern = [
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
      } else {
        box.innerText = "X";
        box.style.color = "red";
      }
      box.disabled = true;
      playerX = !playerX;
      checkwinner();
    });
  });

  const showwinner = (winner) => {
    msg.innerText = `Congratulations ${winner} won this game.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };

  const disableboxes = () => {
    boxes.forEach((box) => (box.disabled = true));
  };

  const enableboxes = () => {
    boxes.forEach((box) => {
      box.disabled = false;
      box.innerText = "";
    });
  };

  const checkwinner = () => {
    for (let pattern of winpattern) {
      const [a, b, c] = pattern;
      const val1 = boxes[a].innerText;
      const val2 = boxes[b].innerText;
      const val3 = boxes[c].innerText;

      if (val1 !== "" && val1 === val2 && val2 === val3) {
        showwinner(val1);
        return;
      }
    }
  };

  newgame.addEventListener("click", resetgame);
  reset.addEventListener("click", resetgame);
});

