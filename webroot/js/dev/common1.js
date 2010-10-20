$(document).ready( function(){
	
		//test comment
		var $com1_cardEditor =  $("#ce-cardEditor").data({curLineId:"1"});
		
		var $com1_mainWord =  $("#ce-ins-1").data({"side":1});
		var $com1_moreWord =  $("#ce-ins-2").data({"side":3});
		var $com1_translWord =  $("#ce-ins-3").data({"side":2});
		var $com1_exWord =  $("#ce-ins-4").data({"side":3});
		var $com1_defWord =  $("#ce-ins-5").data({"side":3});
		var $com1_synWord =  $("#ce-ins-6").data({"side":3});
		
		var $com1_plusMenu =  $(".ce-plusMenu span", "#ce-cardEditor");
		var $com1_inputBlock =  $("#ce-inputBlock");
		var $com1_inlineMiddleDiv =  $("div[id^='ce-ins-']", "#ce-cardEditor");
		//input line
		var $com1_inStr = $("#ce-inStr");
		//this block slides down with button "translate"
		var $com1_inBlTrWrap = $("#ce-inBlTrWrap");
		//lang to and from in the sliding pad
		var $com1_ceLangTo = $("#ce-langTo");
		var $com1_ceLangFrom = $("#ce-langFrom");
		
		var $com1_insInAlert = $("#dic-insInAlert");
		var $com1_dicWrapper = $("#dic-dicWrapper");
		
		// insert alert "ok" and "cancel" buttons
		var $com1_dicWordIns = $("#dic-wordIns");
		var $com1_dicWordInsCancel = $("#dic-wordInsCancel");
		
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
		//suggestion where to insert translated word
		var $com1_dicInsertTranslSug = $("#dic-insertTranslSug");
		
		
		
		//langPad
		var $com1_langPad = $("#dic-langPad");
		var $com1_langFrom = $("#dic-langFrom");
		var $com1_langTo = $("#dic-langTo");
		
		var $com1_langFromOpt = $("#dic-langFromOpt");		
		var $com1_langToOpt = $("#dic-langToOpt");
		
		var $com1_langToOptItem = $("#dic-langToOpt option");
		var $com1_langFromOptItem = $("#dic-langFromOpt option");
		
		var $com1_langSwitch = $("#dic-langSwitch");
		
		var $com1_ltWrapper = $("#lt-wrapper");
		var $com1_ltLangToFrom = $("#lt-langTo,#lt-langFrom");
		var $com1_ltLangTo = $("#lt-langTo");
		var $com1_ltLangFrom = $("#lt-langFrom");
		
		var $com1_ltLangPad = $("#lt-langPad");		
		var $com1_ltCloseLangPad = $("#lt-closeLangPad");
		var $com1_ltLangFromOpt = $("#lt-langFromOpt");






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

        //function thats slides down the translate btn.
        //side type we take from data "side" from cad editor top wrapper.
        //add logic for lang to from switching.
        function slideDownTrl(sideTrlType) {
          if(!sideTrlType){
            return;
          } else {
            var type = sideTrlType;
          }
          switch(type){
            case 1:
              $com1_ceLangFrom.text($com1_ltLangFrom.data("lang").toUpperCase());
              $com1_ceLangTo.text($com1_ltLangTo.data("lang").toUpperCase());
              $com1_inBlTrWrap.slideDown();
              return;
            case 2:
              $com1_ceLangTo.text($com1_ltLangFrom.data("lang").toUpperCase());
              $com1_ceLangFrom.text($com1_ltLangTo.data("lang").toUpperCase());
              $com1_inBlTrWrap.slideDown();
              return;
            case 3:
              $com1_inBlTrWrap.hide();
              return;
            default:
              return;
          }
        };

		
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
			
			var $curLineSide = $thisLine.data("side");		
			$com1_cardEditor.data( "sides",$curLineSide );
			
			
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
                //function with we checking if it sutable for translation of not
                slideDownTrl($com1_cardEditor.data("sides"));
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
				var insIdObj = $("#ce-ins-"+insId);
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
			  			slideDownTrl($com1_cardEditor.data("sides"));
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
		
//			alert("sides: "+$com1_cardEditor.data( "sides"));

            $com1_langFromOpt.val($com1_ceLangFrom.text().toLowerCase());
            $com1_langToOpt.val($com1_ceLangTo.text().toLowerCase());
		
			$com1_dicWrapperCtrl.trigger("click");
			
			var $word2Transl = $com1_inStr.val();
			$com1_word2Transl.val($word2Transl);
			
			$com1_word2TranslBtn.trigger("click");		
			
		});


		//translation of the word				
		$com1_word2TranslBtn.click( function() {
			
		
			var $userWord = $.trim($com1_word2Transl.val()).toLowerCase();
			
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
							data: {"data[cardword]": $userWord, "data[langFrom]" : $com1_langFromOpt.val(), "data[langTo]" : $com1_langToOpt.val()},
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

                      //setting the type of translated word( ex: form en to ru);
                      $com1_dicWrapper.data({"sides": $com1_cardEditor.data("sides") });
											
											//setting the insInto to 0. Just to reset it after first choce of input and allow "add" mode.
											$com1_insInAlert.data({"insInTo":0});


					      },
					    error: function(e, xhr, settings, exception){
					      alert('Problem with the server. Try again later.');
					    }
          	});
			
			
			//official google
			//initialize(userWord);
			
			
		
			return false;
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
	

		
		$com1_dicWrapper.delegate(".dic-res","click",function(e){
			
					if(e) e.stopPropagation();
					if(e) e.preventDefault();
	
		      //console.log("sides: "+$com1_dicWrapper.data("sides"));
					
					//off input word block
					$com1_inpBlOk.click();
					
		//			$com1_overlay.show();
					var $thisLine = $(this);
					
					var $thisSugWord = $thisLine.text();
					
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
						
					//marking the word we want to insert into the card.
					$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");
					$thisLine.addClass("dic-resActive");
					
					
					$com1_insInAlert.show().data({"sugWord":$thisSugWord});

console.log("insInTo: "+$com1_insInAlert.data("insInTo"));


					if( $com1_insInAlert.data("insInTo") === 0 ){
						switch($com1_dicWrapper.data("sides")){
							case 1:
								$com1_dicInsertTranslSug.val("ce-ins-3").change();
							return;
							case 2:
								$com1_dicInsertTranslSug.val("ce-ins-1").change();
							return;
							default:
							return;
						}
					} else {
						$com1_dicInsertTranslSug.change();
					}
		
					var $curLine = $com1_cardEditor.data("curLineId");
					var $insInto = $("#ce-ins-"+$curLine);
		
					$($insInto).find("span.ce-insStrSug").html($thisLine.text());
			
		});

		//manage the sagesstions: 
		// insert (click "OK")
		$com1_dicWordIns.click(function(){
			$com1_insInAlert.hide();
			$com1_inlineMiddleDiv.find(".ce-insStrSug").empty().end().find(".ce-insStrText").show();
			$lineToInsId = $com1_insInAlert.data("curLineId");
			$($lineToInsId).find("span.ce-insStrText").text($com1_insInAlert.data("sugWord")).show().click();
			$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");
			
			//settin data insInto for adding mode ex: adding more syns in one field;
				$com1_insInAlert.data({"insInTo":$lineToInsId});
			
		});
		//cancel
		$com1_dicWordInsCancel.click(function(){
			$com1_insInAlert.hide().data({"sugWord":''});
			
			var $curLine = $($com1_insInAlert.data("curLineId"));		
			var $curLineText = $curLine.find(".ce-insStrText").text();
			if( $.trim($curLineText ) === '' ) {
				$curLine.hide();
			}		
			$com1_inlineMiddleDiv.find(".ce-insStrSug").empty().end().find(".ce-insStrText").show();
			$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");
		});
		
		$com1_dicInsertTranslSug.change(function(){

			var $prevLine = $($com1_insInAlert.data("curLineId"));		
			var $prevLineText = $prevLine.find(".ce-insStrText").text();
			if( $.trim($prevLineText ) === '' ) {
				$prevLine.hide();
			}		
			
			//we setting insinto 
			//$lineToInsId = "#"+$(this).val();
			console.log($com1_insInAlert.data("insInTo"));
			
				$lineToInsId = "#"+$(this).val();
				/*
			} else {
				$lineToInsId = $com1_insInAlert.data("insInTo");
			}
				*/
			
			$com1_insInAlert.data({"curLineId":$lineToInsId});
				
			$com1_inlineMiddleDiv.find(".ce-insStrSug").empty().end().find(".ce-insStrText").show();
			$($lineToInsId).find("span.ce-insStrTip").hide().end().show().find(".ce-insStrSug").text($com1_insInAlert.data("sugWord")).prev().hide();
			
		});

//toDel
	 	$com1_insInAlert.bind("clickoutside", function(e){
     	//console.log(e.target);
     	//$com1_dicWordInsCancel.click();
//	 		//$com1_dicWrapper.find(".dic-resActive").removeClass("dic-resActive");	 		
			//$com1_overlay.hide();	 
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



		$(".dic-toDel").click(function(){
			var $i = 20;
			for($i = 0; $i<= 20; $i++){
				$com1_wordHisList.prepend('<span class="dic-wordHis">test Word '+$i+'</span>');
			}
		});




		//lt lang pad play

			//set initial langTo and langFrom from html
			

			
			$com1_ltLangPad.bind("clickoutside", function(event){	
				$com1_ltCloseLangPad.click();
		 	});
			
			//lt lang pad functions
			$.fn.thisLangSide = function(thisLangSide){
					
				return this.each(function(){
				
					if(!thisLangSide){
						return;
					}
					
					$(this).click(function(e){
						
							if(e) e.stopPropagation();
							if(e) e.preventDefault();
						
							$thisLang = $(this);
														
							if(  !$thisLang.hasClass("lt-langToFromActive") ) {
								$com1_ltLangToFrom.removeClass("lt-langToFromActive");
								var ltLangToPos = $thisLang.offset();			
								var ltWrapperPos = $com1_ltWrapper.offset();						
		
								var setTop = (ltLangToPos.top - ltWrapperPos.top) + 23 ; 
								var setLeft = (ltLangToPos.left - ltWrapperPos.left) - 80; 
								
								$com1_ltLangPad.css({"left":setLeft,"top":setTop});														
								$com1_ltLangPad.show();
								$thisLang.addClass("lt-langToFromActive");
								$com1_ltLangFromOpt.val( $thisLang.text().toLowerCase() );
								
							} else {
								$com1_ltLangPad.hide();
								$com1_ltLangToFrom.removeClass("lt-langToFromActive");
							}						
					});
					
				});
			};



			$com1_ltLangTo.thisLangSide('m').data("lang", $com1_ltLangTo.text());
			$com1_ltLangFrom.thisLangSide('m').data("lang", $com1_ltLangFrom.text());;



		
		$com1_ltLangFromOpt.change(function(){

				var t =	$(this).val().toUpperCase();
				$com1_ltLangToFrom.filter(".lt-langToFromActive").text(t).data("lang",t);
				setTimeout(function(){
					$com1_ltLangPad.fadeOut();
					$com1_ltLangToFrom.removeClass("lt-langToFromActive");
				}, 500);

		});	
	
		$com1_ltCloseLangPad.click(function(){
				$com1_ltLangPad.fadeOut();
				$com1_ltLangToFrom.removeClass("lt-langToFromActive");
		});
	
				
});

//toDel!!!!!!!!!!!!!!!!!!

//		var temp2 = [
//									["violin","yello","red"]
//								];
//
//
//		$("#testBut").click(function(){
//
//						$("#translTempWrapper").empty();
//
//						$.ajax({
//							type: "POST",
//							url: path+"/cards/getTransl",
//							data: {"data[cardword]": "get", "data[langFrom]" : "en", "data[langTo]" : "ru"},
//							dataType: "json",
//					    success: function(data){
//
//											if( data[0] ) {
//
//												if( data[1] ) {
//
//													$( "#translTemplate" ).tmpl( temp2
//																											).appendTo("#translTempWrapper");
//
//
//												} else {
//
//												}
//
//											}
//
//					      },
//					    error: function(e, xhr, settings, exception){
//					      alert('Problem with the server. Try again later.');
//					    }
//          	});
//		})