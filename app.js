var myVar;
var myVara

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById('button').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
}


function myFunction2() {
    if (document.getElementById('loadingScreen').style.display === 'block') {
        myVara = setTimeout(showLoad, 1000)
    }
}

function showLoad() {
    document.getElementById('button').style.display = 'flex';
    document.getElementById('loadingScreen').style.display = 'none';
}