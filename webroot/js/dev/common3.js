$(document).ready( function(){

		var pageChunkNumber = 0;

		var fileTextUploadWrapper =  $(".fileTextUploadWrapper");
		var fileTextUploadControl = $(".textUpload, .textUploadControl button");
		$(".fileTextUploadMenu").toggle(function(){
				$(".upDownSmallArrow").css({'background-position':'0 0'});
				fileTextUploadWrapper.slideDown('fast');
				fileTextUploadControl.attr("disabled","disabled");
				$(".enlarge").hide();
			},
			function(){
				$(".upDownSmallArrow").css({'background-position':'0 -19px'});
				fileTextUploadWrapper.slideUp('fast');
				fileTextUploadControl.attr("disabled", false);
				$(".enlarge").show();
		});

		var BlockUpDown = 1;
		
		var handlerDown = function() {
			
			if (BlockUpDown === 1) {
					BlockUpDown = 0;
					//alert( 'down' );				
					var moveDown =  $(".pageChunkCur").outerHeight(true);
					
					
					$(".pageChunkCur").next().show();
					
					$(".currentTextSlide").animate(
						{
							"margin-top" : '-='+moveDown+'px'
						}, 
						{			
							complete: function() {
									//alert('pageChunkNumber: '+pageChunkNumber+'; '+$(".pageChunk").filter(".pageChunkCur").index());
									$(".pageChunkCur").removeClass("pageChunkCur").next().addClass("pageChunkCur");
									
									if($(".pageChunkCur").next().height() === null ) {
										//$(".curTextDown").unbind('click',handlerDown).addClass("scrollDwDisable");
										$(".curTextDown").removeClass("DownAr");
									} else {
			      				
			      			}	
			      			if(	!$(".curTextUp").hasClass("UpAr") ){      			
			      				$(".curTextUp").addClass("UpAr");
			      			}
			      			setPageNumber();
			      			BlockUpDown = 1;
			    		}
		    		}
						
					);
			}		  
		};
		$(".DownAr").live('click',handlerDown);		
				
		var handlerUp = function() {
			if (BlockUpDown === 1) {
				//alert( 'up' );
					BlockUpDown = 0;
					var moveUp =  $(".pageChunkCur").prev().outerHeight(true);
					
					
					//$(".pageChunkCur").prev().show();
					
					$(".currentTextSlide").animate(
						{
							"margin-top" : '+='+moveUp+'px'
						}, 
						{			
							complete: function() {
									
									$(".pageChunkCur").removeClass("pageChunkCur").prev().addClass("pageChunkCur");
									
									if($(".pageChunkCur").prev().height() === null ) {
										$(".curTextUp").removeClass("UpAr");
									} else {
			      				
			      			}	
			      			if(	!$(".curTextDown").hasClass("DownAr") ){      			
			      				$(".curTextDown").addClass("DownAr");
			      			}
			      			setPageNumber();
			      			BlockUpDown = 1;
			    		}
		    		}
						
					);
			}
		};
		$(".UpAr").live('click',handlerUp);
		

		$("#uplaodText").click(function(){
			
			var curText = $(".textUpload").val();
			$(".currentTextSlide").css({'margin-top':'0px'});
			/*
				$(".currentText").text(curText);
				$(".textUpload").val('');
			*/
	    var textObj = {
	    								"data[Text][text]": curText
	    							};			
			
			
				$.ajax({
						type: "POST",
					  url: path+"/texts/textUpload",
	       	 	dataType: "json",
	        	data: textObj,				  
					  success: function(data) {
					    if ( data.stat === 1 ) {
					    	$(".currentTextSlide").empty();
					    	var curTextHeight = 0;
					    	var prevTextHeight = 0;
					    	
					    	$.each(data.resText, function(i,v){
					    		
					    		$(".currentTextSlide").append('<div class="pageChunk" id="page_'+i+'"></div>');
					    		
					    		var resText = '';
						    		$.each(v,function(k,v2){
						    			resText += '<span class="currentPhrase">'+v2+'.</span> ';
						    		});					    		
					    		$("#page_"+i).html(resText);
									pageChunkNumber = i+1;
									$.data($(".pageChunk:first"),"page",pageChunkNumber);
									
									 
									 	curTextHeight = $("#page_"+i).height();
										if (curTextHeight > prevTextHeight){
									 		prevTextHeight = curTextHeight;
										}
									 
					    	}); 
					    	
									
						    $(".curTextUp").removeClass("UpAr");
								$(".curTextDown").removeClass("DownAr");
															
								if( pageChunkNumber > 1 ) {
									$(".curTextDown").addClass("DownAr");
								}		
																	    	
					    	$(".pageChunk:first").addClass("pageChunkCur").fadeIn();
								setPageNumber();					    	
					    	$(".currentText").height(prevTextHeight+30);
					    	$("#text").val('');
					    	
					    	
					    }else{
					    	//not data yet...
					    }
					 	},
		        error: function(){
		        		flash_message('Problem with the server. Try again later.','fler');
		            $('.tempTest').html('Problem with the server. Try again later.');
		        }
				});
			
		});
		
		



    $(".currentText").bind('mouseup', function() {
      copy_txt();
		  if (txt_quote !=="") {
		   	$(".cardEditor").fadeIn();
		   	$("#mainWord").text(txt_quote);
		   	$("#contextTran span:last").text(contextCurrent); 
		   }      
      
    });

		
		//$(".curTextDown").bind('click', handlerDown);

		
		$(".currentPhrase").live('mouseover mouseout',function(event){			
			  if (event.type == 'mouseover') {
			    $(this).css({'background-color':'lightGoldenRodYellow'});
			    contextCurrent = $(this).text();
			  } else {
			    $(this).css("background-color","white");
			    contextCurrent = '';
			  }
		});
		








		
});



var contextCurrent = '';
var txt_quote = '';

function copy_txt() {
	// if var txt_quote not empty, clear it.
  txt_quote = "";
  if (window.getSelection) {
     txt_quote = window.getSelection().toString();
  } else if (document.getSelection) {
    txt_quote = document.getSelection();                
  } else if (document.selection) {
    txt_quote = document.selection.createRange().text;
  }  
  
  if (txt_quote !=="") {
   //alert(txt_quote);
   }
  
}

function paste_txt(textarea) {
// \n - перевод на новую строку
   if (txt_quote=="") {
    alert("Для вставки цитаты в новое сообщение \nвыделите нужный текст и нажмите - Вставить цитату");
    } else {
      //document.getElementById(textarea).value += "[q]" + txt_quote + "[/q]\n";
    }
}





function setPageNumber() {
	var pageNumText = $(".pageChunk").filter(".pageChunkCur").index();
	$(".pageNumber span").text(pageNumText+1).parent().show();
}




