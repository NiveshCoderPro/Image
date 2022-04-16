function preload() {
    img = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(550,450);
    canvas.center();
}

function draw() {
    image(img,0,0,550,450);
    fill("#FF0000");
    text("Computer",195,75);
    noFill();
    stroke("#FF0000");
    rect(100,100,290,170);
    fill("#13ebdc");
    text("Keyboard",205,330);
    noFill();
    stroke("#13ebdc");
    rect(220,337,120,60);
    fill("#48ad0e");
    text("Mouse",154,330);
    noFill();
    stroke("#48ad0ex");
    rect(154,340,50,50);
    fill("#eb8e02");
    text("PC",400,150);
    noFill();
    stroke("#eb8e02");
    rect(380,140,70,200);
}