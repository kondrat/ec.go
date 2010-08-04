
$(document).ready( function(){

		var $com1_cardEditor =  $("#cardEditor");
		var $com1_mainWord =  $("#ins_1");//.data({"tip":"Type main word in"});
		var $com1_moreWord =  $("#ins_2");//.data({"tip":"Type more info in"});
		var $com1_translWord =  $("#ins_3");//.data({"tip":"Type here a translation"});
		var $com1_exWord =  $("#ins_4");//.data({"tip":"Type here a example"});
		var $com1_defWord =  $("#ins_5");//.data({"tip":"Type here a defenition"});
		var $com1_synWord =  $("#ins_6");//.data({"tip":"Type here a synonims"});
		var $com1_plusMenu =  $(".plusMenu span", "#cardEditor");
		var $com1_inputBlock =  $("#inputBlock");
		var $com1_inlineMiddleDiv =  $("div[id^='ins_']", "#cardEditor");

		
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



		

		
		$com1_inlineMiddleDiv.click(function(){
			
			
			
			var $this = $(this);
			var $thisId = $this.attr("id");
			
			
			
			$com1_inlineMiddleDiv.each(function(){
			
				var $thisEach = $(this);	
				
				$thisEach.removeClass("currentLine");
				
				//if ( $thisEach.attr("id") === $thisId ) alert($thisId);
						
				var $thisTextBlock = $thisEach.find("span.insStrText");
				
				var $thisText = $.trim($thisTextBlock.text());
				
				if( $thisText === '') {
					
						
					
						$thisTextBlock.prev().show();						
					 	if(	$thisEach.children().hasClass("insStrPerf") ) {
							$thisEach.hide();
						}		
						
						
									
				}			
								
			});
			
			
			$this.show();
			
			
		//current line class
			$this.addClass("currentLine");
			
			var cardEditorPos = $com1_cardEditor.offset();			
			var posMainWord = $this.offset();
			
			//set input line next to current line;		
			var setTop = (posMainWord.top - cardEditorPos.top) + $this.height() + 2; 
			var setLeft = (posMainWord.left - cardEditorPos.left) - 55; 
			
			/*
			var inputTip = '';
			if( typeof($this.data("tip")) !== "undefined" ) {
				inputTip = $this.data("tip");
			}
			*/
			
			
			$com1_plusMenu.removeClass("plusMenuActive");
			$("#plus_"+$this.attr("id").replace("ins_","") ).addClass("plusMenuActive");
			
			
			
			
			
			$com1_inputBlock.css({"top":setTop,"left":setLeft}).show();//.find("input").val(inputTip);			
			
		});

		

	
		$com1_plusMenu.click(function(){
			var $this = $(this);
			var insId = $this.attr("id").replace("plus_","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ins_"+insId);
				insIdObj.trigger("click");
			}
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