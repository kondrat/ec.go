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

		  		
		    	<span><?php __('From');?>: En<span class="dic-upDownArr1"></span></span> » <span>get<?php __('To');?>: Ru <span class="dic-upDownArr1"></span> </span> 
		    	
		    	
		    </div>
		    <?php echo $form->input('word2transl',array('id'=>'dic-word2Transl','label'=>false,'div'=>false ) );?>
		    <?php echo $form->button(__('Translate',true),array('id'=>'dic-word2TranslBtn') );?>
		    
		    <?php echo $this->element('cardEditor/langSwitcher/lang_switcher');?>
		    
		  </div>

		  
			<div id="dic-translForWrapper">
				<span id="dic-translFor"></span>
				<!--<span class="dic-sound" id="dic-playSound" ></span>-->
			</div>
			
			<div id="dic-branding"></div>
			
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

