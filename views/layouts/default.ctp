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
													'ez',
													'ec-ce',
													'lt',
													'ez-u',
													'screen',
													//'jqcss/css/smoothness/jquery-ui-1.8.2.custom'
													)
										);

		//echo $html->css('print');
		echo '<!--[if IE]>';
		echo $html->css('ie');
		echo $html->css('ez-ie');
		echo '<![endif]-->';
		$userReg = ($this->Session->read('Auth.User.id'))? 1:0;
		echo $html->scriptBlock(
												'var path = "'.Configure::read('path').'";'."\n".'var userReg = '.$userReg.';' 
													);
		echo $html->script(array(	
															'dev/vars',
															'jquery/jquery-1.4.2.min',
															//'jquery/jquery.form',
															//'jquery/jquery-ui-1.8.custom.min',
															'jquery/jquery.ui.core.min',
															'jquery/jquery.ui.widget.min',
															//'jquery/jquery.ui.tabs.min',
															'jquery/jquery.ui.mouse.min.js',
															'jquery/jquery.ui.draggable.min',
															'dev/jquery.coloranim',
															'dev/jquery.elastic',
															'dev/func',
															'dev/common1',
															'dev/common2',
															'dev/common3',
															'dev/print',
															'dev/reg',
															'dev/tempToDel',
															//'sound/soundmanager2',
															'sound/soundmanager2-nodebug-jsmin',
															'sound/sound'
															));

		echo $scripts_for_layout;
	?>

</head>
<body>
	<div class="ec-pageHeader">

			<div class="container">
				<div class="span-24">
						<div class="span-16 ">
							<div style="float:left;margin:0.8em 0 0 2em;">
								<?php echo $html->link($html->image(
																										'pic/ez-logo-24-dev.png'
																										//'pic/ez-logo-50-w.png'
																										//'pic/ez-logo-50-3.png'
																										), array('controller'=>'cards','action'=>'index'),array('escape'=>false) );?> 
							</div>
						</div>
						<div class="span-8 last" style="position:relative;" >
							<div style="margin-top:0px;">
									<div class="ur-signUpNow">
										<?php if(!$this->Session->read('Auth.User.id')|| $this->Session->read('Auth.User.group_id') == 2 ): ?>
											<?php echo $html->link(__('SignUp',true), array('controller'=>'users','action'=>'reg') );?>
										<?php endif ?>
									</div>
									<div class="ur-signUpNow">
										<?php if(!$this->Session->read('Auth.User.id')|| $this->Session->read('Auth.User.group_id') == 2 ): ?>
											<?php echo $html->link(__('LogIn',true), array('controller'=>'users','action'=>'login') );?>
										<?php else: ?>
											<?php echo $html->link(__('LogOut',true), array('controller'=>'users','action'=>'logout') );?>
										<?php endif ?>
									</div>	
							</div>
						</div>
					</div>


	
		</div>					
			
	</div>


		
	<div class="container showgrid.">    
			  <div class="ur-fl">
				  <?php echo $session->flash();?>
			  </div>
		
		    <div class="span-24 ec-contentWrapper" style="">
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
