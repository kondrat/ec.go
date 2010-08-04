<div id="cardEditor" class="cardEditor">
	<div id="twoSide">



		
		<div class="cardPad">
			<div class="plusMenu">
				<span id="plus_1">Word</span><span id="plus_2">+More</span>
			</div>
			<table class="tableCard">
				<tr><td>
					<div class="inlineMiddle">
						<div id="ins_1" class="mainWord"><span class="insStrTip">Word test</span><span class="insStrText"></span></div>
						<div id="ins_2" class="moreWord hide"><span class="insStrPerf">[info]</span><span class="insStrTip">trans3 word word More test word More test word More test word More test word More test word</span><span class="insStrText"></span></div>
					</div>
				</tr></td>
			</table>
			<div class="cardLogo"></div>
		</div>


		
		
		<div class="cardPad">
			
			<div class="plusMenu">
				<span id="plus_3">Transl</span><span id="plus_4">+Example</span><span id="plus_5">+Definition</span><span id="plus_6">+Synonim</span>
			</div>
			
			<table class="tableCard">
				<tr><td>
					<div class="inlineMiddle">
						<div id="ins_3" class="translWord"><span class="insStrTip">Transl test</span><span class="insStrText"></span></div>
						<div id="ins_4" class="exWord hide" class="hide"><span class="insStrPerf">[ex]</span><span class="insStrTip">ex test</span><span class="insStrText"></span></div>
						<div id="ins_5" class="defWord hide" class="hide"><span class="insStrPerf">[def]</span><span class="insStrTip">def test</span><span class="insStrText"></span></div>
						<div id="ins_6" class="synWord hide" class="hide"><span class="insStrPerf">[syn]</span><span class="insStrTip">syn test</span><span class="insStrText"></span></div>
					</div>
				</tr></td>
			</table>
			<div class="cardLogo"></div>
		</div>	



			
	</div>

	<div id="inputBlock" class="hide">
		<div class="inputBlockMain">
			<?php echo $form->input('inStr',array('label'=>false,'div'=>false,'class'=>'inputString'));?>
		</div>
		<div class="inputBlockCtrl">
			<a id="inpBlOk" href="javascript:;" class="minibutton"><span>
				<?php __('Ok');?>
			</span></a>
			<?php //echo $form->button('save',array('id'=>'inpBlSave','class'=>'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'));?>
			<?php //echo $form->button(__('Ok',true),array('id'=>'inpBlSave','class'=>''));?>
			<?php echo $html->link(__('Clear',true),array("#"),array('id'=>'inpBlClear') );?>
		</div>
		
	</div>	
	
</div>