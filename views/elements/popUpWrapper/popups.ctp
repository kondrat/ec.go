	<!-- alert for insertIntoW -->
	<div id="dic-insInAlert" class="dic-insertIntoWrapper hide">
		<?php 
			$options = array('ce-ins-3'=>'translation','ce-ins-1'=>'word');
		?>
		<div class="dic-insertInto">
			<span>insert into:</span>&nbsp;<span><?php echo $form->select('transl', $options, null, array('id'=>'dic-insertTranslSug','escape'=>false));?></span>
			<span><a href="javascript:;" id="dic-wordIns" class="ec-but-minibutton"><span><?php __('Ok');?></span></a></span>
			<span><a href="javascript:;" id="dic-wordInsCancel" class="ec-but-minibutton"><span><?php __('Cancel');?></span></a></span>
		</div>
	</div>
	
	
	<div id="ec-overlay" class="hide"></div>