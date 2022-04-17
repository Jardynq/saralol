var drawCanvas = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "70px Times New Roman";
    ctx.fillStyle = "rgb(" + Math.random() * 255 + "," + + Math.random() * 255 + "," + + Math.random() * 255 + ")";
    ctx.fillText("VELKOMMEN:)", 5, 50);
    ctx.strokeText("VELKOMMEN:)", 5, 50);
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "70px Times New Roman";
ctx.fillStyle = "#D567E1";
ctx.fillText("VELKOMMEN:)", 5, 50);
ctx.strokeText("VELKOMMEN:)", 5, 50);