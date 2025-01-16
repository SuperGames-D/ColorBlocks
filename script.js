async function getJSON() {
    return fetch('https://raw.githubusercontent.com/SuperGames-D/ColorBlocks/main/Announcements/announcements.json')
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}

async function fetchData() {
let data = await getJSON()
announcements = data["data"]
document.getElementById("announcements").innerHTML = "<p style=\"border: 2px solid white;\"></p>"
for (let i = 0; i<=announcements.length-1; i++) {
document.getElementById("announcements").innerHTML += "<p style=\"font-size: 25px\">" + announcements[i] + "</p> <p style=\"border: 2px solid white;\"></p>"
}
}


function announcements() {
window.location.href = "announcements.html"
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("credits");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
 }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
}

function viewSongs() {
window.location.href = "songs.html"
}

function openSong(song) {
if (song == 1) {
window.open("https://www.youtube.com/watch?v=9np9KK4ccuA")
}
else if (song == 2) {
window.open("https://www.newgrounds.com/audio/listen/1252271")
}
else if (song == 3) {
window.open("https://www.newgrounds.com/audio/listen/1254390")
}
else if (song == 4) {
window.open("https://www.newgrounds.com/audio/listen/1262600")
}
else if (song == 5) {
window.open("https://www.newgrounds.com/audio/listen/1253395")
}
else if (song == 6) {
window.open("https://www.youtube.com/watch?v=wuhgMGa243E")
}
else if (song == 0) {
window.open("https://github.com/SuperGames-D/ColorBlocks/raw/main/Files/CBmenuLoop.mp3")
}
}