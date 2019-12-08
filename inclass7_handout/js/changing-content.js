$(function() {
	$('li:contains("pine")').text("almonds") ;
	
/* 	for (let hot of $('li.hot')) {
		let html = hot.html();
		$(hot).html('<em>' + html + '</em>');
	} */
/* 	
	$(".hot").html(function(i,old) {
		return'<em>' + old + '</em>';
	}); */
	
	$('li.hot').html(function(){
		return '<em>' + $(this).text() + '</em>';
	});
	
	$('li#one').remove();
	
	
	
	

});