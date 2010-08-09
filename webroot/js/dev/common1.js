
$(document).ready( function(){

		var $com1_cardEditor =  $("#cardEditor").data({curLineId:"ins_1"});;
		var $com1_mainWord =  $("#ins_1");//.data({"tip":"Type main word in"});
		var $com1_moreWord =  $("#ins_2");//.data({"tip":"Type more info in"});
		var $com1_translWord =  $("#ins_3");//.data({"tip":"Type here a translation"});
		var $com1_exWord =  $("#ins_4");//.data({"tip":"Type here a example"});
		var $com1_defWord =  $("#ins_5");//.data({"tip":"Type here a defenition"});
		var $com1_synWord =  $("#ins_6");//.data({"tip":"Type here a synonims"});
		var $com1_plusMenu =  $(".plusMenu span", "#cardEditor");
		var $com1_inputBlock =  $("#inputBlock");
		var $com1_inlineMiddleDiv =  $("div[id^='ins_']", "#cardEditor");
		var $com1_inStr = $("#inStr");

		
		$com1_cardEditor.hover(function(){
			$(this).addClass("cardEditorActive");
		},
		function(){
			$(this).removeClass("cardEditorActive");
		});

		
		$com1_inlineMiddleDiv.hover(function(){
			$(this).addClass("currentLineActive");
		},
		function(){
			$(this).removeClass("currentLineActive");
		});



		

		
		$com1_inlineMiddleDiv.click( function(){

			
			var $prevLineId = $com1_cardEditor.data("curLineId");

			
			//$com1_inStr.css({"height":"20px"});

	
			//.css({"color":"red"};

			var $prevLine = $("#"+$prevLineId);
			
			var $prevTextBlock = $prevLine.find("span.insStrText");
			
			var $prevText = $.trim($prevTextBlock.text());
			
			if( $prevText === '') {					
						$prevTextBlock.prev().show();						
					 	if(	$prevLine.children().hasClass("insStrPerf") ) {
							$prevLine.hide();
						}										
			} else {
				$prevTextBlock.prev().hide();
			}					
			$prevLine.removeClass("currentLine");

		//current line deal
		
			var $thisLine = $(this);
			var $thisLineId = $thisLine.attr("id");												
			var $thisTextBlock = $thisLine.find("span.insStrText");
			var $thisTipBlock = $thisTextBlock.prev();			
			var $thisText = $.trim($thisTextBlock.text());
			//var $thisLineHeight = $thisLine.height();
			
			$thisLine.show();
			
			if( $thisText === '') {										
					$thisTipBlock.show();
					$com1_inStr.addClass("inputTip");
					var $thisTipText = $thisTipBlock.text();						
					$com1_inStr.val($thisTipText);
					$("#inBlTrWrap").hide();												
			} else {
				$thisTipBlock.hide();
				$com1_inStr.removeClass("inputTip");
				$com1_inStr.val($thisText).focus();
				$("#inBlTrWrap").slideDown();
			}					

			$thisLine.addClass("currentLine");
			$com1_cardEditor.data({"curLineId":$thisLineId});
			
			var cardEditorPos = $com1_cardEditor.offset();			
			var posMainWord = $thisLine.offset();
			
			//set input line next to current line;		
			var setTop = (posMainWord.top - cardEditorPos.top) + $thisLine.height() + 2; 
			var setLeft = (posMainWord.left - cardEditorPos.left) - 25; 
			
			$com1_inputBlock.css({"top":setTop,"left":setLeft}).show();//.find("input").val(inputTip);	

			
			
			$com1_plusMenu.removeClass("plusMenuActive");
			$("#plus_"+$thisLineId ).addClass("plusMenuActive");
			
			
			
		});

		

	
		$com1_plusMenu.click(function(){
			var $this = $(this);
			var insId = $this.attr("id").replace("plus_ins_","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ins_"+insId);
				insIdObj.trigger("click");
			}
		});	


		$com1_inStr.focus(function(){
		  	var $curLineId = $com1_cardEditor.data("curLineId");
		  	var $curLineTextBlockText = $("#"+$curLineId).find("span.insStrText");
		  	if( $curLineTextBlockText.text() === '' ) {
		  		$(this).val('');
		  	}	
		});
		

		$com1_inStr.elastic();
		
		$com1_inStr.keyup( function() {									
			
		  			//getting string from input and putting it in corresopndent card line	
		  			var $curLineId = $com1_cardEditor.data("curLineId");
		  			var $curLine = $("#"+$curLineId);
		  			var $curLineTextBlock = $curLine.find("span.insStrText");
		  			
		  			var $curLineTipBlock = $curLine.find("span.insStrTip");
		  			//??
		  			var $curLineTipBlockText = $curLineTipBlock.text();
		  			
		  			var inStrText = $.trim($com1_inStr.val());
			  		if( inStrText === '') {
			  			$curLineTipBlock.show();
			  			$com1_inStr.addClass("inputTip");
			  		} else {
			  			$curLineTipBlock.hide();
			  			$com1_inStr.removeClass("inputTip");
			  			$("#inBlTrWrap").slideDown();
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






		
		$("#inpBlOk").click(function(){
			$com1_inputBlock.hide();
		});
		
		$('a.minibutton').bind(
			{
				mousedown: function() {
					$(this).addClass('mousedown');
				},
				blur: function() {
					$(this).removeClass('mousedown');
				},
				mouseup: function() {
					$(this).removeClass('mousedown');
				}		
			}
			//return false;		
		);		
		
		
		
		$("#inpBlClear").click(function(){
			return false;
		});
				
});

//$(document).ready(function(){var g=$("#cardEditor");var h=$("#ins_1").data({"tip":"Type main word in"});var i=$("#ins_2").data({"tip":"Type more info in"});var j=$("#ins_3").data({"tip":"Type here a translation"});var k=$("#ins_4").data({"tip":"Type here a example"});var l=$("#ins_5").data({"tip":"Type here a defenition"});var m=$("#ins_6").data({"tip":"Type here a synonims"});var n=$(".plusMenu span","#cardEditor");var o=$("#inputBlock");var p=$(".inlineMiddle div","#cardEditor");g.hover(function(){$(this).addClass("cardEditorActive")},function(){$(this).removeClass("cardEditorActive")});p.hover(function(){$(this).addClass("currentLineActive")},function(){$(this).removeClass("currentLineActive")});p.click(function(){p.removeClass("currentLine");var a=$(this);a.show();a.addClass("currentLine");var b=g.offset();var c=a.offset();var d=(c.top-b.top)+a.height()+2;var e=(c.left-b.left)-55;var f='';if(typeof(a.data("tip"))!=="undefined"){f=a.data("tip")}n.removeClass("plusMenuActive");$("#plus_"+a.attr("id").replace("ins_","")).addClass("plusMenuActive");o.css({"top":d,"left":e}).show().find("input").val(f)});n.click(function(){var a=$(this);var b=a.attr("id").replace("plus_","");if(typeof(b)!=="undefined"){insIdObj=$("#ins_"+b);insIdObj.trigger("click")}})});