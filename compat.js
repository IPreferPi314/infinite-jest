function displCompat() {
	var n1 = document.getElementById('name1').value;
	var n2 = document.getElementById('name2').value;
	
	//DEBUG:
	//n1 = "Joshua Gillis";
	//n2 = "Eric Coons";

	//alert(n1);
	//alert(n2);
	
	if (n1.length === 0 || n2.length === 0) {
		document.getElementById('result').innerHTML = "Please enter two names";
	} else {
		var result = calcCompat(n1,n2);
		var result_str = "There are " + result + " people more compatible than " + n1 + " and " + n2 + ".";
				document.getElementById('result').innerHTML = result_str;
		//console.log(result_str)
	}
}

function calcCompat(n1, n2) {
	//var n1 = document.getElementById("n1").value;
	//var n2 = document.getElementById("n2").value;

	//DEBUG:
	//n1 = "Joshua Gillis";
	//n2 = "Eric Coons";

	vowels = Array(5);
	vowels[0] = (n1.match(/a/gi)||[]).length + (n2.match(/a/gi)||[]).length + 1;
	vowels[1] = (n1.match(/e/gi)||[]).length + (n2.match(/e/gi)||[]).length + 2;
	vowels[2] = (n1.match(/i/gi)||[]).length + (n2.match(/i/gi)||[]).length + 3;
	vowels[3] = (n1.match(/o/gi)||[]).length + (n2.match(/o/gi)||[]).length + 4;
	vowels[4] = (n1.match(/u/gi)||[]).length + (n2.match(/u/gi)||[]).length + 5;

	let result = '';

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
