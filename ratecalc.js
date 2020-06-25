


var text;

function validate(){
	var deposit = document.getElementById('a').value; 
	parseInt(deposit)

if(deposit == "" || deposit == 0 || deposit == NaN){
	text = ' Enter your initial deposit to proceed.';
	document.getElementById('id1').innerText = '0%';
	document.getElementById('id2').innerHTML = ' Enter your initial deposit to proceed.';
	document.getElementById('id3').innerHTML = NaN;
	
} 

if(deposit == 1 || deposit <= 50000){

	text = parseInt(deposit)*25/100+ parseInt(deposit)

		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '25%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "    | to be paid every month for 6 months";
}
else if (deposit > 50000 && deposit<=100000){
		text = parseInt(deposit)*20/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '20%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "    | to be paid every month for 6 months";
	} 
	else if(deposit > 100000 && deposit <= 200000){
		text = parseInt(deposit)*18/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '18%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "     | to be paid every month for 6 months";
	}
	 else if(deposit > 200000 && deposit <= 400000){
		text = parseInt(deposit)*15/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '15%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "     | to be paid every month for 6 months";
	}
	else if(deposit > 400000 && deposit <= 600000){
		text = parseInt(deposit)*11/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '11%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "     | to be paid every month for 6 months";
	}
	else if(deposit > 600000 && deposit <= 800000){
		text = parseInt(deposit)*7/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '7%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "    | to be paid every month for 6 months";
	} 
	else if(deposit > 800000 && deposit <= 1000000){
		text = parseInt(deposit)*5/100+ parseInt(deposit)
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id1').innerText = '5%';
		document.getElementById('id3').innerHTML = 'N' + (text/6).toFixed(2) + "   | to be paid every month for 6 months";
	} 
	else{
		text = "Enter amount to proceeds"
		document.getElementById('id2').innerHTML = text;
		document.getElementById('id3').innerHTML = NaN
	}
	
	
	
	
	
}

