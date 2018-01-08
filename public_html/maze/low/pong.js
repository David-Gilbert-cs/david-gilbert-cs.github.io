var myObstacle;
 var myGamePiece,myGamePiece2;
 var wall;
 var l=0; 
var r=0;
 var myScore ;
 function startGame() {
 myBall = new component(20,20,"brown",100,130);
 myGamePiece = new component(10, 70, "red", 0, 135); 
myGamePiece2 = new component(10, 70, "green", 580, 135);
 myScore = new component("30px", "Consolas", "black", 280, 40, "text");
 myGameArea.start();
 }
 var myGameArea = { 
canvas : document.createElement("canvas"), start : function() { this.canvas.width = 590;
 this.canvas.height = 370;
 this.context = this.canvas.getContext("2d");
 document.body.insertBefore(this.canvas, document.body.childNodes[0]);
 this.interval = setInterval(updateGameArea, 10);
 window.addEventListener('keydown', function (e) {
 myGameArea.keys = (myGameArea.keys || []);
 myGameArea.keys[e.keyCode] = true;
 }
)
 window.addEventListener('keyup', function (e) { myGameArea.keys[e.keyCode] = false; })
 }
, clear : function() {
 this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
}
 }

 function component(width, height, color, x, y,type) { 
this.type = type;
 this.width = width;
 this.height = height;
 this.speedX = 0;
 this.speedY = 0;
 this.x = x;
 this.y = y;
 this.update = function() {
 ctx = myGameArea.context;
 if (this.type == "text") {
 ctx.font = this.width + " " + this.height;
 ctx.fillStyle = color;
 ctx.fillText(this.text, this.x, this.y);
 }
 else {
 ctx.fillStyle = color;
 ctx.fillRect(this.x, this.y, this.width, this.height);
 }
 } this.newPos = function() {
 if(this.x>myGameArea.canvas.width-this.width && this.speedX>0 ) this.speedX = -0.75 * this.speedX-0.5 ; if ( this.x<0 && this.speedX<0 ) this.speedX=-0.75*this.speedX+0.5;
 if(this.y>myGameArea.canvas.height-this.height && this.speedY>0) this.speedY=-0.75*this.speedY-0.5;
 if(this.y<0 && this.speedY<0) this.speedY=-0.75*this.speedY+0.5;
 this.x += this.speedX;
 this.y += this.speedY;
 }
 this.crashWith = function(otherobj) {
 var myleft = this.x;
 var myright = this.x + (this.width);
 var mytop = this.y;
 var mybottom = this.y + (this.height);
 var otherleft = otherobj.x;
 var otherright = otherobj.x + (otherobj.width);
 var othertop = otherobj.y;
 var otherbottom = otherobj.y + (otherobj.height);
 var crash = true;
 if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) { 
crash = false; 
}
 return crash;
 }
 }

 function updateGameArea() {
 if(myBall.x <= 0){ l+=1;
 }
 if(myBall.x >= myGameArea.canvas.width-19){
 r+=1;
 }
 if (myGamePiece.crashWith(myBall))
 {
 myBall.x += -1*myBall.speedX+5;
 myBall.y += myBall.speedY-5;
 myBall.speedX= -1.05*myBall.speedX;
 }
 if(myGamePiece2.crashWith(myBall)) {
 myBall.x += -1*myBall.speedX-1;
 myBall.y += myBall.speedY-1;
 myBall.speedX= -1.05*myBall.speedX;
 }
 myGameArea.clear();
 myGamePiece.speedX = 0;
 myGamePiece.speedY = 0;
 myGamePiece2.speedX = 0;
 myGamePiece2.speedY = 0;
 if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece2.speedY = -5;
 }
 if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece2.speedY = 5;
 }
 if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speedY = -5;
 }
 if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speedY = 5;
 }
 if (myGameArea.keys && myGameArea.keys[32]) { myBall.speedx=-10; myBall.speedy=-10;
 }
 myGamePiece.newPos();
 myGamePiece2.newPos();
 myGamePiece.update();
 myGamePiece2.update();
 myBall.newPos();
 myBall.update();
 myScore.text="SCORE: "+r+" - "+l;
 myScore.update();
 }
 function moveup() {
 myBall.speedY -= 1; myBall.speedX += 4;
 }
 function clearmove() {
 myGamePiece.speedX = 0; myGamePiece.speedY = 0;
 }
