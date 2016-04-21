
$(document).ready(function(){
	$.ajax({
		headers: {'X-Mashape-Key': '8pnTvyQqxGmsh40bNkEbtLFoxCvpp11bFztjsnGIp5D90WOosC',
		'Content-Type':'application/x-www-form-urlencoded',
		Accept:'application/json'
	},
	url:'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
	success:function(response) {
		var r = JSON.parse(response);
		$("#quote").html(r.quote);
		$("#author").html(r.author);
	}

	});
});