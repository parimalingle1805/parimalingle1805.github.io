"use strict";

document.getElementById("gamePName1").innerHTML = localStorage["playerName1"];
document.getElementById("gamePName2").innerHTML = localStorage["playerName2"];
setTimeout(function () {
  window.location.hash = '#canvas';
}, 1000);
var playerArr = [localStorage["playerName1"], localStorage["playerName2"]];
document.getElementById('pTurn').innerHTML = playerArr[0] + "'s Turn";
var flag = 0;
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

function fn(id) {
  if (arr_done.includes(id)) {
    console.log(true);
    alert("Already filled! Choose a Blank field.");
  } else {
    console.log(false);
    document.getElementById(id).innerHTML = img;
    arr_done.push(id);
  }
}
/*document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});
document.getElementById('m00').addEventListener("click", function() {
    this.innerHTML = img;
});*/