  	<?php 
  		$sideA = array(
  __('most popular',true) =>		array(
									"en" => __("English",true),
									"ru" => __("Russian",true),
									"fr" => __("French",true),
									"de" => __("German",true),
									"it" => __("Italian",true),
									"es" => __("Spanish",true),
									"uk" => __("Ukrainian",true)									
						),
	__('asia',true) => array(
									"ar" => __("Arabic",true),
									"zh-CN" => __("Chinese",true),
									"tl" => __("Filipino",true),								
									"iw" => __("Hebrew",true),
									"hi" => __("Hindi",true),
									"id" => __("Indonesian",true),
									"ja" => __("Japanese",true),
									"ko" => __("Korean",true),
									"ms" => __("Malay",true),	
									"fa" => __("Persian",true),
									"th" => __("Thai",true),								
									"tr" => __("Turkish",true),																	
									"vi" => __("Vietnamese",true),
									"yi" => __("Yiddish",true),	
						),
	__('europe',true) => array(									
									"sq" => __("Albanian",true),									
									"be" => __("Belarusian",true),
									"bg" => __("Bulgarian",true),
									"ca" => __("Catalan",true),								
									"hr" => __("Croatian",true),
									"cs" => __("Czech",true),
									"da" => __("Danish",true),
									"nl" => __("Dutch",true),
									"et" => __("Estonian",true),									
									"fi" => __("Finnish",true),
									"gl" => __("Galician",true),
									"el" => __("Greek",true),									
									"hu" => __("Hungarian",true),
									"is" => __("Icelandic",true),									
									"ga" => __("Irish",true),
									"lv" => __("Latvian",true),
									"lt" => __("Lithuanian",true),
									"mk" => __("Macedonian",true),									
									"mt" => __("Maltese",true),
									"no" => __("Norwegian",true),									
									"pl" => __("Polish",true),
									"pt" => __("Portuguese",true),
									"ro" => __("Romanian",true),
									"sr" => __("Serbian",true),
									"sk" => __("Slovak",true),
									"sl" => __("Slovenian",true),									
									"sv" => __("Swedish",true),																	
									"cy" => __("Welsh",true)
									 
									),
	__('africa and more',true) => array(
									"af" => __("Afrikaans",true),
									"ht" => __("Haitian Creole ALPHA",true),
									"sw" => __("Swahili",true)										
									)				
  		);
  	?>  


<div class="span-24 dic-dicBar" style="">
	<div id="dic-dicWrapperCtrl" class="dic-dicWrapperCtrl">[transltions]:</div>
	<div id="dic-wordHisList" class="dic-wordHisList"></div>
	<span class="dic-fadeOutLine"></span>
	<span class="dic-wordHisMore"><?php __('more');?></span>
</div>

<div id="dic-dicWrapper" class="dic-dicWrapper hide">
	
	<div class="dic-dicInner">
		  <div>
		  	
		  	<div id="dic-langToFrom" class="dic-langToFrom">

		  		
		    	<span><?php __('From');?>: 
		    		
		    		<?php echo $form->input('from', array('id'=>'dic-langFromOpt','selected'=>'en','label'=>false,'div'=>false,'options' => $sideA)); ?>
		    	</span>
		    	<span id="dic-langSwitch"></span>
		    	<span>
		    		<?php __('To');?>:
		    			    	<?php echo $form->input('to', array('id'=>'dic-langToOpt','selected'=>'ru','label'=>false,'div'=>false,'options' => $sideA)); ?>
		    	</span> 
		    	
		    	
		    	
		    </div>
		    
		    <div id="dic-branding"></div>
		    
		    <div class="dic-translLine">
			    <?php echo $form->input('word2transl',array('id'=>'dic-word2Transl','label'=>false,'div'=>false ) );?>
			    <?php echo $form->button(__('Translate',true),array('id'=>'dic-word2TranslBtn') );?>
			  </div>
		    
		    <?php // echo $this->element('cardEditor/langSwitcher/lang_switcher');?>
		    
		  </div>

		  
			<div id="dic-translForWrapper">
				<span id="dic-translFor"></span>
				<!--<span class="dic-sound" id="dic-playSound" ></span>-->
			</div>
			

			
			<div id="dic-topResult" class="dic-res"></div>
			
			<div>
				<ul id="dic-resTabs">
					<li class="dic-none dic-dicSwBase hide"><span class="dic-partOfSpeech"></span><ul></ul></li>		
					<li class="dic-noun dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Noun');?></span><ul></ul></li>
					<li class="dic-verb dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Verb');?></span><ul></ul></li>
					<li class="dic-adjective dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Adjec');?></span><ul></ul></li>			
					<li class="dic-adverb dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Adverb');?></span><ul></ul></li>	
					<li class="dic-pronoun dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Pronoun');?></span><ul></ul></li>
					<li class="dic-conjunction dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Conjunction');?></span><ul></ul></li>
					<li class="dic-preposition dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Preposition');?></span><ul></ul></li>
					<li class="dic-article dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Article');?></span><ul></ul></li>
					<li class="dic-numeral dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Numeral');?></span><ul></ul></li>	
					<li class="dic-suffix dic-dicSwBase hide"><span class="dic-partOfSpeech"><?php __('Suffix');?></span><ul></ul></li>
				</ul>
			</div>
			<div class="dic-bottom"><span id="dic-bottomUp"><?php __('Up');?></span></div>
	</div>
</div>

<div class="dic-toDel" style="position:absolute;top:0;left:0;">
	click toDel
</div>

