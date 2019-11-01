function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function dice() {
	
	var bet = Number(document.forms["l7"]["d"].value);
	var dollars = bet;
	var $1, $2, sum;
	var rolls = 0;
	var max = 0;
	var maxRolls = 0;

	if(dollars <= 0) {
		alert("Please input a whole number of dollars greater than zero!");
	} else {
		while(dollars > 0){
			$1 = rollDice();
			$2 = rollDice();
			sum = $1 + $2;
			rolls++;
			if(sum != 7) {
				dollars--;
			} else {
				dollars += 4;
				if(dollars > max) {
					max += (dollars - max);
					maxRolls = rolls;
				}
			}
		}
	}
	
	document.getElementById("submit").innerHTML = "Play Again?";
	document.getElementById("start").innerHTML = bet;
	document.getElementById("rolls").innerHTML = rolls;
	document.getElementById("max").innerHTML = max;
	document.getElementById("maxRolls").innerHTML = maxRolls;
	return false;
	
}