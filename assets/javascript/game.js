$(document).ready(function() {

    $("#restart").hide();
    $(".strike").hide();
    //create characters for player to use...each character an object?
    var characters = [
        obiWan = {
            name: "Obi Wan",
            healthPoints: 120,
            attack: 15,
            counterAttack: 15,
            pic: '<img id="attPic" src="./assets/images/obiwan.jpg" alt="Obi Wan Kenobi">',
            key: "obiWan",
            div: "#obiDiv",
        },

        luke = {
            name: "Luke Skywalker",
            healthPoints: 100,
            attack: 6,
            counterAttack: 18,
            pic: '<img id="attPic" src="./assets/images/luke.jpg" alt="Luke SkyWalker">',
            key: "luke",
            div: "#lukeDiv",
        },

        darthMaul = {
            name: "Darth Maul",
            healthPoints: 150,
            attack: 15,
            counterAttack: 25,
            pic: '<img id="attPic" src="./assets/images/maul.jpg" alt="Darth Maul">',
            key: "darthMaul",
            div: "#maulDiv",
        },
        yoda = {
            name: "Master Yoda",
            healthPoints: 80,
            attack: 20,
            counterAttack: 35,
            pic: '<img id="attPic" src="./assets/images/yoda.png" alt="yoda">',
            key: "yoda",
            div: "#yodaDiv",
        }
    ]

    var attacker = {};
    var defender = {};
    var clickCount = 1;
    var wins = 0;
    var attPower;

     //create function to choose attacker
    function attChoice() {
        //get button clicked and put that character in attack div
        $(".charChoice").on("click", function() {
        	 attPower = attacker.attack;
            

            if (clickCount === 1) {
            	
                console.log("You picked an attacker");
                for (var i = 0; i < characters.length; i++) {
                    console.log(this.id);
                    if (this.id === characters[i].key) {
                        attacker = characters[i];
                        $(attacker.div).css("background-color", "green");
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
                
                if (clickCount != 1) {
                    console.log("clicks: "+clickCount);
                    console.log("You picked a defender");
                    
                    for (var i = 0; i < characters.length; i++) {

                        if (this.id === characters[i].key) {
                            defender = characters[i];
                             
                            if  (defender.healthPoints <= 0) {
                                alert("Stop!He's already dead!!");
                            }

                            	 else if (defender.healthPoints > 0) {
                            	 $(defender.div).css("background-color", "blue");
                                console.log(defender);
                                $("#defPic").replaceWith(defender.pic); //only works once?
                                $("#defName").html(defender.name);
                                $("#defHP").html(defender.healthPoints);
                                $(".strike").show();
                                //figure out how to hide picked option
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
                } //not running for some reason?

            }
            

    //create entire fight sequence function
    function fight() {
    	
    	   $(".strike").on("click", function() {
            var attHealth = attacker.healthPoints;
                      
            console.log("Attacker is " + attacker);
            console.log("Defender is " + defender);
            //reduce opponent HP by attack 
            defender.healthPoints = defender.healthPoints - attacker.attack;
            console.log("defender health left is " + defender.healthPoints);
            $("#defHP").html(defender.healthPoints);
            //reduce attackerHP by counterattack power and alert
            attHealth = attHealth - defender.counterAttack;
            console.log("attacker health left is " + attacker.healthPoints);
            $("#attHP").html(attHealth);
            $("#attDetails").append("<p>You attacked " + defender.name + " with " + attacker.attack + " damage</p><p>"+defender.name+" attacked you with "+defender.counterAttack+" damage</p><p>--------</p>");
            //increase attPower by base attack power
            attacker.attack = attPower + attacker.attack; //hits a snag after defeating the first opponent because attacker.attack has been reset to higher value
                       
            //create function to check for wins
           
                if (attacker.healthPoints <= 0) {
                    alert("You Lose");
                    $("#restart").show();
                    $("#restartButton").click(function() { location.reload(); });
                } 
                 else if (defender.healthPoints<=0) {
                   console.log(defender);
                   wins++;
                    $(defender.div).css("background-color", "red");
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