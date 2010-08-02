$(document).ready(function(){
	$("#printSet").click(function(){
		
		$('div').each(function(i) {
			if( !$(this).hasClass("printSet") ){
				if(!$(this).hasClass("printCardsWrapper") ) {
					
					$(this).addClass('hideAll');
				}
				//alert(i);
			} else {
				//alert(i);
				
				$(this).removeClass("push-1").appendTo('body');
				
			}
		});
		$(".printCardsWrapper").addClass("prCarWrPrint");
		$(".printSet").removeClass("span-10").addClass("prSetPrint");
		$(".printCardTd").addClass("prCarTdPrint");
		
		
		
	});
});