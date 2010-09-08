<div class="span-24 dic-dicBar" style="">
	<div id="dic-dicWrapperCtrl" class="dic-dicWrapperCtrl">[transltions]:</div>
	<ul id="dic-wordHisList" class="dic-wordHisList"></ul>
</div>

<div id="dic-dicWrapper" class="dic-dicWrapper hide">
  <div>
  	<div class="dic-langToFrom">
    	<span>En</span> » <span>Ru</span> <span class="dic-upDownArr1"></span>
    </div>
    <?php echo $form->input('word2transl',array('id'=>'dic-word2Transl','label'=>false,'div'=>false ) );?>
    <?php echo $form->button(__('Translate',true),array('id'=>'dic-word2TranslBtn') );?>
  </div>
	<div id="dic-translForWrapper">
		<span id="dic-translFor"></span>
		<span class="dic-sound" id="dic-playSound" ></span>
	</div>
	<div id="dic-branding"></div>
	
	<div id="dic-topResult" class="dic-res"></div>

		<ul id="#dic-resTabs">
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
