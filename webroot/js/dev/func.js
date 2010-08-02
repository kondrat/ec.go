
		//flash message

		function flash_message(message, classs ) {
		
				$('div.fl').empty();
				$('div.fl').append('<div id="flashMessage" class="'+classs+'">'+message+'</div>');
						var $alert = $('#flashMessage');
						var alerttimer = window.setTimeout(function () {
							$alert.trigger('click');
						}, 4500);
						$alert.animate(
							{
								height: $alert.css('line-height') || '52px'
							}, 
							800
						).click(function () {
									window.clearTimeout(alerttimer);
									$alert.animate({height: '0'}, 400);
									$alert.css({'border':'none'});							
						});
		}


		
		

   //adding cursor pointer to all clicables elements;   
    (function($){
      $.event.special.click = {
        setup: function() {       	
        	if( !$(this).hasClass("cardEditor") ) {
          	$(this).css('cursor','pointer');
          }
          return false;
        },
        teardown: function() {
          $(this).css('cursor','');
          return false;
        }
      }
    })(jQuery);    			
		
/*
		function useraction_tooltip(target_items){
			var prev_tooltip;
			$(target_items).each(function(i){
				var my_tooltip = $(this).attr('title');	
								
				$(this).removeAttr("title").mouseover(function(){
					$(".userActions").text(my_tooltip).addClass("userActionTip");												
				}).mouseout(function(){
					$(".userActions").text(prev_tooltip).removeClass("userActionTip");
				}).click(function(){							
					$(".userActions").text(my_tooltip);
					prev_tooltip = my_tooltip;
				});
			});
		}
*/

    //drag the main card editor
		$(function() {
			$(".cardEditor").draggable( { handle:"div.moveCardTable",zIndex: 2700,addClasses: false } );
		});











/*
	  function initialize(tt) {
	   // var text = document.getElementById("UserWord").innerHTML;
	    google.language.detect(tt, function(result) {
	      if (!result.error && result.language) {
	        google.language.translate(tt, result.language, "ru",
	          function(result) {
	          	var translated = document.getElementById("wordTran");
	          	if (result.translation) {
	            	translated.innerHTML = result.translation;
	          	}
	        });
	      }
	    });
		}
*/   			
    			
    			
    			
    			
    			
    			
    			
    			
//experiment
/*
//var baseurl = 'http://search.yahooapis.com/ImageSearchService/V1/imageSearch?appid=YahooDemo&output=json&query=';
var baseurl = 'http://translate.google.com/translate_a/t?client=t&hl=ru&sl=en&tl=ru&otf=1&pc=0&text=';
//var baseurl = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&sl=en&tl=ru&restrict=pr%2Cde&client=te&q=';
function callback(data){};
 function search() {
     var search = $("#search").val();
     console.log(search);
     var surl = baseurl + escape(search) + '&callback=?'
     $.getJSON(surl, function(data) {
     	//data = '(' + data + ')';

     	var res = '<h1>Search for '+search+'</h1>';
     	$("#result1").html(res);
     	console.log('('+data+')');
     	console.log(data.query);
     	
          var res = '<h1>Search for '+search+'</h1>'
          res += '<p>There were '+data.ResultSet.totalResultsAvailable+' results.</p>'
          for(var i=0; i<data.ResultSet.Result.length; i++) {
               var result = data.ResultSet.Result[i]
               var resultStr = '<img src="'+result['Thumbnail']['Url']+'" align="left">';
               resultStr += '<a href="'+result['ClickUrl']+'">'+result['Title']+'</a><br clear="left"/>'
               res+=resultStr
           }
          $("#result").html(res)
         
      })
 }

 $(document).ready(function() {
     $("#searchBtn").click(search)
 });
 */		

