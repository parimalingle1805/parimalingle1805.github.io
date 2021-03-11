document.getElementById("gamePName1").innerHTML = localStorage["playerName1"];
document.getElementById("gamePName2").innerHTML = localStorage["playerName2"];

setTimeout(function() { window.location.hash = '#canvas'; }, 1000);

let playerArr = [localStorage["playerName1"], localStorage["playerName2"]];

document.getElementById('pTurn').innerHTML = playerArr[0] + "'s Turn";
let flag = 0;
let img = '<img src="pictures/xIcon.jpg" alt="X">';
document.querySelectorAll('.gameSquare').forEach(item => {
    item.addEventListener('click', function() {
        let player;
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
    })
});

let arr_done = [];

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