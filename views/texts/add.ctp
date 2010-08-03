    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
  		google.load("language", "1");
  		google.setOnLoadCallback(initialize);
  		function initialize() {
  			google.language.getBranding('branding');
  		}
		</script>
		
								<div style="color:gray;margin:.1em;position:absolute;top:10px;left:-270px;background-color:lightgrey;padding:0 .5em;">
										<?php echo $html->link(__('tempLogOut',true), array('controller'=>'users','action'=>'logout'),array('class'=>'tempLogOut','style'=>'background-color:#fff') );?>
										&nbsp;
										<?php echo $html->link('fill_1',array(),array('id'=>'fill_1','onclick'=>'return false','style'=>'background-color:#fff') );?>
										<?php echo $html->link('fill_2',array(),array('id'=>'fill_2','onclick'=>'return false','style'=>'background-color:#fff') );?>
										<?php echo $html->link('fill_3',array(),array('id'=>'fill_3','onclick'=>'return false','style'=>'background-color:#fff') );?>
										<?php echo $html->link('clean',array(),array('id'=>'fill_clean','onclick'=>'return false','style'=>'background-color:#fff') );?>
										<?php echo $html->link('cardEditor',array(),array('id'=>'show_card_table','onclick'=>'return false','style'=>'background-color:#fff') );?>
									</div>

	    
		    
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
