var dog,dogImg,happyDog,database,foodStock,foodS;

function preload(){
dogImg=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
   dog= createSprite(250,250,10,10);
   dog.addImage(dogImg);
   dog.scale=0.5;
randNum=20; 
database = firebase.database();
foodStock=database.ref('foodS')
// foodStock.on("value",readStock)
foodStock.on("value",function(data){
  gameState = data.val(); 

})
}


function draw() {  
background(46, 139, 87);
dog.display();
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
}    
text("food remaining"+ foodS, 200,100)
stroke(10)
}
function readStock(data){
foodS=data.val();
}
   function writeStock(x){
database.ref('/').update({
  Food:x
})
   }
    