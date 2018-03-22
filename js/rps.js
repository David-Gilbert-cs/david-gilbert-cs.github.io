


function rps()
{

var userChoice = prompt("Do you choose rock, paper or scissors? (NO FAT DOGS ALLOWDED)	\t(you shall not curse, cuss or swear)");
 var computerChoice = Math.random();
 if (computerChoice <= 0.25) { computerChoice = "rock";
 }
 else if(computerChoice <= 0.5) { computerChoice = "paper"; }
else if (computerChoice <= 0.75) { 
if(userChoice === "Duo Dynamique") {
 computerChoice = "nothing. The damn computer is pouting because you selected its choice.";
}
 else {computerChoice ="Duo Dynamique";
}
}
 else if (computerChoice <= 1) {
 computerChoice ="scissors" ;
}
 //window.alert(" The damn computer chose " + computerChoice);
 
var compare = function (choice1,choice2) { 
if(choice1 === choice2) { 
return "The result is a damn tie! Technically, no one was raped on this one, unfortunatly.";
 }
 else if (choice1 === "rock"){
 if(choice2 === "scissors"){
 return "rock beats scissors, you raped the damn computer!" ;
 }
 else if (choice2 === "Duo Dynamique") {
 return "The Duo Dynamique beats anything, you've been raped with the rest of the whole damn world!";
}
 else if (choice2 === "paper") {
 return "paper beats rock, you've been raped by the damn computer!" ;
 }
 }
 else if (choice1 === "paper"){
 if (choice2 === "rock"){
 return "paper beats rock, you raped the damn computer!";
 }
 else if (choice2 === "Duo Dynamique") {
 return "The Duo Dynamique beats anything, you've been raped with the rest of the whole damn world!";
}
 else {
 return "scissors beats paper, you've been raped by the damn computer!";
 }
 }
 else if (choice1 === "fat dogs" ){
 return " I said NO FAT DOGS! You damn idiot! ";
 }
 else if (choice1 === "fat dog" ){
 return " I said NO FAT DOGS! You damn idiot! ";
 }
 else if ( choice1 === "scissors"){
 if (choice2 === "rock" ){
 return "rock beats scissors, you've been raped by the damn computer!"
 }
 if (choice2 === "paper" ){
 return "scissors beats paper, you raped the damn computer!";
 }
 else if (choice2 === "Duo Dynamique") {
 return "The Duo Dynamique beats anything, you've been raped with the rest of the whole damn world!";
}
} else if (choice1 === "Duo Dynamique"){
return "The Duo Dynamique beats anything, you've raped the whole damn world!"
}
if (choice1 === "curse"){
return "Anything beats cursing, you've been raped by the whole damn world!" ;
}
if (choice1 === "cursing"){
 return "Anything beats cursing, you've been raped by the whole damn world!";
}
 if (choice1 === ""){
 return "ANSWER THE DAMN QUESTION, YOU MOROOOOOOOON!";
}
 if (choice1 === "cuss"){
 return "Anything beats cussing, you've been raped by the whole damn world!" ;
 }
 if (choice1 === "cussing"){
 return "Anything beats cussing, you've been raped by the whole damn world!" ;
 }
 if (choice1 === "swear"){
 return "Anything beats swearing, you've been raped by the whole damn world!" ;
 }
 if (choice1 === "swearing"){
 return "Anything beats swearing, you've been raped by the whole damn world!" ;
 }
 else{
 return "This is nonsense, YOU DAMN IDIOT! Obviously, you get raped over and over again by the whole damn world!"
}
 }
 window.alert(" The damn computer chose  " + computerChoice+ " " + compare(userChoice,computerChoice));
}
