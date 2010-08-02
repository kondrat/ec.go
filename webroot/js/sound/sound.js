$(document).ready( function(){

		var sound = {
			noSound: 0
		}




				soundManager.debugMode = false;
				soundManager.waitForWindowLoad = true;
				soundManager.url = "./js/sound/swf/";
				soundManager.nullURL = './js/sound/swf/null.mp3';
				
        
        
        
    $('#submitTranslId').click(function() {
         $("#playSound").removeClass("activeSound");
					 var aSoundObject = soundManager.createSound({			
					  id: 'mySound',
					  url: com.song,
					  autoLoad: false,
					  autoPlay:true,
					  multiShot:false,
					  multiShotEvents:false,
					  volume: 0,
					  onload: function() {
					    //alert( 'The sound '+this.sID+' loaded!');	
					    if( this.readyState !== 3 ) {
					    	sound.noSound = 0;
					    	$(".wordToSound").text("No sound");
					      this.destruct();
					    } else {
					    	//alert('sound');
					      $("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
					      sound.noSound = 1;
					      $(".wordToSound").text(com.songWord);
					    }					
					  },
					  onfinish:function() {	
					  	//$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
					  	this.destruct();					  	
					  }

					});		     
    } );



				
				
		$('#playSound').click(function() {
			
					if(sound.noSound === 1) {
						var aSoundObject2 = soundManager.createSound({			
					  	id: 'mySound',
					  	url: com.song,
						  onload: function() {
						    //alert( 'The sound '+this.sID+' loaded!');	
						    if( this.readyState !== 3 ) {
						      this.destruct();
						    } else {
						    	//alert('sound2');
						      //$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
						    }					
						  },
						  whileloading:function(){
						  	//alert('test');
						  	$("#playSound").removeClass("activeSound activeSoundHover").addClass("activeSoundPlay");
						  },
						  onfinish:function() {	
						  	$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
						  	this.destruct();					  	
						  }					  	
					  	
					  	
					  	
					  });
					  
						aSoundObject2.play();
					}
		});
		
		$(".activeSound").live('mouseover mouseout',function(event){
			  if (event.type == 'mouseover') {
			    $(this).addClass("activeSoundHover");
			  } else {
			    $(this).removeClass("activeSoundHover");
			  }			
		});
		
		
});
