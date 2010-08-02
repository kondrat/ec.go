//theme editing
$(document).ready( function(){
	
	var themeAction = 'edit';
	//themeName defined in vars.js
	themeName = $(".themeName");	
	var themeNameText = $.trim(themeName.text());
	


	
	if ( typeof(currentTheme.theme) === 'undefined' ) {
		currentTheme.theme = themeNameText;
	}
	themeName.data(currentTheme);
	delete currentTheme;



		
	var saveTheme = $(".saveTheme");
	var selectTheme = $(".selTheme");	
	var editCreateTheme = $(".editCreateTheme");
	
	$(".leftSideTheme,.themeNameCard").text(themeNameText);
	
	
	$(".editTheme").click(function(){	
		themeAction = 'edit';	
		//themeName.empty().hide();
		//editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val(themeNameText);
		
	});

	$(".createNewTheme").click(function(){
		themeAction = 'create';		
		//themeName.empty().hide();
		//editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val('');
	});

	$(".selectTheme").click(function(){	
		//themeName.empty().hide();
		//editCreateTheme.hide();		
		selectTheme.fadeIn();
		
	});

	$("#saveThemeCancel").click(function(){	
		saveTheme.fadeOut( function() {
			themeName.text(themeNameText).show();
			editCreateTheme.show();
		});
	});
	$("#selThemeCancel").click(function(){	
		selectTheme.fadeOut(function(){
			themeName.text(themeNameText).show();
			editCreateTheme.show();
		});
	});
	
	
	
	$("#saveThemeSave").click(function(){
		saveTheme.fadeOut(function() {
				var newThemeNameTextBool = 0;
				var newThemeNameText = $.trim($("#themeEdit").val());
				if (newThemeNameText !== '') {
					themeNameText = newThemeNameText;
					newThemeNameTextBool = 1;
				} else {
					newThemeNameTextBool = 0;
				}
			
				themeName.text(themeNameText).show();
			
			editCreateTheme.show();
			$(".themeNameCard,.leftSideTheme").text(themeNameText);
			
			//if user regged we update the theme;
			if(userReg && newThemeNameTextBool) {
				var themeObj;
				switch (themeAction) {
					case 'edit':
				 		themeObj = {
												"data[Theme][theme]": themeNameText,
												"data[Theme][id]": themeName.data('id')
											};
						break;
					case 'create':
				 		themeObj = {
												"data[Theme][theme]": themeNameText
											};
						break;						
																	
				}

	      $.ajax({
	        type: "POST",
	        url: path+"/themes/updateTheme",
	        dataType: "json",
	        data: themeObj,
	        success: function(data) {
	        	
						
						
	        	if ( data.stat === 1 ) { 
	        		       		
							themeName.data('theme',data.theme);
														
							if(themeAction === 'create'){
								
								themeName.data('id',data.themeId);
								$("ul.newCards").empty();
								var themeSelect = $("#themeSelect");
								$("option:first").removeAttr("selected");
								themeSelect.children().prepend('<option value="'+data.themeId+'">'+data.theme+'</option>').children("option:first").css({'color':'brown','font-weight':'bold'});
								$("option:first").attr('selected', 'yes');
								
							} else if(themeAction === 'edit') {
		          	$.each($("#themeSelect option"), function(key, val) {
		          		if( $(this).val() == data.themeId ) {
		          			$(this).text(data.theme);
		          		} 
		          	});
							}
														
							//alert(themeName.data().toSource());
	          } else {
	          	
	          }
	        },
	        error: function(){
	            $('.tempTest').html('Problem with the server. Try again later.');
	        }
	      });				
			} else {
				
					themeName.data('theme', themeNameText );
				
			}
			
		});

	});


	
	$("#themeSelect option").live('click',function(){
		//alert($(this).val()+' | '+$(this).text() );
		
		if($(this).val() != '') {
		
				var selectedTheme = $(this).text();
				var selcetedId = $(this).val();
				selectTheme.fadeOut(function() {
					themeNameText = selectedTheme;
					themeName.text(themeNameText).show();
					editCreateTheme.show();
					$(".themeNameCard,.leftSideTheme").text(themeNameText);
					
					
					var prevSelectedId = themeName.data('id');
					themeName.data('theme',themeNameText);
					themeName.data('id',selcetedId);
					//alert(themeName.data().toSource());
					if( prevSelectedId != themeName.data('id') ) {
						
						$("ul.newCards").empty();
						var themeObj = {
														//"data[Theme][theme]": themeName.data('theme'),
														"data[Theme][id]": themeName.data('id')
													};
						
			      $.ajax({
			        type: "POST",
			        url: path+"/themes/selTheme",
			        dataType: "json",
			        data: themeObj,
			        success: function(data) {
								
			        	if ( data.stat === 1 ) {        		
									$.each(data.cards, function(key, val) {
										$("ul.newCards").append('<li>'+val.Card.word+'</li>');
									});
			          } else {
			          	
			          }
			        },
			        error: function(){
			            $('.tempTest').html('Problem with the server. Try again later.');
			        }
			      });					
					
					}
					
				});		
		}
	});

	
});
