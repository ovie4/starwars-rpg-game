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
						key:"luke",
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
						key: "yoda",
					}
]

var attacker;
//give player option of character
function playerChoice(){
	//get button clicked and put it in attack div
	 $(".btn").on("click", function(){
	 	console.log("You clicked a button");
	 	for (var i = 0; i < characters.length; i++) {
	 		if(this.id===characters[i].key){
	 	
	 	attacker = characters[i];
	 	console.log(attacker);
	 	$("#attName").html(attacker.name);
	 	$("#attHP").html(attacker.healthPoints);
	 	$("#attack").html(attacker.attack);
	 }
	 	}

	 })
	//get the one clicked
}

playerChoice();
//take player choice and move it to attacker div

//give player choice of defender from remaining options

//move choice to defender div

//create attack and counter attack functions for each character(put in object?)

//if player wins, remove vanquished option and ave player fight a random remaining character

//if player loses, alert game over and give option to restart





})