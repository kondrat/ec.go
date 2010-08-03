$(document).ready( function(){

		var $com1 = {
			cardEditor: $("#cardEditor"),
			mainWord: $("#ins_1").data({"tip":"Type main word in"}),
			moreWord: $("#ins_2").data({"tip":"Type more info in"}),
			translWord: $("#ins_3").data({"tip":"Type here a translation"}),
			exWord: $("#ins_4").data({"tip":"Type here a example"}),
			defWord: $("#ins_5").data({"tip":"Type here a defenition"}),
			synWord: $("#ins_6").data({"tip":"Type here a synonims"}),
			plusMenu: $(".plusMenu span", "#cardEditor"),
			inputBlock: $("#inputBlock"),
			inlineMiddleDiv: $(".inlineMiddle div", "#cardEditor")

		};
		
		$com1.cardEditor.hover(function(){
			$(this).addClass("cardEditorActive");
		},
		function(){
			$(this).removeClass("cardEditorActive");
		});

		
		$com1.inlineMiddleDiv.hover(function(){
			$(this).addClass("currentLineActive");
		},
		function(){
			$(this).removeClass("currentLineActive");
		});





		
		$com1.inlineMiddleDiv.click(function(){
			$com1.inlineMiddleDiv.removeClass("currentLine");
			var $this = $(this);
			
			$this.show();
			
			//current line class
			$this.addClass("currentLine");
			
			var cardEditorPos = $com1.cardEditor.offset();			
			var posMainWord = $this.offset();
			
			//set input line next to current line;		
			var setTop = (posMainWord.top - cardEditorPos.top) + $this.height() + 2; 
			var setLeft = (posMainWord.left - cardEditorPos.left) - 55; 
			
			var inputTip = '';
			if( typeof($this.data("tip")) !== "undefined" ) {
				inputTip = $this.data("tip");
			}
			
			$com1.plusMenu.removeClass("plusMenuActive");
			$("#plus_"+$this.attr("id").replace("ins_","") ).addClass("plusMenuActive");
			$com1.inputBlock.css({"top":setTop,"left":setLeft}).show().find("input").val(inputTip);			
			
		});

		

	
		$com1.plusMenu.click(function(){
			var $this = $(this);
			var insId = $this.attr("id").replace("plus_","");
			if(typeof(insId) !== "undefined") {
				insIdObj = $("#ins_"+insId);
				insIdObj.trigger("click");
			}
		});	
				
});