//Calculating time
var hr, mn, sc;

function preload(){
    
}

function setup(){
    createCanvas(800, 800);
    hr = hour();
    mn = minute(); 
    sc = second();

    angleMode(DEGREES);

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr, 0, 60, 0, 360);

    console.log(scAngle + " " + mnAngle + " " + hrAngle);
}

function draw(){
    rotate(scAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(800, -800, 20, 0);

    rotate(mnAngle);
    stroke(0, 128, 0);
    strokeWeight(7);
    line(800, -800, 20, 0);
    
    rotate(hrAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(800, -800, 20, 100);
}   

