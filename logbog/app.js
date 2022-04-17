var showPage1 = function () {
    document.getElementById("page1").style = "display: block";
    document.getElementById("page2").style = "display: none";
    document.getElementById("page3").style = "display: none";
}
var showPage2 = function () {
    document.getElementById("page1").style = "display: none";
    document.getElementById("page2").style = "display: block";
    document.getElementById("page3").style = "display: none";
}
var showPage3 = function () {
    document.getElementById("page1").style = "display: none";
    document.getElementById("page2").style = "display: none";
    document.getElementById("page3").style = "display: block";
}

var set1Pressed = function () {
    var hasToggleOff = document.getElementById("set1").classList.contains("fa-toggle-off");
    if (hasToggleOff) {
        // laver om til toggle on
        document.getElementById("set1").classList.replace("fa-toggle-off", "fa-toggle-on");
    } else {
        // laver om til toggle off
        document.getElementById("set1").classList.replace("fa-toggle-on", "fa-toggle-off");
    }

}
var set2Pressed = function () {
    var hasBellOn = document.getElementById("set2").classList.contains("fa-bell-o");
    if (hasBellOn) {
        // laver om til klokke on
        document.getElementById("set2").classList.replace("fa-bell-o", "fa-bell-slash-o");
    } else {
        // laver om til klokke off
        document.getElementById("set2").classList.replace("fa-bell-slash-o", "fa-bell-o");
    }

}
// indsæt funktion her
var button1Clicked = function () {

    console.log("Button 1 has been clicked");

}
var button2Clicked = function () {

    console.log("Button 2 has been clicked");
}
var button3Clicked = function () {
}
    console.log("Button 3 has been clicked");

var button4Clicked = function () {
}
    console.log("Button 4 has been clicked");

var alertFeedBack = function () {
    message = "- Farvetemaet stikker lidt i forskellige retninger\n"
        +     "- 3 kolonner venner\n"
        +     "- Ikonskift lige finpudses\n"
        +     "+ Meget Attention\n"
        +     "+ Gode ikoner\n"
        +     "+ Der er forsøgt en masse nye ting\n"
    alert(message)
}
var btn = document.getElementById("topline");
btn.addEventListener("click", alertFeedBack);

