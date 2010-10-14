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
		/*
		var $com1_langTo = "ru";
		var $com1_langFrom = "en";
		*/
		var $com1_insInAlert = $("#dic-insInAlert");
		var $com1_dicWrapper = $("#dic-dicWrapper");
		var $com1_dicIns = $("#ce-dicIns");
		var $com1_overlay = $("#ec-overlay");
		var $com1_saveCardBtn = $("#ce-saveCardBtn");
		var $com1_inpBlOk = $("#ce-inpBlOk");
		var $com1_inpBlTr = $("#ce-inpBlTr");
		var $com1_dicWrapperCtrl = $("#dic-dicWrapperCtrl");
		var $com1_wordHisList = $("#dic-wordHisList");
		//input line in translation block.
		var $com1_word2Transl = $("#dic-word2Transl");
		var $com1_word2TranslBtn = $("#dic-word2TranslBtn");
		//don't in use for today
		var $com1_langToFrom = $("#dic-langToFrom");
		//up the dic if too many results
		var $com1_bottomUp = $("#dic-bottomUp");
		
		//langPad
		var $com1_langPad = $("#dic-langPad");
		var $com1_langFrom = $("#dic-langFrom");
		var $com1_langTo = $("#dic-langTo");
		
		var $com1_langFromOpt = $("#dic-langFromOpt");		
		var $com1_langToOpt = $("#dic-langToOpt");
		
		var $com1_langToOptItem = $("#dic-langToOpt option");
		var $com1_langFromOptItem = $("#dic-langFromOpt option");
		
		var $com1_langSwitch = $("#dic-langSwitch");
		

		var $com1_ltLangToFrom = $("#lt-langTo,#lt-langFrom");
		var $com1_ltLangPad = $("#lt-langPad");		
		var $com1_ltCloseLangPad = $("#lt-closeLangPad");






			var $com1_timerInputStr = window.setTimeout(
				function(){
					$com1_mainWord.trigger("click");
				},
				3000
			);


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
		

	 		
		$com1_inlineMiddleDiv.click( function(e){
			
			
			if(e) e.stopPropagation();
			if(e) e.preventDefault();
			
			
			
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

		
		//bind outside event
		$com1_inputBlock.bind("clickoutside", function(){	 				 			
	 			//$com1_inpBlOk.click();		
	 	});	
	
		$com1_plusMenu.click(function(e){
			if(e) e.stopPropagation();
			if(e) e.preventDefault();
			clearTimeout($com1_timerInputStr);
			var $this = $(this);
			var insId = $this.attr("id").replace("ce-plus-ins-","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ce-ins-"+insId);
				insIdObj.click();
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
      $(this).toggleClass('ttm');
      //catting off first aminamion
      clearTimeout($com1_timerInputStr);
    });
	

		$com1_inpBlTr.click(function(){
			
			$com1_dicWrapperCtrl.trigger("click");
			
			var $word2Transl = $com1_inStr.val();
			$com1_word2Transl.val($word2Transl);
			
			$com1_word2TranslBtn.trigger("click");
			
			
			
		});


						
		$com1_word2TranslBtn.click( function() {
			
		
			var $userWord = $.trim($com1_word2Transl.val()).toLowerCase();

		
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
							//temp
							//data: {"data[cardword]": $userWord, "data[langFrom]" : $com1_langFrom, "data[langTo]" : $com1_langTo },
							data: {"data[cardword]": "get", "data[langFrom]" : "en", "data[langTo]" : "ru" },
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
												//history line prepending new word.
												$com1_wordHisList.find("span.dic-wordHisFirst").removeClass("dic-wordHisFirst");
												
												var $userWordCut = '';
												if($userWord.length > 10 ){
													$userWordCut = $userWord.substr(0,10)+"...";
												} else {
													$userWordCut = $userWord;
												}

												$com1_wordHisList.prepend('<span class="dic-wordHis dic-wordHisFirst"></span>').find("span:first").data("userWord",$userWord).text($userWordCut);												

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

		/*
		var temp = 
								{"The Red Violin"},{"yello"},{"red"}

								;*/
		var temp2 = [
									["violin","yello","red"]
								];


		$("#testBut").click(function(){
						
						$("#translTempWrapper").empty();
			
						$.ajax({
							type: "POST",
							url: path+"/cards/getTransl",
							data: {"data[cardword]": "get", "data[langFrom]" : "en", "data[langTo]" : "ru" },
							dataType: "json",					
					    success: function(data){
											
											if( data[0] ) {
									  
												if( data[1] ) {
													
													$( "#translTemplate" ).tmpl( temp2
																											).appendTo("#translTempWrapper");
													
																							  
												} else {
																															/*	, { 
																															    gt: function( separator ) {
																															        return this.data.item.join( separator );
																															    }	*/												
												}
												
											}				
											
					      },
					    error: function(e, xhr, settings, exception){
					      alert('Problem with the server. Try again later.');
					    }
          	});			
		})




	 	//lang pad control
	 	/*

		$com1_langPad.bind("clickoutside", function(){	 			
	 			$(this).hide();
	 			//$com1_langToFrom.click();
	 			//$com1_overlay.hide(); 
	 			$com1_langToFrom.removeClass("dic-langToFromActive");		
	 	});
	 	
	 	//must be after corresopondent pad whith clickoutside

		$com1_langToFrom.click(function(e){
		
			if(e) e.stopPropagation();
			if(e) e.preventDefault();
			
			var $thisCtrlPanel = $(this);
			if( $com1_langPad.is(":hidden") ) {
				$com1_langPad.show();
				$thisCtrlPanel.addClass("dic-langToFromActive");
			}else{
				$com1_langPad.hide();
				$thisCtrlPanel.removeClass("dic-langToFromActive");
			}
			
		});
		*/







	
		$com1_langFromOptItem.click(function(){
			$com1_langFrom.text($(this).val()).animate(
												{"background-color": "lightgreen"},
												{duration: 1000}
											).animate(
												{"background-color": "#f5f5dc"},{
													duration: 1000,
													complete: function() {$(this).removeAttr("style")}
												}
											);
			
											
		});
		
		$com1_langToOptItem.click(function(){
			$com1_langTo.text($(this).val()).animate(
												{"background-color": "lightgreen"},{duration: 1000}
											).animate(
												{"background-color": "#f5f5dc"},{
													duration: 1000,
													complete: function() {$(this).removeAttr("style")}
												}
											);
			
		});

		
		$com1_langSwitch.click(function(){
			
			var $curLangFrom = $com1_langFromOpt.val();
			var $curLangTo = $com1_langToOpt.val();
			$com1_langFromOpt.val($curLangTo);
			$com1_langToOpt.val($curLangFrom);
			
			
		});		

		/*
		$com1_langFromOpt.mouseleave(function(){
			$com1_langFromOpt.hide();
			$com1_langToOpt.hide();
		});
		*/
		

		
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
		
		//up page from bottom of the dic
		$com1_bottomUp.click(function(){
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
		});

		$com1_wordHisList.delegate(".dic-wordHis","click",function(){
			$com1_word2Transl.val($(this).text());
			if($com1_dicWrapper.is(":hidden")){
				$com1_dicWrapperCtrl.click();
			}
			$com1_word2TranslBtn.click();
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

		$(".dic-toDel").click(function(){
			var $i = 20;
			for($i = 0; $i<= 20; $i++){
				$com1_wordHisList.prepend('<span class="dic-wordHis">test Word '+$i+'</span>');
			}
		});




		//lt lang pad play
		
			//to close this lang pad by several methods.
			function ltLangPagClose(){
				$com1_ltLangPad.hide();
				$com1_ltLangToFrom.removeClass("lt-langToFromActive");
			};
			
			$com1_ltLangPad.bind("clickoutside", function(event){	
				console.log(event.target);			
				ltLangPagClose();
		 	});
			
	

		$com1_ltLangToFrom.click( function(event){
			
				if(event) event.stopPropagation();
				if(event) event.preventDefault();

				$thisLang = $(this);
				
				//$com1_overlay.show();	
							
				if( $com1_ltLangPad.is(":hidden") ) {
					$com1_ltLangPad.show();
					$thisLang.addClass("lt-langToFromActive");
				} else {
					ltLangPagClose();
				}
				
				$("#lt-langFromOpt").val( $thisLang.text().toLowerCase() );
				

		});
		
		$("#lt-langFromOpt option").click(function(){
			
			
			var t =	$(this).val().toUpperCase();
			$com1_ltLangToFrom.filter(".lt-langToFromActive").text(t);
			setTimeout(function(){
				$com1_ltLangPad.fadeOut();
				$com1_ltLangToFrom.removeClass("lt-langToFromActive");
			}, 1000);
			
		});	
	
		$com1_ltCloseLangPad.click(function(){
				$com1_ltLangPad.fadeOut();
				$com1_ltLangToFrom.removeClass("lt-langToFromActive");
		});
	
				
});
