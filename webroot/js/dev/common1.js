$(document).ready( function(){
		//test comment
		var $com1_cardEditor =  $("#ce-cardEditor").data({curLineId:"1"});;
		var $com1_mainWord =  $("#ce-ins-1").data({"dicIns":"#ce-ins-3"});
		var $com1_moreWord =  $("#ce-ins-2");//.data({"tip":"#ce-ins-1"});
		var $com1_translWord =  $("#ce-ins-3").data({"dicIns":"Type here a translation"});
		var $com1_exWord =  $("#ce-ins-4");//.data({"tip":"Type here a example"});
		var $com1_defWord =  $("#ce-ins-5");//.data({"tip":"Type here a defenition"});
		var $com1_synWord =  $("#ce-ins-6");//.data({"tip":"Type here a synonims"});
		var $com1_plusMenu =  $(".ce-plusMenu span", "#ce-cardEditor");
		var $com1_inputBlock =  $("#ce-inputBlock");
		var $com1_inlineMiddleDiv =  $("div[id^='ce-ins-']", "#ce-cardEditor");
		//input line
		var $com1_inStr = $("#ce-inStr");
		//this block slides down with button "translate"
		var $com1_inBlTrWrap = $("#ce-inBlTrWrap");
		var $com1_langTo = "ru";
		var $com1_langFrom = "en";
		var $com1_insInAlert = $("#dic-insInAlert");
		var $com1_dicWrapper = $("#dic-dicWrapper");
		var $com1_dicIns = $("#ce-dicIns");
		var $com1_overlay = $("#ec-overlay");
		var $com1_saveCardBtn = $("#ce-saveCardBtn");
		var $com1_inpBlOk = $("#ce-inpBlOk");
		var $com1_dicWrapperCtrl = $("#dic-dicWrapperCtrl");


		//if($com1_inputBlock.is(":hidden") ) {
			var $com1_timerInputStr = window.setTimeout(
				function(){
					$com1_mainWord.trigger("click");
				},
				3000
			);
		//}

		var cardDataLookUp = function(){
			var $res = '';
			$com1_inlineMiddleDiv.each(function(){				
				var $thisLine = $(this);				
				if($thisLine.find("span.ce-insStrText").text() !== '' ) {
					$res = '1';
					return false; 
				}			
			});
			
			if($res !== ''){
				$com1_saveCardBtn.attr("disabled",false);
			}else{
				$com1_saveCardBtn.attr("disabled","disabled");
			}
		
		}




		//?? toDel??
		$com1_cardEditor.hover(function(){
			$(this).addClass("ce-cardEditorActive");
		},
		function(){
			$(this).removeClass("ce-cardEditorActive");
		});

		
		$com1_inlineMiddleDiv.hover(function(){
			var $thisLine = $(this);
			var $thisLineId = $thisLine.attr("id");
			//cur line
			$(this).addClass("ce-currentLineActive");
				
			//menu
			var $menuLine = $( "#ce-plus-ins-"+$thisLineId.replace("ce-ins-","") );
			
			if( !$($menuLine).hasClass("ce-plusMenuActive") ){
				$menuLine.addClass("ce-plusMenuHover");
			}			
		},
		function(){	
			//cur line		
			$(this).removeClass("ce-currentLineActive");
			//menu
      $com1_plusMenu.removeClass("ce-plusMenuHover");
		});

		$com1_plusMenu.hover(function(){
			$thisLine = $(this);
			if( !$thisLine.hasClass("ce-plusMenuActive") ){
				$thisLine.addClass("ce-plusMenuHover");
			}
		},function(){
			$thisLine.removeClass("ce-plusMenuHover");
		});

		

		//this is a click on the fileds in the editior.
		
		$com1_inlineMiddleDiv.click( function(){
			
			//disable save button
			$com1_saveCardBtn.attr("disabled","disabled");
			

			
			//treatment of the line which we has left.
			
			var $prevLineId = $com1_cardEditor.data("curLineId");	
			//??					
			$com1_inStr.css({"height":"20px"});	
			var $prevLine = $("#ce-ins-"+$prevLineId);
			var $prevTextBlock = $prevLine.find("span.ce-insStrText");	
			var $prevText = $.trim($prevTextBlock.text());		
			if( $prevText === '') {					
						//$prevTextBlock.prev().show();
						$prevLine.fadeOut();							
			} else {
				//$prevTextBlock.prev().hide();
			}												
			$prevLine.removeClass("ce-currentLine");

		//current line deal
		
			var $thisLine = $(this);
			var $thisLineId = $thisLine.attr("id");												
			var $thisTextBlock = $thisLine.find("span.ce-insStrText");
			var $thisTipBlock = $thisTextBlock.prev();			
			var $thisText = $.trim($thisTextBlock.text());
			
			//var $thisLineHeight = $thisLine.height();
			
			$thisLine.show();
		
			if( $thisText === '') {										
					$thisTipBlock.show();
					$com1_inStr.addClass("ce-inputTip");
					var $thisTipText = $thisTipBlock.text();						
					$com1_inStr.val($thisTipText);
					$com1_inBlTrWrap.hide();												
			} else {
				$thisTipBlock.hide();
				$com1_inStr.removeClass("ce-inputTip");
				$com1_inStr.focus().val($thisText);
				$com1_inBlTrWrap.slideDown();
			}					
	
			$thisLine.addClass("ce-currentLine");


			$com1_cardEditor.data("curLineId",$thisLineId.replace("ce-ins-",""));
			//changing active plus menu item.			
			$com1_plusMenu.removeClass("ce-plusMenuActive ce-plusMenuHover");
			$("#ce-plus-ins-"+$thisLineId.replace("ce-ins-","") ).addClass("ce-plusMenuActive");
			
			
			$com1_inputBlock.hide();

					var cardEditorPos = $com1_cardEditor.offset();			
					var posMainWord = $thisLine.offset();
					
					//set input line next to current line;		
					var setTop = (posMainWord.top - cardEditorPos.top) + $thisLine.height() + 2; 
					var setLeft = (posMainWord.left - cardEditorPos.left) - 30; 
					
					$com1_inputBlock.css({"left":setLeft,"top":setTop});
					$com1_inputBlock.show().addClass("ce-inputStringDisabled");
					var timer = window.setTimeout(function(){	
						 $com1_inputBlock.animate(
							 	{					    
							    top: '175'
							  },
							 	500,
							 	function() {
							    $com1_inputBlock.removeClass("ce-inputStringDisabled");
							    $com1_inStr.attr("disabled",false).focus();
							  }
						 );
						},500
					)			
		
		});

		

	
		$com1_plusMenu.click(function(){
			clearTimeout($com1_timerInputStr);
			var $this = $(this);
			var insId = $this.attr("id").replace("ce-plus-ins-","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ce-ins-"+insId);
				insIdObj.trigger("click");
			}
		});	


		$com1_inStr.focus(function(){
		  	var $curLineId = $com1_cardEditor.data("curLineId");
		  	var $curLineTextBlockText = $("#ce-ins-"+$curLineId).find("span.ce-insStrText");
		  	if( $curLineTextBlockText.text() === '' ) {
		  		$(this).val('');
		  		//$curLineTextBlockText.prev().hide().end().show().text('/');
		  	}	
		});
		
		//creating input string elastic whith the  plugin.
		$com1_inStr.elastic();
		
		$com1_inStr.keyup( function() {									
			
		  			//getting string from input and putting it in corresopndent card line	
		  			var $curLineId = $com1_cardEditor.data("curLineId");
		  			var $curLine = $("#ce-ins-"+$curLineId);
		  			var $curLineTextBlock = $curLine.find("span.ce-insStrText");
		  			
		  			var $curLineTipBlock = $curLine.find("span.ce-insStrTip");
		  			//??
		  			//var $curLineTipBlockText = $curLineTipBlock.text();
		  			
		  			var inStrText = $.trim($com1_inStr.val());
		  			
			  		if( inStrText === '') {
			  			$curLineTipBlock.show();
			  			$com1_inStr.addClass("ce-inputTip");
			  		} else {
			  			$curLineTipBlock.hide();
			  			$com1_inStr.removeClass("ce-inputTip");
			  			$com1_inBlTrWrap.slideDown();
			  		}
		  			
		  			//printing the text from input to the correspondent line;				
						$curLineTextBlock.text( inStrText );	  
							
							/*			
			  			testWordLineEmpty();
		  			
			  			ii = 0;
			  			window.clearInterval(keyUpAnim);
							

			  			com1.insertId.parent().animate({ backgroundColor: "#C3D9FF" }, 500);	
			  						  			
			  			keyUpAnim = window.setInterval( function() {
			  				
			  				ii++;			  				
				  			if( ii >= 1 ) {
				  				com1.insertId.parent().animate({ backgroundColor: "#e1ecff" }, 1000);
				  				ii = 0;
				  				window.clearInterval(keyUpAnim);
				  			}

			  			},1000
			  		);
			  		*/

		});






		
		$com1_inpBlOk.click(function(){
			
			var $curLineId = $com1_cardEditor.data("curLineId");
		  var $curLineTextBlockText = $("#ce-ins-"+$curLineId).find("span.ce-insStrText");
		  
		  if( $curLineTextBlockText.text() === '' ) {
		  	$("#ce-ins-"+$curLineId).fadeOut();
		  }	
		  			
			$com1_inputBlock.hide();
			$com1_inlineMiddleDiv.removeClass("ce-currentLine");
			$com1_plusMenu.removeClass("ce-plusMenuActive");
			
			cardDataLookUp();
		});

		
		$('a.ec-but-minibutton').bind(
			{
				mousedown: function() {
					$(this).addClass('ec-but-mousedown');
				},
				blur: function() {
					$(this).removeClass('ec-but-mousedown');
				},
				mouseup: function() {
					$(this).removeClass('ec-but-mousedown');
				}		
			}
			//return false;		
		);		
		
		
	  //?? toDel	
		//$("#ce-inpBlClear").click(function(){
			//return false;
		//});




		//saving of the card
    $("#saveCardMain").click(function(){

    	
	    var cardObj = {
	    								//"data[Theme][id]": themeName.data('id'),
	    								//"data[Theme][theme]": themeName.data('theme'),
	    								"data[Card][word]": com1.mainWord.text(),
	    								"data[Card][more]": com1.mainMore.text(),
	    								"data[Card][tr]": com1.wordTran.text(),
	    								"data[Card][ex]": com1.exTran.text(),
	    								"data[Card][def]": com1.defTran.text(),
	    								"data[Card][syn]": com1.synTran.text() 
	    							};
    							
      $.ajax({
        type: "POST",
        url: path+"/cards/saveCard",
        dataType: "json",
        data: cardObj,
        success: function(data) {
        	
					
					
        	if ( data.stat === 1 ) {        		
          	$('.newCards').prepend('<li></li>').find('li:first').text(data.word).data(cardObj).css({'color':'red'}).next().css({'color':'blue'});
          	
          	$('#mainWord,#wordTran,#exTran span:last,#defTran span:last,#synTran span:last').empty();
          	com1.cardExt.val('');
          	
			 			$(".additionalRes").hide();
						$(".dicTerms ul").empty().addClass("hide");
						$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive"); 
						
					
						com1.hideArrow.hide().removeClass("hideArrowL hideArrowR");	
							
						if (data.theme){
							themeName.data('id',data.themeId);
							themeName.data('theme',data.themeName);
						}												        	
          	flash_message('saved','flok');
          	
          } else {
          	
          }
          
          
        },
        error: function(){
            alert('Problem with the server. Try again later.');
        }
      });
    });		




	//word submiting for translation
	
    $com1_dicWrapperCtrl.click(function(){
      $com1_dicWrapper.toggle();
    });
	
//CHEck if word is empty or not!!!!!!!!!

						
		$("#ce-inpBlTr").click( function() {
			
		
			var $userWord = $.trim($com1_inStr.val()).toLowerCase();

		
			$("#dic-translFor").text($userWord);
			
			//dictionary preparation
			$(".dic-dicSwBase").hide();
			$(".dic-dicSwBase ul li").remove();
			$("#dic-topResult").text('');
			
	// check uesr word;		
						
			//com.song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+com.songWord+".mp3";
			
				
						$.ajax({
							type: "POST",
							url: path+"/cards/getTransl",
							data: {"data[cardword]": $userWord, "data[langFrom]" : $com1_langFrom, "data[langTo]" : $com1_langTo },
							dataType: "json",					
					    success: function(data){
											
											if( data[0] ) {
									  
												if( data[1] ) {
													
												  var dic = data[1];
												  var typeW = null;
												  												  
												  $.each(dic, function( keyD, valD) {	
												  	
												  			switch(valD[0]){
												  				case(''):
												  					typeW = 'none';
												  					break;
													  			case('noun'):
													  				typeW = 'noun';	
													  				break;										  			
													  			case('verb'):
													  				typeW = 'verb';
													  				break;										  			
													  			case('adjective'):
													  				typeW = 'adjective';
													  				break;											  				
													  			case('adverb'):
													  				typeW = 'adverb';
													  				break;
													  			case('pronoun'):
													  				typeW = 'pronoun';
													  				break;
													  			case('conjunction'):
													  				typeW = 'conjunction';
													  				break;
													  			case('preposition'):
													  				typeW = 'preposition';
													  				break;
													  			case('article'):
													  				typeW = 'article';
													  				break;
													  			case('numeral'):
													  				typeW = 'numeral';
													  				break;
													  			case('suffix'):
													  				typeW = 'suffix';
													  				break;
													  			default:
													  				break;											  				
																}												  	
												  	
												  	
												  	$("li.dic-"+typeW).show();
												  											  	
														$.each(valD[1], function(keyM, valM) {
																
																$("li.dic-"+typeW+" ul").append('<li class="dic-res">'+ valM+'</li>');
																													
														});
												  	
												  });
											  
												} else {
													
												}

												
									
											  var $joinedSentence = data[0];
											  
											  var $translatedSentence = '';
											  
											  $.each($joinedSentence, function(key, value) { 														
														$translatedSentence += value[0];										
												});	
												
												
												$("#dic-topResult").text($translatedSentence);

												$com1_dicWrapper.show();
												
												
											} else {
											  //alert('not');
											}					
											
											//sliding up translate button
											$com1_inBlTrWrap.slideUp();
					      },
					    error: function(e, xhr, settings, exception){
					      alert('Problem with the server. Try again later.');
					    }
          	});
			
			
			//official google
			//initialize(userWord);
			
			
		
			return false;
		});


		$com1_dicWrapper.delegate(".dic-res","click",function(e){
			
			if(e) e.stopPropagation();
			if(e) e.preventDefault();	
			
			$com1_inputBlock.hide();
			$com1_overlay.show();
			var $thisLine = $(this);
			//$("#dic-dicWrapper").scrollTop(200);
			//alert($thisLine.offset().top);
			
					 $("html:not(:animated),body:not(:animated)").animate(
						{
							scrollTop: $("body","html").offset().top
						},
						 500,
						 function() {
						 	//alert('compl');
    					// Animation complete.
  					}
					);
				

			
			$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");
			$thisLine.addClass("dic-resActive");
			
			//var dicPos = $com1_dicWrapper.offset();			
			//var insInAlertPos = $thisLine.offset();
			
			//set input line next to current line;
		
			//var setTop = (insInAlertPos.top - dicPos.top) + $thisLine.height() + 2; 
			//var setLeft = (insInAlertPos.left - dicPos.left) - 50; 

			
			//var setTop = (insInAlertPos.top) + $thisLine.height() - 70; 
			//var setLeft = (insInAlertPos.left) - 50; 			
			//due to ie7
			//$com1_insInAlert.appendTo("body");
			//$com1_insInAlert.css({"top":setTop,"left":setLeft});
			$com1_insInAlert.toggle();
				

			var $curLine = $com1_cardEditor.data("curLineId");
			var $insInto = $("#ce-ins-"+$curLine).data("dicIns");

			$($insInto).find("span.ce-insStrTip").hide().end().find("span.ce-insStrSug").html($thisLine.text());
			
		});


	 	$com1_insInAlert.bind("clickoutside", function(){
	 		
	 		$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");
	 		
	 		$(this).hide();
	 		
	 		$com1_overlay.hide();
	 		
	 	});

		$com1_dicIns.click(function(){
			//temp.  toDel
			$com1_insInAlert.hide();
			$com1_overlay.hide();
		});






				
});
