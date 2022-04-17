/**
 * Sets up canvas and anchors it to the html-element with id="room". This only happens once.
 * variables initialised here without "var" are automatically global.
 */
setup = function(){
    var canvas = createCanvas(300, 200);
    canvas.parent("room");
    naturalLighting = color(70, 70, 70);
    lightColor = naturalLighting;
    backgoundColor = naturalLighting;
    radiatorColor = naturalLighting;
}
/**
 * Draw function that is called by p5js 50 times every second.
 */
draw = function(){
    background(backgoundColor);
    drawFloorPlan();
    drawLighting();
    drawRadiator();
    
}
var drawFloorPlan = function() {
    push();
    strokeWeight(2);
    fill(naturalLighting);
    rect(25, 25, 250, 150);
    pop();
}

var drawLighting = function() {
    push();
    fill(lightColor);
    noStroke();
    ellipse(100,100, 130, 130);
    pop();
}

var drawRadiator = function(){
    push();
    fill(radiatorColor);
    noStroke();
    rect(250,30,50,30);
    pop();
}
var drawEverything = function(){
    push();
    fill(lightColor);
    noStroke();
    ellipse(100,100, 130, 130);
    fill(radiatorColor);
    rect(250,30,50,30);
    pop();
}

// lysene 
var turnOnLights = function(){
    lightColor = color(240,321,100);
}
var turnOffLights = function(){
    lightColor = color(70, 70, 70);
}
// radiator
var turnOnRadiator = function(){
   radiatorColor = color(137,33,33);
}
var turnOffRadiator = function (){
    radiatorColor = color(70,70,70);
}
// sover & vågner 
var turnOnEverything = function (){
    lightColor = color(240,321,100);
    radiatorColor = color(137,33,33);
}
var turnOffEverything = function(){
    lightColor = color(70,70,70);
    radiatorColor = color(70,70,70);
}



