	<!-- alert for insertIntoSug -->
	<div id="dic-insInAlert" class="dic-insertIntoWrapper hide">
		<?php 
			$options = array(
							__('face side',true) => array(
																							'ce-ins-1'=>__('Word',true),
																							'ce-ins-2'=>__("Info",true)
																							),
							__('back side',true) => array(
																							'ce-ins-3'=>__('Translation',true),
																							'ce-ins-4'=>__('Example',true),
																							'ce-ins-5'=>__('Definition',true),
																							'ce-ins-6'=>__('Synonim',true)
																							)
											);
		?>
		<div class="dic-insertInto">
			<span data-insMode="ins" class="dic-insMode dic-insModeActive">insert into</span>&nbsp;
      <span>or</span>&nbsp;
      <span data-insMode="add" class="dic-insMode">add to:</span>&nbsp;
      <span><?php echo $form->select('transl', $options, null, array('id'=>'dic-insertTranslSug','escape'=>false));?></span>
			<span><a href="javascript:;" id="dic-wordIns" class="ec-but-minibutton"><span><?php __('Ok');?></span></a></span>
			<span><a href="javascript:;" id="dic-wordInsCancel" class="ec-but-minibutton"><span><?php __('Cancel');?></span></a></span>
		</div>
	</div>
	
	
	<div id="ec-overlay" class="hide"></div>