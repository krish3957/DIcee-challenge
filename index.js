var x1=Math.floor(Math.random()*6);
var x2=Math.floor(Math.random()*6);

var player1Image=document.querySelector(".img1");
var player2Image=document.querySelector(".img2");

var Winner=document.querySelector("h1");

if(x1>x2){ 
    Winner.innerHTML="Player 1 Wins!";
}
else if(x2>x1){
    Winner.innerHTML="Player 2 Wins!";
}
else{
    Winner.innerHTML="Draw!";
}

if(x1===0){
    player1Image.setAttribute("src","./images/dice1.png");
}
else if(x1==1){
    player1Image.setAttribute("src","./images/dice2.png");
}
else if(x1==2){
    player1Image.setAttribute("src","./images/dice3.png");
}
else if(x1==3){
    player1Image.setAttribute("src","./images/dice4.png");
}
else if(x1==4){
    player1Image.setAttribute("src","images/dice5.png");
}
else if(x1==5){
    player1Image.setAttribute("src","images/dice6.png");
}

if(x2==0){
    player2Image.setAttribute("src","images/dice1.png");
}
else if(x2==1){
    player2Image.setAttribute("src","images/dice2.png");
}
else if(x2==2){
    player2Image.setAttribute("src","images/dice3.png");
}
else if(x2==3){
    player2Image.setAttribute("src","images/dice4.png");
}
else if(x2==4){
    player2Image.setAttribute("src","images/dice5.png");
}
else if(x2==5){
    player2Image.setAttribute("src","images/dice6.png");
}
