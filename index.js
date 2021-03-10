document.getElementById("startBtn").addEventListener("click", function() {
    document.location.href = 'game.html';
});


let pName1;
let pName2;
pName1 = document.querySelectorAll("input")[0].value;
pName2 = document.querySelectorAll("input")[1].value;

document.querySelectorAll("input")[0].addEventListener("change", function() {
    pName1 = document.querySelectorAll("input")[0].value;
    localStorage["playerName1"] = pName1;
});

document.querySelectorAll("input")[1].addEventListener("change", function() {
    pName2 = document.querySelectorAll("input")[1].value;
    localStorage["playerName2"] = pName2;
});
localStorage["playerName1"] = pName1;
localStorage["playerName2"] = pName2;