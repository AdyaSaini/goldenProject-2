var brickWall, brickWallImg;
//images
var streetImg, street;


function preload(){
    streetImg = loadImage("images/street.jpeg");
    brickWallImg = loadImage("images/brickWall.jpeg")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    street = createSprite(windowWidth-550, windowHeight/2);
    street.addImage(streetImg);
    street.scale = 1.5;

    brickWall = createSprite(windowWidth/6-20, windowHeight/2);
    brickWall.addImage(brickWallImg);
    brickWall.scale = 0.37;
}
function draw(){
    background("black");
    //background("pink");


    drawSprites();
}