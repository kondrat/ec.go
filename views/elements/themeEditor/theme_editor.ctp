

	<div id="lt-wrapper" class="prepend-3 span-16 lt-wrapper">	

		<span class="lt-lesson"><?php __('Lesson');?> 1,</span>
		<span class="lt-theme">theme "Unit"</span>
		<span class="lt-edit"><?php echo $html->link("[edit]",array("#"));?></span><span style="font-weight:bold;margin:0 2px;">;</span> 
		<span><?php __('Face side:');?></span><span id="lt-langFrom" class="lt-langFrom">EN</span><span><?php __('Back side:');?></span><span id="lt-langTo" class="lt-langTo">RU</span>
		<?php echo $this->element('themeEditor/langSwitcher/lang_switcher');?>
		<span id="lt-ceToggle">toggle CE</span>
	</div>
	

