//抓div
const button = document.getElementById("toggle");

button.onclick = function () {
    button.classList.toggle('dark');
    console.log("touch");
    if(button.className==='dark'){
        document.body.style.backgroundColor="black";
    }else{
        document.body.style.backgroundColor="antiquewhite";
    }
}
