<div class="span-24" style="background-color:#224466;margin-top:230px;color:white;">
	<div id="dic-dicWrapperCtrl">[transltions]:</div>
	<ul style="float:left;margin:5px;">
		<li style="display:inline;margin-left:5px;"><a href="javascript:void(0);" style="color:#66AACC;">test</a></li>
		<li style="display:inline;margin-left:5px;"><a href="javascript:void(0);" style="color:#66AACC;">test2</a></li>
	</ul>
</div>

<div id="dic-dicWrapper" class="dic-dicWrapper hide">
  <div>
    <span>En</span> » <span>Ru</span>
    <?php echo $form->input('word2transl',array('id'=>'dic-word2Transl','label'=>false,'div'=>false ) );?>
    <?php echo $form->button(__('Translate',true) );?>
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
