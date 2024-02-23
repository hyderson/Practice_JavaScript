//抓div
const button = document.getElementById("toggle");

button.onclick = function () {
    button.classList.toggle('dark');
    console.log("touch");
}