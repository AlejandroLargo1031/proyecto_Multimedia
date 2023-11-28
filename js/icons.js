// script.js
document.getElementById('facebookIcon').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace redirija
    var infoElement = document.getElementById('facebookInfo');
    infoElement.classList.toggle('active');
});

document.getElementById('twitericon').addEventListener('click', function(event) {
    event.preventDefault();
    var infoElement = document.getElementById('twiterInfo');
    infoElement.classList.toggle('active');
});

document.getElementById('linkedinicon').addEventListener('click', function(event) {
    event.preventDefault();
    var infoElement = document.getElementById('linkedinInfo');
    infoElement.classList.toggle('active');
});

document.getElementById('instagramicon').addEventListener('click', function(event) {
    event.preventDefault();
    var infoElement = document.getElementById('instagrramInfo');
    infoElement.classList.toggle('active');
});

document.getElementById('whatsappIcon').addEventListener('click', function(event) {
    event.preventDefault();
    var infoElement = document.getElementById('whatsappInfo');
    infoElement.classList.toggle('active');
});

document.getElementById('correoIcon').addEventListener('click', function(event) {
    event.preventDefault();
    var infoElement = document.getElementById('correoInfo');
    infoElement.classList.toggle('active');
});