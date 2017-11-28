$(document).ready(function() {

    $("#restart").hide();
    //create characters for player to use...each character an object?
    var characters = [
        obiWan = {
            name: "Obi Wan",
            healthPoints: 120,
            attack: 8,
            counterAttack: 15,
            pic: '<img id="obiPic" src="./assets/images/obiwan.jpg" alt="Luke SkyWalker">',
            key: "obiWan",
        },

        luke = {
            name: "Luke Skywalker",
            healthPoints: 100,
            attack: 6,
            counterAttack: 18,
            pic: '<img id="lukePic" src="./assets/images/luke.jpg" alt="Luke SkyWalker">',
            key: "luke",

        },

        darthMaul = {
            name: "Darth Maul",
            healthPoints: 150,
            attack: 15,
            counterAttack: 25,
            pic: '<img id="maulPic" src="./assets/images/maul.jpg" alt="Darth Maul">',
            key: "darthMaul",
        },
        yoda = {
            name: "Master Yoda",
            healthPoints: 80,
            attack: 20,
            counterAttack: 35,
            pic: '<img id="yodaPic" src="./assets/images/yoda.png" alt="yoda">',
            key: "yoda",

        }
    ]

    var attacker = {};
    var defender = {};
    var clickCount = 1;
    var wins = 0;
    var attPower;

    //populate the characters
    //for (var i = 0; i < characters.length; i++) {

    //}


    //create function to choose attacker
    function attChoice() {
        //get button clicked and put that character in attack div
        $(".charChoice").on("click", function() {
        	 attPower = attacker.attack;
            //$(this.id).toggle();
            //console.log(this);

            if (clickCount === 1) {
            	
                console.log("You picked an attacker");
                for (var i = 0; i < characters.length; i++) {
                    console.log(this.id);
                    if (this.id === characters[i].key) {
                        attacker = characters[i];

                        console.log(attacker);
                        $("img#attPic").replaceWith(attacker.pic); //doesn't work
                        $("#attName").html(attacker.name);
                        $("#attHP").html(attacker.healthPoints);
                        //figure out how to hide picked option
                    }
                }
                clickCount++;
            }
            
        })

    }
    

    //give player choice of defender from remaining options
    function defChoice() {

        $(".charChoice").on("click", function() {
            if (this.id != attacker.key) {
                console.log(attacker);
                if (clickCount != 1) {
                    console.log("clicks: "+clickCount);
                    console.log("You picked a defender");
                    for (var i = 0; i < characters.length; i++) {

                        if (this.id === characters[i].key) {
                            defender = characters[i];
                            if (defender.healthPoints > 0) {
                                console.log(defender);
                                $("img#defPic").replaceWith(defender.pic);
                                $("#defName").html(defender.name);
                                $("#defHP").html(defender.healthPoints);
                                //figure out how to hide picked option
                            } else if (defender.healthPoints <= 0) {
                                alert("Stop!They're already dead!!");
                            }
                        }
                    }
                }
            }
        })
    }
    function checkWins() {
              	if (wins === characters.length) {
              		console.log(wins);
                    alert("The Force Is With You!");
                    $("#restart").show();
                    $("#restartButton").click(function() { location.reload(); });
                } 

            }
            

    //create entire fight sequence function
    function fight() {
    	
    	console.log("attack power is "+ attPower);

        $(".strike").on("click", function() {
            var attHealth = attacker.healthPoints;
            
            /*	var attHealth = attacker.healthPoints;
            var defHealth = defender.healthPoints;
            var defCounter = defender.counterAttack;*/
            console.log("Attacker is " + attacker);
            console.log("Defender is " + defender);
            //return new health values,etc
            //function updateHealth() {
            //reduce opponent HP by attPower and alert
            defender.healthPoints = defender.healthPoints - attacker.attack;
            console.log("defender health left is " + defender.healthPoints);
            $("#defHP").html(defender.healthPoints);
            $("#attDetails").append("<p>You attacked " + defender.name + " with " + attacker.attack + " damage</p>");
            //reduce attackerHP by counterattack power and alert
            attHealth = attHealth - defender.counterAttack;
            console.log("attacker health left is " + attacker.healthPoints);
            $("#attHP").html(attHealth);
            //increase attPower by base attack power
            //if(clickCount===1){
            attacker.attack = attPower + attacker.attack;
            //}
            //}
            //updateHealth();
            //return attHealth;
            //create function to check for wins
           
                if (attacker.healthPoints <= 0) {
                    alert("You Lose");
                    $("#restart").show();
                    $("#restartButton").click(function() { location.reload(); });
                } 
                 else if (defender.healthPoints<=0) {
                   console.log(defender);
                   wins++;
                   console.log("winsbf: "+wins);
                    checkWins();
                    alert("You Win. Pick a new character");
                }
      
        })
        attChoice();
    defChoice();
    }

    fight();
})