var password = document.getElementById("passw");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var length = document.getElementById("length");

//onfocus and onblur

password.onfocus = function () {
    document.getElementById("rule").style.display = "block";

}
password.onblur = function () {
    document.getElementById("rule").style.display = "none";

}

//透過if else確認是否match
//使用者輸入時 onkeyup

password.onkeyup = function () {

    //確認是否小寫

    var lowerLetter = /[a-z]/g;
    if (password.value.match(lowerLetter)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.add("invalid");
        lowercase.classList.remove("valid");
    }

    //確認使否大寫

    var upperLetter = /[A-Z]/g;
    if (password.value.match(upperLetter)) {
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.add("invalid");
        uppercase.classList.remove("valid");
    }

    //確認使否有數字

    var numberLetter = /[0-9]/g;
    if (password.value.match(numberLetter)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    //確認長度


    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.add("invalid");
        length.classList.remove("valid");
    }
}