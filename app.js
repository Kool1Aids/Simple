var myVar;
var myVara;
var gameVar;
const player = document.getElementById('player');

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

function jump() {
    if (player.classList != 'jump') {
    player.classList.add('jump');

    setTimeout(function() {
        player.classList.remove('jump')
    }, 300)
}
}

document.addEventListener("keydown", function(event) {
    jump()
})