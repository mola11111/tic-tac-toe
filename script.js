var turn = 1;
var tic = Array(9).fill(0);
const winCases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var gameOver = false;
const winColor = "green";
const loseColor = "red";
const winLineColor = "purple";

function play(squareIdx) {
  if (gameOver) return;
  if (tic[squareIdx] != 0) return;
  
  let symbol = (turn === 1) ? "O" : "X";
  tic[squareIdx] = turn;
  
  document.getElementById(String(squareIdx)).innerText = symbol;
  turn = (turn === 1) ? 2 : 1;
  toggleTurnDisplay();
  
  let result = checkResult();
  if (result !== 0) {
    gameOver = true;
    endGame(result, symbol);
  } else if (tic.indexOf(0) === -1) {
    gameOver = true;
    endGame(0);
  }
}

function toggleTurnDisplay() {
  document.getElementById("turn_O").style.opacity = (turn === 1) ? 1 : 0.2;
  document.getElementById("turn_X").style.opacity = (turn === 2) ? 1 : 0.2;
}

function checkResult() {
  for (let i of winCases) {
    if (tic[i[0]] === tic[i[1]] && tic[i[1]] === tic[i[2]]) {
      return tic[i[0]];
    }
  }
  return 0;
}

function endGame(result, symbol) {
  if (result === 0) {
    console.log("draw");
    document.getElementById("turn_O").style.color = "blue";
    document.getElementById("turn_X").style.color = "blue";
  } else {
    console.log(symbol === "O" ? 1 : 2);
    document.getElementById(`turn_${symbol}`).style.color = winColor;
    document.getElementById(`turn_${(symbol === "O") ? "X" : "O"}`).style.color = loseColor;
    for (let j of i) {
      document.getElementById(String(j)).style.color = winLineColor;
    }
  }
  document.getElementById("turn_O").style.opacity = 1;
  document.getElementById("turn_X").style.opacity = 1;
}
