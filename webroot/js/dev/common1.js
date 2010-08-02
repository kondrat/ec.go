$(document).ready( function(){

		var com1 = {
			//alert message object
			alertMessage: '',
			//id of element to insert words
			insertId: '',
			//Main cardEditor input
			cardExt: '',
			//card editor object
			cardTable :'',
			//small arrow hide - show translation object
			hideArrow:'',
			//correct letter concept canceled. Checking the letter in the input string if not OK - don't let it in
			//correctLetter: '',
			
			//look for quick mode flag
			quickModeChecked: '',
			activeSide: '',
			//side on which we have translated our string or word
			tranlslSide:'',
			//change lang switching arrow direction
			backLangDirect: false,
			//lang pair initial
			from: 'en',
			to:'ru',
			langSwitch: '',
			//input card lines
			mainWord: $("#mainWord"),
			mainMore: $("#mainMore"),
			wordTran: $("#wordTran"),		
			exTran: $("#exTran"),
			defTran: $("#defTran"),				
			synTran: $("#synTran")
		};

		//alert(cObj.toSource());


		
		//flash alert message 	  
		com1.alertMessage = $('#flashMessage');
		
		if(com1.alertMessage.length) {
				var alerttimer = window.setTimeout(function () {
					com1.alertMessage.trigger('click');
				}, 4500);
				com1.alertMessage.animate({height: [com1.alertMessage.css("line-height") || '52', 'swing']}, 400).click(function () {
					window.clearTimeout(alerttimer);
					com1.alertMessage.animate({height: '0'}, 400);
					com1.alertMessage.css({'border':'none'});
				});
		}



		com1.insertId = com1.mainWord;
		com1.cardExt = $("#CardExt");
		com1.cardTable = $("div.cardEditor");
		com1.hideArrow = $(".hideArrow");
		
		//cleaning after reload
	  com1.cardExt.val('').blur().focus(function(){lookForInput();});
	  //com1.cardExt.focus();
		$("#submitTranslId").attr({"disabled":"disabled"});


	
//cards control panel ( edit del)				
		$(".td").hover( function(){
				$(this).find(".ctrlPanel").show();
			},function(){
				$(this).find(".ctrlPanel").hide();
			}
		);


		
	//	useraction_tooltip("#plusMenuWrapper div div");	


	//front - back side switching
    //front
   
		$("#frontButton").click(function() {
			
			com1.activeSide = 'a';
			$(".langToFromWrapper").removeClass("backDir");
			

			com1.to = $("#langSideB").text();
			com1.from = $("#langSideA").text();

/*			
			if ( com1.tranlslSide === 'a' ){
				$(".dicTerms, .topSug").removeClass("insertWordClick");
			} else if (com1.tranlslSide === 'b') {
				$(".dicTerms, .topSug").addClass("insertWordClick");
			}
*/
			
			$("#tableBack").removeClass("activeCardSide");
			$("#tableFront").addClass("activeCardSide");
			
			$("#plusMenuFront").show();
			$("#plusMenuBack").hide();			
			$("#sideToEdit a:last").hide();
			$("#sideToEdit a:first").show();			

			$("#plusMenuWord").trigger('click');					
			
		});
			
		//back
		$("#backButton").click(function() {
			
			com1.activeSide = 'b';
			
			$(".langToFromWrapper").addClass("backDir");

			com1.to = $("#langSideA").text();
			com1.from = $("#langSideB").text();

/*			
			if ( com1.tranlslSide === 'b' ){
				$(".dicTerms, .topSug").removeClass("insertWordClick");
			} else if (com1.tranlslSide === 'a') {
				$(".dicTerms, .topSug").addClass("insertWordClick");
			}
*/						
			$("#tableFront").removeClass("activeCardSide");
			$("#tableBack").addClass("activeCardSide");
			
			$("#plusMenuFront").hide();
			$("#plusMenuBack").show();					
			$("#sideToEdit a:first").hide();
			$("#sideToEdit a:last").show();	
			
			$("#plusMenuTransl").trigger('click');
	
		});


		$("#sideToEdit").click(
			function(){				
				if( com1.activeSide === 'a' ) {
					$("#backButton").trigger('click');
				} else if ( com1.activeSide === 'b' ) {
					$("#frontButton").trigger('click');
				}
			}
		);




		//correct letter concept canceled
		/*
		com1.correctLetter = false;
		
		com1.cardExt.keypress( function(e) {
	
		  var chr = (String.fromCharCode(e.which));
		  rexp = /([^\w0-9\s\.\?,'-])/; 
		  if( rexp.test(chr) && e.which !== 8 && e.which !== 0 ) {
		  	com1.correctLetter = false;
		    return false;
		  } else {
		  	com1.correctLetter = true;
		  }
	 
		});	
		*/
		com1.quickModeChecked = $("#CardQuick").attr("checked");
	
		$("#CardQuick").click(function(){
			com1.quickModeChecked = $(this).attr("checked");
		});

//vars to add in list

		var ii = 0;
		var	keyUpAnim;
		

		com1.cardExt.keyup( function(e) {									
			//if ( com1.correctLetter = true) { //correct letter concept canceled	
			
			  	if ( com1.quickModeChecked === true) {
		  		 	
			  			//getting string from input and putting it in corresopndent card line						
							com1.insertId.text( com1.cardExt.val() );	  
							
										
			  			testWordLineEmpty();
		  			
			  			ii = 0;
			  			window.clearInterval(keyUpAnim);
							
							//#C3D9FF - dark
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
			  		
			  	}			  	
			//}			
		});
		
		//--------------------------------------
		
		function testWordLineEmpty(){
			
			//removing all placeHolders in cardLines
			$("#toRemove").remove();
			
			
			if ( com1.insertId.text().length > 0 ) {
				
				$("#submitTranslId").attr({"disabled":false});
				
				com1.insertId.parent().show();	
					
			}else{
				
				$("#submitTranslId").attr({"disabled":"disabled"});
				
				com1.insertId.after('<span id="toRemove">'+cObj.rem.str+'</span>');
				
				com1.insertId.parent().show();
				
			}	
		};		
		
//--------------------------------------------------
	
		function lookForInput() {
			
			var what = window.setInterval( function() {
					var whatInt = $.trim(com1.cardExt.val());	
					var strInt = $.trim(com1.insertId.text());
					
					//Card submit button disabling control
	    								
					if( com1.mainWord.text() === '' && com1.mainMore.text() === '' && com1.wordTran.text() === '' && com1.exTran.text() === '' && com1.defTran.text() === '' && com1.synTran.text() === ''  ){
						$("#saveCardMain").attr({"disabled":"disabled"});
					} else {
						$("#saveCardMain").attr({"disabled":""});
					}
					
					
					if( whatInt !== strInt ){
						com1.cardExt.trigger("keyup");					
					} 
				}, 2000			
			);
			
		};		


	//-------------------------------------


	//inserting translation result in inputstring
	//old concept $(".insertWordClick li").live('click',function(){
	$(".dicTerms li, .topSug li").live("click",function(){
		
			var toIns = $(this).text();
			
			if( com1.cardExt.val() === '' ) {
				com1.cardExt.val(toIns).trigger("keyup");
			} else {
				$("#alertPad").show();
			}
			
 		
			
	});

	
  $("#closeAlertPad").click(function(){
  	$("#alertPad").fadeOut();
  });


		
//------------------------------------------------
			
	$("#plusMenuWord").data( { "strId":"#mainWord" ,"toltip":cObj.pmW.tip});	
	$("#plusMenuTest").data( { "strId":"#mainMore" ,"toltip":cObj.pmT.tip});		
	$("#plusMenuTransl").data( { "strId":"#wordTran" ,"toltip":cObj.pmTr.tip});		
	$("#plusMenuExample").data( { "strId":"#exTran" ,"toltip":cObj.pmEx.tip});
	$("#plusMenuDefin").data( { "strId":"#defTran" ,"toltip":cObj.pmD.tip});				
	$("#plusMenuSynonim").data( { "strId":"#synTran" ,"toltip":cObj.pmS.tip});

	com1.mainWord.data( { "menuId":"#plusMenuWord"});
	com1.mainMore.data( { "menuId":"#plusMenuTest"});
	com1.wordTran.data( { "menuId":"#plusMenuTransl"});		
	com1.exTran.data( { "menuId":"#plusMenuExample"});
	com1.defTran.data( { "menuId":"#plusMenuDefin"});				
	com1.synTran.data( { "menuId":"#plusMenuSynonim"});
		
		
	var prev_tooltip = '';
	
	$("#plusMenuWrapper div div").each(function(){
							
			var my_tooltip = $(this).data("toltip");
			
			if ( my_tooltip === undefined )  {
					my_tooltip = '';
			}		
			var strId = $(this).data("strId");					
			if ( strId === undefined )  {
					strId = '';
			}							
					
			$(this).mouseover(function(){									
				$(".userActions").text(my_tooltip).addClass("userActionTip");																				
			}).mouseout(function(){										
				$(".userActions").text(prev_tooltip).removeClass("userActionTip");
								
			}).click(function(){
				
				//tool Tip block					
				$(".userActions").text(my_tooltip);
				prev_tooltip = my_tooltip;
				$(".plusMenuActive").removeClass("plusMenuActive").css({backgroundColor: ""});
				$(this).addClass("plusMenuActive").animate({ backgroundColor: "#C3D9FF" }, 1000).animate({ backgroundColor: "#fff" }, 1000);
				$(".userActions").animate({color: "green"},1000).animate(
																		{ color: "brown" },
																		 1000,
																		function(){																																									
																			$(this).css({"color": ""});
																		}
																);
				
				//main block
					//cleaning prev strId
				var prevLine = com1.insertId.parent();
				prevLine.stop(true).removeClass("inputSring").css({backgroundColor:""});
				
				$("#toRemove").remove();
				
				if ( com1.insertId.text().length == 0 ) {					
					prevLine.hide();
				}
				
					//setting for new strId
				com1.cardExt.focus();
				
				com1.insertId = $( strId );
			
				com1.insertId.parent().addClass("inputSring").animate({ backgroundColor: "#C3D9FF" }, 1000).animate({ backgroundColor: "#E1ECFF" }, 1000);;
				
				com1.cardExt.val(com1.insertId.text());
				
				testWordLineEmpty();
				
				
			});
	});

		
		
		$(".activeCardSide .cardInputs div").live("mouseover mouseout click", function(event){
			  if (event.type == 'mouseover') {
			    $(this).css({ backgroundColor: "#C3D9FF" });
			  } else if (event.type == 'mouseout' ) {
			    $(this).css({ backgroundColor: "" });
			  }	else if (event.type == 'click'){
			  	var menuId = $(this).children("span:last").data("menuId");
					$(menuId).trigger("click");
			  }		
		});
				

	$("#frontButton").trigger('click');
			
		
	//lang switching
		com1.langSwitch = $("#langSwitch");
		com1.langSwitch.hover(function(){
			$(this).addClass("changeLangDirect");
			},function(){
				$(this).removeClass("changeLangDirect");
			}
		); 
	
		com1.langSwitch.click(function(){			
			$(this).removeClass("changeLangDirect");			
			if (  com1.activeSide === 'a' ) {
				$("#backButton").trigger('click');
			} else if ( com1.activeSide === 'b' ) {
				$("#frontButton").trigger('click');
			}
		});

		



		
		//cange lang pair control		
    $("#changeLangPair").click(function(){      
       $("#langPad").show();
    });
    $("#closeLangPad,#langPadSubmit").click(function(){
       $("#langPad").fadeOut();
    });
    
    
		$("#langPadSubmit").click(function(){			
			var sideLangA = $("#sideA").attr("value");
			var sideLangB = $("#sideB").attr("value");						
			$("#langSideA").text(sideLangA);
			$("#langSideB").text(sideLangB);
			if (  com1.activeSide === 'a' ) {;		
				com1.to = sideLangB;
				com1.from = sideLangA;				
			} else if ( com1.activeSide === 'b' ) {	
				com1.to = sideLangA;
				com1.from = sideLangB;								
			}
		});









	//word submiting for translation

//CHEck if word is empty or not!!!!!!!!!

						
		$("#submitTranslId").click( function() {
			
			//alert(com1.from+' | '+com1.to);
			
			var userWord = $.trim(com1.cardExt.attr('value'));
			var userWordLower = userWord.toLowerCase();
			
			//double of the input.
			com1.insertId.text(userWord);
			$("#transFor").text(userWord);
			
			
			
			//dictionary preparation
			$(".additionalRes").hide();
			$(".dicTerms ul").empty().addClass("hide");
			$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive");
			//$("#transFor").empty();




			
	//trimm and check uesr word;		
			com.songWord = userWordLower;
			
			com.song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+com.songWord+".mp3";
			
						$.post(
							path+"/cards/getTransl",
							{"data[Card][ext]": userWord, "data[Card][langFrom]" : com1.from, "data[Card][langTo]" : com1.to },
							
					    	function(data){
									
											if( data.sentences ) {
											  ////console.log(data.sentences);
										  
												 if( data.dict ) {
				
												  var dic = data.dict;
												  var typeW = null;
												  
												  
												  $.each(dic, function( keyD, valueD) {												  	
												  	$.each(valueD, function(keyT, valueT) {												  		
												  		if(keyT === 'pos') {
												  			switch(valueT){
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
													  			default:
													  				break;											  				
												  			}										  			
												  		} 
												  	
												  		if( keyT === 'terms') {	
												  				$.each( valueT, function(keyN, valueN) {											  					
													  					$("ul."+typeW+"Terms").append('<li>'+ valueN+'</li>');
													  			});
													  			$("li."+typeW ).addClass("dicSwitcherM");											  			
												  				typeW=null;
												  		}											  											  		
												  	});
												  	
												  });
												  
												  $(".dicSwitcherM:first").addClass("dicActive");
												  $(".dicTerms ul:eq(0)").removeClass("hide");
												  $(".additionalRes").show();
												} else {
													
												}

												//ok, go to side B 
												
											  var sen = data.sentences;
											  var translatedSentence = '';
											  $.each(sen, function(key, value) { 
														$.each(value, function(keyIn, valIn){
															if( keyIn === 'trans' ) {
																translatedSentence += valIn; 																										
															} 	
  													});											
												});												
												$(".topSug li").text(translatedSentence);
												
												com1.tranlslSide = com1.activeSide;
												$(".insertWordClick").removeClass("insertWordClick");

												

												
												
												
												if(userWord != translatedSentence) {
		
													if( com1.cardTable.css('width') !== "870px" ) {
														com1.cardTable.animate({
																width: '870px'
															},
															'linear',
															function(){
																$(".rightSug").fadeIn('fast');
															}
														);
														com1.hideArrow.show().removeClass("hideArrowR").addClass("hideArrowL");
													}
												} else {
													$(".rightSug").hide();
														if( com1.cardTable.css('width') === "870px" ) {
															
															com1.cardTable.animate(
																{
																	width: '630px'
																}
															);														
														}
														com1.hideArrow.hide().removeClass("hideArrowL hideArrowR");
												}
												
											} else {
											  
											}					
									
					      },
					      "json"
          	);
			
			
			//official google
			//initialize(userWord);
			return false;
		});

				


		$(".dicSwitcherM").live('mouseover mouseout',function(event){		
			  if (event.type == 'mouseover') {
			    $(this).addClass("dicHover");
			  } else {
			    $(this).removeClass("dicHover");
			  }
		});

		$(".dicSwitcherM").live('click',function(){
			$(".dicSwitcherM").removeClass("dicActive");
			$(this).addClass("dicActive");
			var i = $(this).index();
			$(".dicTerms ul").addClass("hide");
			$(".dicTerms ul:eq("+i+")").removeClass("hide");
		});	

















	
		$(".submitMore").click( function() {
			var userMore;
			userMore = $("#UserExt").attr('value');
			
			
			$(".exTran").text(userMore);
			
			
			
			return false;
		});




		//more controls
		

		$(".closeCardTable").click(function(){
			$(".cardEditor").fadeOut();
		});		
		
		


		//arrow class 
		$(".hideArrow").click(function(){	
				var thisArrow = $(this);
				if ( thisArrow.hasClass("hideArrowL") ) {
						
					$(".rightSug").fadeOut( function() {
						com1.cardTable.animate(
							{
								width: '630px'
							},
							function(){
								thisArrow.removeClass("hideArrowL").addClass("hideArrowR");	
							}
						);																							
  				});
  															
				}	else {				
					com1.cardTable.animate(
						{
							width: '870px'
						},
						function(){
							$(".rightSug").fadeIn();
							thisArrow.removeClass("hideArrowR").addClass("hideArrowL");
						}
					);																
				}											  		 											
		});
				
		$(".moveCardTable").hover( function(){
			$(this).css({'background-position':'0 -32px'});
			},function(){
				$(this).css({'background-position':'0 0'});
			}
		);		
		
		

		


		//page upload text
		
		$(".enlarge").click(function(){
			
			$(".textUpload").animate(
				{
					height: "+=150px"
				},
				function(){
					$(".decrease").fadeIn();
				}
			);
		});
		
		$(".decrease").click(function(){
			if( $(".textUpload").height() >= 300 ){
				$(".textUpload").animate(
					{
						height: "-=150px"
					},
					function(){
						if($(this).height() <=150 ) {
							$(".decrease").fadeOut();	
						}
					}
				);
			} 
		});




    //card Ajax save;

    
    
    $("#saveCardMain").click(function(){

    	
	    var cardObj = {
	    								"data[Theme][id]": themeName.data('id'),
	    								"data[Theme][theme]": themeName.data('theme'),
	    								"data[Card][word]": com1.mainWord.text(),
	    								"data[Card][more]": com1.mainMore.text(),
	    								"data[Card][tr]": com1.wordTran.text(),
	    								"data[Card][cont]": com1.exTran.text(),
	    								"data[Card][def]": com1.defTran.text(),
	    								"data[Card][syn]": com1.synTran.text() 
	    							};
    							
      $.ajax({
        type: "POST",
        url: path+"/cards/saveCard",
        dataType: "json",
        data: cardObj,
        success: function(data) {
        	
					userReg = 1;
					
        	if ( data.stat === 1 ) {        		
          	$('.newCards').prepend('<li></li>').find('li:first').text(data.word).data(cardObj).css({'color':'red'}).next().css({'color':'blue'});
          	
          	$('#mainWord,#wordTran,#exTran span:last,#defTran span:last,#synTran span:last').empty();
          	com1.cardExt.val('');
          	
			 			$(".additionalRes").hide();
						$(".dicTerms ul").empty().addClass("hide");
						$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive"); 
						
						$(".rightSug").hide();
							if( com1.cardTable.css('width') === "870px" ) {
								
								com1.cardTable.animate(
									{
										width: '630px'
									}
								);														
							}						
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
            $('.tempTest').html('Problem with the server. Try again later.');
        }
      });
    });


		$(".newCards li").live('mouseover mouseout',
			function(event){
			  if (event.type == 'mouseover') {
    			//alert($(this).data().toSource());
			  } else {
			    //alert('stop');
			  }			
			}
		);
	
});//end of file











//old
/*		
		$(".submitTranslate").click( function() {			
			var userTran;
			tt = userTran = $("#UserWord").attr('value');
			initialize(tt);
			return false;
		});
*/
// http://vremenno.net/examples/x-button-on-text-input2/
// http://www.simplecoding.org/javascript-poleznye-sobytiya.html

//toDel
		/*	
		$('#langSideA').click(function(e) {
			window.clearInterval(what);
			//com1.cardExt.focus();
			//alert(e.which);
			
			var textIn = com1.cardExt.val();
					if ( textIn !== '') {
						alert('Handler for .mousedown() called.');
					} else {
						//alert('Ha');
					}
  		
		});	
		$('#langSideB').click(function(e) {
			com1.cardExt.blur();
			//alert(e.which);
			
			var textIn = com1.cardExt.val();
					if ( textIn !== '') {
						alert('Handler for .mousedown() called.');
					} else {
						//alert('Ha');
					}
  		
		});	
		*/