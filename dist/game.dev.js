"use strict";

document.getElementById("gamePName1").innerHTML = localStorage["playerName1"];
document.getElementById("gamePName2").innerHTML = localStorage["playerName2"];
setTimeout(function () {
  window.location.hash = '#turn';
}, 500);
var playerArr = [localStorage["playerName1"], localStorage["playerName2"]];
document.getElementById('pTurn').innerHTML = playerArr[0] + "'s Turn";
var flag = 0;
var XO_Array = {};
var img = '<img src="pictures/xIcon.jpg" alt="X">';
document.querySelectorAll('.gameSquare').forEach(function (item) {
  item.addEventListener('click', function () {
    var player;

    if (flag === 0) {
      player = playerArr[1] + "'s Turn";
      img = '<img src="pictures/oIcon.jpg" alt="O">';
      flag = 1;
    } else {
      player = playerArr[0] + "'s Turn";
      img = '<img src="pictures/xIcon.jpg" alt="X">';
      flag = 0;
    }

    document.getElementById('pTurn').innerHTML = player;
  });
});
var arr_done = [];
var count = 0;

function fn(id) {
  if (arr_done.includes(id)) {
    console.log(true);
    alert("Already filled! Choose a Blank field.");

    if (img === '<img src="pictures/oIcon.jpg" alt="O">' && flag === 1) {
      flag = 0;
      img = '<img src="pictures/xIcon.jpg" alt="X">';
    } else {
      flag = 1;
      img = '<img src="pictures/oIcon.jpg" alt="O">';
    }
  } else {
    console.log(false);
    count += 1;
    document.getElementById(id).innerHTML = img;
    arr_done.push(id); //console.log(parseInt(id[1] + id[2]));

    XO_Array[id] = img[35];

    if (XO_Array["m00"] === 'X' && XO_Array["m01"] === 'X' && XO_Array["m02"] === 'X' || XO_Array["m00"] === 'O' && XO_Array["m01"] === 'O' && XO_Array["m02"] === 'O' || XO_Array["m00"] === 'X' && XO_Array["m10"] === 'X' && XO_Array["m20"] === 'X' || XO_Array["m00"] === 'O' && XO_Array["m10"] === 'O' && XO_Array["m20"] === 'O' || XO_Array["m00"] === 'X' && XO_Array["m11"] === 'X' && XO_Array["m22"] === 'X' || XO_Array["m00"] === 'O' && XO_Array["m11"] === 'O' && XO_Array["m22"] === 'O' || XO_Array["m01"] === 'X' && XO_Array["m11"] === 'X' && XO_Array["m21"] === 'X' || XO_Array["m01"] === 'O' && XO_Array["m11"] === 'O' && XO_Array["m21"] === 'O' || XO_Array["m02"] === 'X' && XO_Array["m11"] === 'X' && XO_Array["m20"] === 'X' || XO_Array["m02"] === 'O' && XO_Array["m11"] === 'O' && XO_Array["m20"] === 'O' || XO_Array["m02"] === 'X' && XO_Array["m12"] === 'X' && XO_Array["m22"] === 'X' || XO_Array["m02"] === 'O' && XO_Array["m12"] === 'O' && XO_Array["m22"] === 'O' || XO_Array["m10"] === 'X' && XO_Array["m11"] === 'X' && XO_Array["m12"] === 'X' || XO_Array["m10"] === 'O' && XO_Array["m11"] === 'O' && XO_Array["m12"] === 'O' || XO_Array["m20"] === 'X' && XO_Array["m21"] === 'X' && XO_Array["m22"] === 'X' || XO_Array["m20"] === 'O' && XO_Array["m21"] === 'O' && XO_Array["m22"] === 'O') {
      document.getElementById('winnerBox').setAttribute("style", "display: grid; position: fixed; top: 1%; background-color: white; border-radius: 2em;  height: 100%; opacity: 0.9;");

      if (XO_Array[arr_done.pop()] === 'X') {
        document.getElementById('winnerIs').innerHTML = "Winner is :";
        document.getElementById('winner').innerHTML = localStorage["playerName1"];
      } else {
        document.getElementById('winnerIs').innerHTML = "Winner is :";
        document.getElementById('winner').innerHTML = localStorage["playerName2"];
      }
    } else if (count == 9) {
      document.getElementById('winnerBox').setAttribute("style", "display: grid;  position: fixed; top: 1%; background-color: white; border-radius: 2em;  height: 100%;  opacity: 0.9;");
      document.getElementById('winnerIs').innerHTML = "Uh Oh!";
      document.getElementById('winner').innerHTML = "It was a Tie";
    }
  }
}

document.getElementById("homeBtn").addEventListener("click", function () {
  document.location.href = 'index.html';
});
document.getElementById("restartBtn").addEventListener("click", function () {
  document.location.href = 'game.html';
});