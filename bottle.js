img = "";

function preload() {
    img = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(550,450);
    canvas.center();
}


function draw() {
    image(img,0,0,550,450);
    fill("#FF0000");
    text("Bottle",275,10);
    noFill();
    stroke("#FF0000");
    rect(240,50,120,300);

}