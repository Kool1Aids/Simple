var myVar;
var myVara

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById('button').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
}


