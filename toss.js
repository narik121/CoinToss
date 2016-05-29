var headCount = 1;
var	tailcount = 1;

var won = 0;
var lost = 0;

var wonbyHeads = 0;
var wonbyTails = 0;

function heads (){
	var toss_result = flip();
	
	toss(toss_result,true);
	
}

function tails (){
	var toss_result = flip();
	
	toss(toss_result,false);
	
}

function toss(result,coin) {
	
		
		var toss_result = result;
		var coin = coin;
		var div_field = document.getElementById("result");
		
		var head_filed = document.getElementById("headsCount");
		var tail_filed = document.getElementById("tailsCount");
		
		var stats_won = document.getElementById("stats_won");
		var stats_lost = document.getElementById("stats_lost");
		
		var output_result = toss_result^coin;
		
		var image_field = document.getElementById("image");
		
		//image_field.innerHTML = "<img src = \".\\Coin.gif\"/>";
		
		if(output_result) {
			
			coin ? (head_filed.innerHTML = headCount++) : (tail_filed.innerHTML = tailcount++);
			div_field.innerHTML = "<div class = \"alert alert-success\"><strong><h3 class=\"text-center\">You Won!</h3></strong></div>";
			++won;
			stats_won.innerHTML = "Won : "+won;
		}
		
		else {
			coin ? (tail_filed.innerHTML = tailcount++) : (head_filed.innerHTML = headCount++);			
			div_field.innerHTML = "<div class = \"alert alert-danger\"><strong><h3 class=\"text-center\">You Lost!</h3></strong> </div>";
			++lost;
			stats_lost.innerHTML = "Lost : " +lost;
		}
}

function flip () {
	
	var result = Math.floor(1 + Math.random() * 2);
	return result == 1 ? true : false;
}