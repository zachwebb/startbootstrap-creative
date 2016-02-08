$(function(){
	
	$( document ).ready(function() {

	    /* Basic Gallery */
	    $( '.swipebox' ).swipebox();
	    
	    /* Video */
	    $( '.swipebox-video' ).swipebox();

    });

	var portfolioContent = {

		handlerData:function(resJSON){

			var templateSource = $("#portfolio-content").html(),

			template = Handlebars.compile(templateSource),

			portfolioHTML = template(resJSON);

			$('#portWrap').html(portfolioHTML);

		},
		loadPortfolio : function(){

			$.ajax({
			url:"data/manifest.json",
			method:'get',
			success:this.handlerData

			})
		}
	};

	$(document).ready(function(){

		portfolioContent.loadPortfolio();

	});

	$('#my-email').html(function(){
		var e = "zach";
		var a = "@";
		var d = "ninethreestudios";
		var c = ".com";
		var h = 'mailto:' + e + a + d + c;
		$(this).parent('a').attr('href', h);
		return e + a + d + c;
	});
	
});