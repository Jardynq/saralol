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
    var hasToggleOff = document.getElementById("set2").classList.contains("fa-bell-slash");
    if (hasToggleOff) {
        // laver om til toggle on
        document.getElementById("set2").classList.replace("fa-bell-slash", "fa-bell");
    } else {
        // laver om til toggle off
        document.getElementById("set2").classList.replace("fa-bell", "fa-bell-slash");
    }
}
var alertFeedBack = function() {
  var msg = 
    "+ Rigtig god artikel\n" +
    "+ Gode ikoner\n" +
    "+ Fine quizzer\n" +
    "- Radiotoren er blevet til en varmepumpe\n" +
    "- 'Hjemme'-ikonet er lidt svært at aflæse'" 
    
  alert(msg);
}
showPage3();
var btn = document.getElementById("headline");
btn.addEventListener("click", alertFeedBack);
