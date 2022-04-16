img = "";

function preload() {
    img = loadImage("TV AND AC.jpg");
}

function setup() {
    canvas = createCanvas(550,450);
    canvas.center();
}


function draw() {
    image(img, 0, 0, 550, 450);
    fill("#FF0000");
    text("AC",200,50);
    noFill();
    stroke("#FF0000")
    rect(220,30,200,90);
    fill("#FF0000");
    text("TV",200,300);
    noFill();
    stroke("#FF0000");
    rect(230,230,200,100);
}