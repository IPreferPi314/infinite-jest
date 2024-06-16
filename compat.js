function displCompat() {
	var n1 = document.getElementByID("n1").value.trim();
	var n2 = document.getElementByID("n2").value.trim();
	
	//DEBUG:
	//n1 = "Joshua Gillis";
	//n2 = "Eric Coons";

	if (n1.length === 0 || n2.length === 0) {
		document.getElementByID("result").innerHTML = "Please enter two names";
	} else {
		result = calcCompat();
		result_str = "There are " + result + " people more compatible than " + n1 + " and " + n2 + ".";
		document.getElementByID("result").innerHTML = result_str;
		//console.log(result_str)
	}
}

function calcCompat() {
	//var n1 = document.getElementByID("n1").value;
	//var n2 = document.getElementByID("n2").value;

	//DEBUG:
	//n1 = "Joshua Gillis";
	//n2 = "Eric Coons";

	vowels = Array(5);
	vowels[0] = (n1.match(/a/gi)||[]).length + (n2.match(/a/gi)||[]).length + 1;
	vowels[1] = (n1.match(/e/gi)||[]).length + (n2.match(/e/gi)||[]).length + 2;
	vowels[2] = (n1.match(/i/gi)||[]).length + (n2.match(/i/gi)||[]).length + 3;
	vowels[3] = (n1.match(/o/gi)||[]).length + (n2.match(/o/gi)||[]).length + 4;
	vowels[4] = (n1.match(/u/gi)||[]).length + (n2.match(/u/gi)||[]).length + 5;

	result = '';

	for (let i = 0; i <= 4; i++) {
		for (let j = i + 1; j <= 4; j++) {
			if (vowels[i] == vowels[j]) {
				vowels[i] = 0;
				vowels[j] = 0;
			}
		}
		if (vowels[i] != 0) {
			result += vowels[i];
		}
	}
	return result;
}

//DEBUG: Call function
//displCompat();
