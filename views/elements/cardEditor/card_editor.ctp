<div id="ce-cardEditor" class="ce-cardEditor">

		
		<div class="ce-cardPad">
			<div class="ce-plusMenu">
				<span id="ce-plus-ins-1">Word</span><span id="ce-plus-ins-2">+More</span>
			</div>
			<table class="ce-tableCard">
				<tr><td>
					<div class="ce-inlineMiddle">
						<div id="ce-ins-1" class="ce-mainWord hide"><span class="ce-insStrTip"><?php __('Your word...');?></span><span class="ce-insStrText"></span></div>
						<div id="ce-ins-2" class="ce-moreWord hide"><span class="ce-insStrPerf">[info]</span><span class="ce-insStrTip">more test</span><span class="ce-insStrText"></span></div>
					</div>
				</tr></td>
			</table>
			<div class="ec-cardLogo"></div>
			<div id="ce-langFrom" class="ce-langFrom">EN</div>
		</div>


		
		
		<div class="ce-cardPad">
			
			<div class="ce-plusMenu">
				<span id="ce-plus-ins-3">Transl</span><span id="ce-plus-ins-4">+Example</span><span id="ce-plus-ins-5">+Definition</span><span id="ce-plus-ins-6">+Synonim</span>
			</div>
			
			<table class="ce-tableCard">
				<tr><td>
					<div class="ce-inlineMiddle">
						<div id="ce-ins-3" class="ce-translWord hide"><span class="ce-insStrTip"><?php __('Translation');?></span><span class="ce-insStrText"></span><span class="ce-insStrSug"></span></div>
						<div id="ce-ins-4" class="ce-exWord hide" class="hide"><span class="ce-insStrPerf">[ex]</span><span class="ce-insStrTip">ex test</span><span class="ce-insStrText"></span><span class="ce-insStrSug"></span></div>
						<div id="ce-ins-5" class="ce-defWord hide" class="hide"><span class="ce-insStrPerf">[def]</span><span class="ce-insStrTip">def test</span><span class="ce-insStrText"></span></div>
						<div id="ce-ins-6" class="ce-synWord hide" class="hide"><span class="ce-insStrPerf">[syn]</span><span class="ce-insStrTip">syn test</span><span class="ce-insStrText"></span></div>
					</div>
				</tr></td>
			</table>
			<div class="ec-cardLogo"></div>
			<div id="ce-langTo" class="ce-langTo">RU</div>
		</div>	



			





	<div id="ce-inputBlock" class="hide">
		<div class="ce-inputBlockMain">
			<?php echo $form->textarea('inStr',array('id'=>'ce-inStr','label'=>false,'div'=>false,'class'=>'ce-inputString','disabled'=>'disabled'));?>
		</div>
		<div class="ce-inputBlockCtrl">
			<a id="ce-inpBlOk" href="javascript:;" class="ec-but-minibutton"><span><?php __('X');?></span></a>
			<?php //echo $form->button('save',array('id'=>'ce-inpBlSave','class'=>'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'));?>
			<?php //echo $form->button(__('Ok',true),array('id'=>'ce-inpBlOk','class'=>''));?>
			<?php //echo $html->link(__('Clear',true),array("#"),array('id'=>'ce-inpBlClear') );?>
		</div>
		<div id="ce-inBlTrWrap" class="ce-inputBlockTransl hide">
			<a id="ce-inpBlTr" href="javascript:;" class="ec-but-minibutton"><span><?php __('Translate');?></span></a>
			<span style="color:brown;font-weight:bold;">en</span> &raquo; <span style="color:green;font-weight:bold;">ru</span>
		</div>	
	</div>	
	<div id="ce-saveCardWrapper">
		<div class="ce-saveCard">
			<?php echo $form->button(__('Save',true), array('id'=>'ce-saveCardBtn','disabled'=>'disabled') );?>
		</div>
	</div>
</div>


<script id="movieTemplate" type="text/x-jquery-tmpl"> 
    <li><b>${Name}</b> <i>${Type}</i> (${ReleaseYear})</li>
</script>




