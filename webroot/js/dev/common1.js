
$(document).ready( function(){

		var $com1_cardEditor =  $("#ce-cardEditor").data({curLineId:"ce-ins-1"});;
		var $com1_mainWord =  $("#ce-ins-1");//.data({"tip":"Type main word in"});
		var $com1_moreWord =  $("#ce-ins-2");//.data({"tip":"Type more info in"});
		var $com1_translWord =  $("#ce-ins-3");//.data({"tip":"Type here a translation"});
		var $com1_exWord =  $("#ce-ins-4");//.data({"tip":"Type here a example"});
		var $com1_defWord =  $("#ce-ins-5");//.data({"tip":"Type here a defenition"});
		var $com1_synWord =  $("#ce-ins-6");//.data({"tip":"Type here a synonims"});
		var $com1_plusMenu =  $(".ce-plusMenu span", "#ce-cardEditor");
		var $com1_inputBlock =  $("#ce-inputBlock");
		var $com1_inlineMiddleDiv =  $("div[id^='ce-ins-']", "#ce-cardEditor");
		var $com1_inStr = $("#ce-inStr");
		//block which slides down with button "translate"
		var $com1_inBlTrWrap = $("#ce-inBlTrWrap");

		
		$com1_cardEditor.hover(function(){
			$(this).addClass("ce-cardEditorActive");
		},
		function(){
			$(this).removeClass("ce-cardEditorActive");
		});

		
		$com1_inlineMiddleDiv.hover(function(){
			$(this).addClass("ce-currentLineActive");
		},
		function(){
			$(this).removeClass("ce-currentLineActive");
		});



		

		
		$com1_inlineMiddleDiv.click( function(){

			
			var $prevLineId = $com1_cardEditor.data("curLineId");
			
			
			//$com1_inStr.css({"height":"20px"});

	
			//.css({"color":"red"};

			var $prevLine = $("#"+$prevLineId);

			var $prevTextBlock = $prevLine.find("span.ce-insStrText");
		
			var $prevText = $.trim($prevTextBlock.text());
			
			if( $prevText === '') {					
						$prevTextBlock.prev().show();						
					 	if(	$prevLine.children().hasClass("ce-insStrPerf") ) {
							$prevLine.hide();
						}										
			} else {
				$prevTextBlock.prev().hide();
			}					
							
			$prevLine.removeClass("ce-currentLine");

		//current line deal
		
			var $thisLine = $(this);
			var $thisLineId = $thisLine.attr("id").replace("ce-ins-","");												
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
				$com1_inStr.val($thisText).focus();
				$com1_inBlTrWrap.slideDown();
			}					
	
			$thisLine.addClass("ce-currentLine");


			$com1_cardEditor.data("curLineId",$thisLineId);
					
			var cardEditorPos = $com1_cardEditor.offset();			
			var posMainWord = $thisLine.offset();
			
			//set input line next to current line;		
			var setTop = (posMainWord.top - cardEditorPos.top) + $thisLine.height() + 2; 
			var setLeft = (posMainWord.left - cardEditorPos.left) - 25; 
			
			$com1_inputBlock.css({"top":setTop,"left":setLeft}).show();//.find("input").val(inputTip);	

			
			
			$com1_plusMenu.removeClass("ce-plusMenuActive");

			$("#ce-plus-ins-"+$thisLineId ).addClass("ce-plusMenuActive");
			
			

		
		});

		

	
		$com1_plusMenu.click(function(){
			var $this = $(this);
			var insId = $this.attr("id").replace("ce-plus-ins-","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ce-ins-"+insId);
				insIdObj.trigger("click");
			}
		});	


		$com1_inStr.focus(function(){
		  	var $curLineId = $com1_cardEditor.data("curLineId");
		  	var $curLineTextBlockText = $("#"+$curLineId).find("span.ce-insStrText");
		  	if( $curLineTextBlockText.text() === '' ) {
		  		$(this).val('');
		  	}	
		});
		

		$com1_inStr.elastic();
		
		$com1_inStr.keyup( function() {									
			
		  			//getting string from input and putting it in corresopndent card line	
		  			var $curLineId = $com1_cardEditor.data("curLineId");
		  			var $curLine = $("#"+$curLineId);
		  			var $curLineTextBlock = $curLine.find("span.ce-insStrText");
		  			
		  			var $curLineTipBlock = $curLine.find("span.ce-insStrTip");
		  			//??
		  			var $curLineTipBlockText = $curLineTipBlock.text();
		  			
		  			var inStrText = $.trim($com1_inStr.val());
		  			
			  		if( inStrText === '') {
			  			$curLineTipBlock.show();
			  			$com1_inStr.addClass("ce-inputTip");
			  		} else {
			  			$curLineTipBlock.hide();
			  			$com1_inStr.removeClass("ce-inputTip");
			  			$com1_inBlTrWrap.slideDown();
			  		}
		  							
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






		
		$("#ce-inpBlOk").click(function(){
			$com1_inputBlock.hide();
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
		
		
		
		$("#ce-inpBlClear").click(function(){
			return false;
		});
				
});