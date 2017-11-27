$(document).ready(function(){


//create characters for player to use...each character an object?
var characters = [
						obiWan = {
						name: "Obi Wan",
						healthPoints: 120,
						attack: 8,
						counterAttack:15,
						key: "obiWan",
					},

						luke = {
						name: "Luke Skywalker",
						healthPoints: 100,
						attack: 6,
						counterAttack:18,
						pic: $("#lukePic"),
						key:"luke",
						div: "lukeDiv",
					},

						darthMaul = {
						name: "Darth Maul",
						healthPoints: 150,
						attack: 15,
						counterAttack:25,
						key: "darthMaul" ,
					},
						yoda = {
						name: "Master Yoda",
						healthPoints: 80,
						attack: 20,
						counterAttack:35,
						pic: $("#yodaPic"),
						key: "yoda",
						div: "yodaDiv",
					}
]

var attacker={};
var defender={};
var clickCount=1;

	
//create function to choose attacker
function attChoice(){
	//get button clicked and put that character in attack div
	 $(".charChoice").on("click", function(){
	 	if(clickCount===1){
	 	console.log("You picked an attacker");
	 	for (var i = 0; i < characters.length; i++) {
	 		console.log(this.id);
	 		if(this.id===characters[i].key){
	 	 	attacker = characters[i];
		 	console.log(attacker);
		 	$("#attPic").html(attacker.pic); //adoesn't work
		 	$("#attName").html(attacker.name);
		 	$("#attHP").html(attacker.healthPoints);
		 	//figure out how to hide picked option
		 }
	 	}
	 }
	 		clickCount++;
	 })
	
}
//call attacker choice function

//give player choice of defender from remaining options
function defChoice(){
	
	 $(".charChoice").on("click", function(){
	 	if(this.id!=attacker.key){
	 		console.log(attacker);
	 		if(clickCount!=1){
	 		console.log(clickCount);
	 	console.log("You picked a defender");
	 	for (var i = 0; i < characters.length; i++) {
	 		if(this.id===characters[i].key){
	 	 	defender = characters[i];
		 	console.log(defender);
		 	$("#defPic").html(defender.pic);
		 	$("#defName").html(defender.name);
		 	$("#defHP").html(defender.healthPoints);
		 	//figure out how to hide picked option
		 }
	 	}
			}
		}
	 })
}


//create attack and counter attack functions for each character(put in object?)
function fight(){
	
	
	$(".strike").on("click", function(){
		var attPower = attacker.attack;
	var attHealth = attacker.healthPoints;
	var defHealth = defender.healthPoints;
	var defCounter = defender.counterAttack;
		console.log("Attacker is "+attacker);
	console.log("Defender is "+defender);
		//return new health values,etc
		//function updateHealth() {
		//reduce opponent HP by attPower and alert
		defHealth = defHealth - attPower;
		console.log("defender health left is "+defHealth);
		//reduce attackerHP by counterattack power and alert
		attHealth = attHealth - defCounter;
		console.log("attacker health left is "+attHealth);
		//increase attPower by base attack power
		attPower=attPower+attPower;
		}
		//updateHealth();
		//return attHealth;
		//if attacker HP<=0, game over
		/*if(attHealth<=0){
			alert("You Lose");
		}
		//if defender HP<=0, run defChoice()
		else if(defHealth<=0){
			alert("You win");
			defChoice();
		}*/
		
	})
}


//if player wins, remove vanquished option and ave player fight a random remaining character

//if player loses, alert game over and give option to restart

attChoice();
defChoice();

fight();
})