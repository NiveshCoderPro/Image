img = "";

function preload() {
        img = loadImage("fruit basket.jpg");
}

function setup() {
     canvas = createCanvas(550,450);
     canvas.center();
} 

function draw() {
   image(img,0,0,550,450);
   fill("#FF0000");
   text("Basket",275,300);
   noFill();
   stroke("#FF0000");
   rect(200,300,200,90);
}
