<div id="cardEditor" class="cardEditor">
	<div id="twoSide">



		
		<div class="cardPad">
			<div class="plusMenu">
				<span id="plus_1">Word</span><span id="plus_2">+More</span>
			</div>
			<table class="tableCard">
				<tr><td>
					<div class="inlineMiddle">
						<div id="ins_1" class="mainWord">test word</div>
						<div id="ins_2" class="moreWord">trans3 word word More test word More test word More test word More test word More test word </div>
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
						<div id="ins_3" class="translWord">Transl test </div>
						<div id="ins_4" class="exWord hide" class="hide">def test </div>
						<div id="ins_5" class="defWord hide" class="hide">def test </div>
						<div id="ins_6" class="synWord hide" class="hide">def test </div>
					</div>
				</tr></td>
			</table>
			<div class="cardLogo"></div>
		</div>	



			
	</div>

	<div id="inputBlock" class="hide">
		<?php echo $form->input('inStr',array('label'=>false,'div'=>false,'class'=>'inputString'));?>
	</div>	
	
</div>