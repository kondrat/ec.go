<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php echo $html->charset(); ?>
	<title>
		<?php __('Ez.go:'); ?>
		<?php echo $title_for_layout; ?>
	</title>
	<?php

	
		echo $html->meta('icon');
		echo $html->css(array(
													'ec',
													'ec-ce',
													'ec-uc',
													'ec-dic',
													'ec-lt',
													'ec-u',
													'screen',
													'tipsy/stylesheets/tipsy'
													//'jqcss/css/smoothness/jquery-ui-1.8.2.custom'
													)
										);

		//echo $html->css('print');
		echo '<!--[if IE]>';
		echo $html->css('ie');
		echo $html->css('ec-ie');
		echo '<![endif]-->';
		$userReg = ($this->Session->read('Auth.User.id'))? 1:0;
		echo $html->scriptBlock(
												'var path = "'.Configure::read('path').'";'."\n".'var userReg = '.$userReg.';' 
													);
		echo $html->script(array(	
															'dev/vars',
															'jquery/jquery-1.4.4.min'
															));

		echo $scripts_for_layout;
	?>

</head>
<body>

		
	<div  class="container showgrid.">    
			  <div class="ur-fl">
				  <?php echo $session->flash();?>
			  </div>
		
		    <div class="span-24 ec-contentWrapper" style="min-height:500px;">
		    			<?php echo $this->element('noscript/noscript');?>	        
							<?php echo $content_for_layout; ?>		        
		    </div>
	
	</div>
	
	<div class="ec-pageFooter" style="">
			<div class="container">
				<div class="span-24">
					
			    <div class="span-24">
			    	<div class="ec-footerNote">
		      	 <?php echo $html->link('www.englishCARDS.ru',array('controller'=>'cards','action'=>'index'));?> &copy;<?php echo date('Y');?>
		      	</div>
		   		</div>
		   		
			  </div>
			</div>
	</div>
			
	<?php //echo $this->element('sql_dump'); ?>
	
</body>
</html>
