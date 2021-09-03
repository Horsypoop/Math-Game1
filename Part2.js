player1name=localStorage.getItem("player1_name");
player2name=localStorage.getItem("player2_name");

document.getElementById("player1_getname").innerHTML=player1name+": ";
document.getElementById("player2_getname").innerHTML=player2name+": ";

var player1score=0;
var player2score=0;

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
