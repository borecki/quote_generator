	$(".button").css({
			"backgroundColor": "#505053",
			"color": "white"
		  });	  
	$(".button").hover(function(){
		$(this).css({
			"backgroundColor": "#151516"
			}, "fast")
		}, 
		function() {
			$(this).css({
			'backgroundColor': '#505053'
		})
	});
	var quote;
	var colors = ["#B26F8F", "#FFE619", "#FF007A", "#14B3CC", "#61b9f9" ]; 
	function getQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(apiResponse) {
				quote = apiResponse;
			/*$(".quote").html(quote.quoteText);
				if(quote.quoteAuthor) {
					$(".author").html(quote.quoteAuthor)
				}*/
			$(".quote").animate({
				opacity: 0
			}, 50,
			function() {
				$(this).animate({
					opacity: 1
				}, 200);
				$('.quote').html(quote.quoteText);
			});
		
			$(".author").animate({
				opacity: 0
			}, 100,
				function() {
					$(this).animate({
						opacity: 1
					}, 600);
				if(quote.quoteAuthor) {
					$(".author").html(quote.quoteAuthor)
				} else {
					$(".author").html("Unknown")
				};
				});
			},		
		})

	var color = Math.floor(Math.random() * colors.length);
		$("html body").css({
        	backgroundColor: colors[color],
        	color: colors[color]
		}, 1000);
	}

$(document).ready(function() {

	getQuote();
	 $('.newQuote').click(function(e) {
		e.preventDefault();
		getQuote();
	});
	
	$('#tweet').on("click", function() {
		window.open("https://twitter.com/intent/tweet?text=\""+quote.quoteText+"\" Author: "+quote.quoteAuthor)
		});	
	
	$('#facebook').on("click", function() {
		window.open("https://www.facebook.com/dialog/share?app_id=184484190795&display=popup&e2e=%7B%7D&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&locale=en_US&mobile_iframe=false&next=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FLJ9CfGDsgQ7.js%3Fversion%3D42%23cb%3Dfc695b77c98c68%26domain%3Dwww.fbrell.com%26origin%3Dhttp%253A%252F%252Fwww.fbrell.com%252Ff41e77777b306%26relation%3Dopener%26frame%3Dfa8c7ad71d1874%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&quote=\""+quote.quoteText+ "\" Author: "+quote.quoteAuthor)
		});		


	
	//$('#facebook').on("click", stolec); 

/* Pobieranie danych do dokumentu z pliku JSON */
	/*function getFromJson(){
    
		$.getJSON('json/dane.json', function(datek){
			var labele = [];
			var colory = [];
			var tabele = [];
	
			for (var j = 0; j < 4; j++) {
				labele[j] = datek.products[j].label;
				colory[j] = datek.products[j].color;
				tabele[j] = datek.products[j].value;
			}
			//console.log(datek.products[1]);
		})
	}
getFromJson(); */ 
			  
});
