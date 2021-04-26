//Create variables here
var dog, happyDog, database, foodS, foodStock;

//adding images of the dog and the food
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() { 
  background(46,139,87) ;

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();

  textSize(20)
  fill("white");
  text("Food: "+foodS,180,100);

  textSize(30);
  fill("white");
  text("Bruno is hungry !",145,400);

  text("Press UP_ARROW key to feed milk !",5,450);
}


//functions to read values from firebase
function readStock(data){
  foodS = data.val();
}

//functions to write values in database
function writeStock(x){
  if(x<=0) {
     x=0;
  }else{
    x = x -1 ;
  }
  database.ref('/'). update ({
  Food:x

  })

  

}