var dog,dogHappy;
var foodS,foodStock;
var database;

function preload()
{
dog=loadImage('images/dogImg.png')
dogHappy=loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  dog.addImage(dog);
  foodStock=database.ref('food')
  foodStock.on("value",readStock);

}


function draw() {  

  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })

}


