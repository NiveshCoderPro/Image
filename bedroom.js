img = "";

function preload() {
    img = loadImage("Bedroom.jpg");
}

function setup() {
    canvas = createCanvas(550,450);
    canvas.center();
}

function draw() {
    image(img,0,0,550,450);
    fill("#FF0000");
    text("Bed",120,350);
    noFill();
    stroke("#FF0000");
    rect(120,290,250,80);
}