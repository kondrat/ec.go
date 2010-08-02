<div class="themes view">
<h2><?php  __('Theme');?></h2>
	<dl><?php $i = 0; $class = ' class="altrow"';?>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Id'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $theme['Theme']['id']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('User'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $this->Html->link($theme['User']['id'], array('controller' => 'users', 'action' => 'view', $theme['User']['id'])); ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Theme'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $theme['Theme']['theme']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Created'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $theme['Theme']['created']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Modified'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $theme['Theme']['modified']; ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<h3><?php __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(sprintf(__('Edit %s', true), __('Theme', true)), array('action' => 'edit', $theme['Theme']['id'])); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('Delete %s', true), __('Theme', true)), array('action' => 'delete', $theme['Theme']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $theme['Theme']['id'])); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('List %s', true), __('Themes', true)), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('New %s', true), __('Theme', true)), array('action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('List %s', true), __('Users', true)), array('controller' => 'users', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('New %s', true), __('User', true)), array('controller' => 'users', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('List %s', true), __('Cards', true)), array('controller' => 'cards', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('New %s', true), __('Card', true)), array('controller' => 'cards', 'action' => 'add')); ?> </li>
	</ul>
</div>
<div class="related">
	<h3><?php printf(__('Related %s', true), __('Cards', true));?></h3>
	<?php if (!empty($theme['Card'])):?>
	<table cellpadding = "0" cellspacing = "0">
	<tr>
		<th><?php __('Id'); ?></th>
		<th><?php __('User Id'); ?></th>
		<th><?php __('Theme Id'); ?></th>
		<th><?php __('Text Id'); ?></th>
		<th><?php __('Word'); ?></th>
		<th><?php __('Tr'); ?></th>
		<th><?php __('Def'); ?></th>
		<th><?php __('Cont'); ?></th>
		<th><?php __('Syn'); ?></th>
		<th><?php __('Created'); ?></th>
		<th><?php __('Modified'); ?></th>
		<th class="actions"><?php __('Actions');?></th>
	</tr>
	<?php
		$i = 0;
		foreach ($theme['Card'] as $card):
			$class = null;
			if ($i++ % 2 == 0) {
				$class = ' class="altrow"';
			}
		?>
		<tr<?php echo $class;?>>
			<td><?php echo $card['id'];?></td>
			<td><?php echo $card['user_id'];?></td>
			<td><?php echo $card['theme_id'];?></td>
			<td><?php echo $card['text_id'];?></td>
			<td><?php echo $card['word'];?></td>
			<td><?php echo $card['tr'];?></td>
			<td><?php echo $card['def'];?></td>
			<td><?php echo $card['cont'];?></td>
			<td><?php echo $card['syn'];?></td>
			<td><?php echo $card['created'];?></td>
			<td><?php echo $card['modified'];?></td>
			<td class="actions">
				<?php echo $this->Html->link(__('View', true), array('controller' => 'cards', 'action' => 'view', $card['id'])); ?>
				<?php echo $this->Html->link(__('Edit', true), array('controller' => 'cards', 'action' => 'edit', $card['id'])); ?>
				<?php echo $this->Html->link(__('Delete', true), array('controller' => 'cards', 'action' => 'delete', $card['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $card['id'])); ?>
			</td>
		</tr>
	<?php endforeach; ?>
	</table>
<?php endif; ?>

	<div class="actions">
		<ul>
			<li><?php echo $this->Html->link(sprintf(__('New %s', true), __('Card', true)), array('controller' => 'cards', 'action' => 'add'));?> </li>
		</ul>
	</div>
</div>
