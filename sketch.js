//bbom,essa foi minha versão(literalmente a mesma coisa kkk)
//mas o modelo ja vem com o código inteiro pronto (outro link)

var sea,ship;
var seaImg,shipImg;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}
function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  ship = createSprite(130,200,30,30);

  sea.addImage(seaImg);
  ship.addAnimation("movingShip",shipImg1);

  sea.scale = 0.3;
  ship.scale = 0.25;

  sea.velocityX = -0.5;
}

function draw(){
  background(0);
  drawSprites();

}