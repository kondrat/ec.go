    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
  		google.load("language", "1");
  		google.setOnLoadCallback(initialize);
  		function initialize() {
  			google.language.getBranding('branding');
  		}
		</script>


	    
		    
	<?php echo $this->element('threeWaysMenu/three_ways_menu');?>

	<?php echo $this->element('themeEditor/theme_editor');?>

	<?php echo $this->element('leftSideBar/left_side_bar');?>		

<div class="span-14">	
	<div class="currentTextWrapper">
		<div class="span-8" style="font-style:italic;margin-top:1em;font-weight:bold;">
			<?php __('Select the word you wish to make a card');?>
		</div>
		<div class="pageNumber hide" style="margin-top:1em;float:right;margin-right:50px;">
			page&nbsp;<span>1</span>
		</div>
		<div class="span-14 currentText hide.">
			<div class="currentTextSlide"></div>
		</div>
		<div class="curTextUpDownSlider">
			<div class="curTextUp"></div>
			<div class="curTextDown"></div>
		</div>
	</div>	
	
	
		<?php echo $this->element('fileTextUpload/file_text_upload');?>
		
</div>


<?php echo $this->element('cardEditor/card_editor',array('visible'=>false) );?>
