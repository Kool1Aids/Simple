var myVar;
var myVara;
var gameVar;
var restart;
var home;
const player = document.getElementById('player');
const obj = document.getElementById('obj')

function myFunction() {
    myVar = setTimeout(showPage, 1000);
    myVara = setTimeout(showButton, 5000);
}

function startGame() {
    gameVar = setTimeout(showGame(), 1000);
}

function showPage() {
    document.getElementById('button').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
}

function showButton() {
    document.getElementById('continueBtn').style.display = 'block';
}

function showGame() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('continueBtn').style.display = 'none';
}

function loser() {
    document.getElementById('button').style.display = 'block';
    document.getElementById('retry').style.display = 'none';
}

function soreLoser() {
    home = setTimeout(loser(), 1000);
}

function startOver() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('retry').style.display = 'none';
    document.getElementById('score').innerHTML = 0;
}

function restartGame() {
    restart = setTimeout(startOver(), 1000);
}

function jump() {
    if (player.classList != 'jump') {
    player.classList.add('jump');

    setTimeout(function() {
        player.classList.remove('jump')
    }, 300)
}
} 

let isAlive = setInterval(function() {
    // players Y pos
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    // obj X pos
    let objLeft = parseInt(window.getComputedStyle(obj).getPropertyValue('left'));
    //colision
    if(objLeft < 50 && objLeft > 0 && playerTop >= 300) {
        document.getElementById('retry').style.display = 'block'
        document.getElementById('game').style.display = 'none'
    }

    if(objLeft === 0) {
        points()
    }
}, 10)

function points() {
    var score = parseInt(document.getElementById('score').innerHTML);
    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById('points').innerHTML = score;
}

document.addEventListener("keydown", function(event) {
    jump()
}) 

