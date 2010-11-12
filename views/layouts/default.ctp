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
															'jquery/jquery-1.4.4.min',
															//'jquery/jquery.form',
															//'jquery/jquery-ui-1.8.custom.min',
															'jquery/jquery.ui.core.min',
															'jquery/jquery.ui.widget.min',
															//'jquery/jquery.ui.tabs.min',
															'jquery/jquery.ui.mouse.min.js',
															'jquery/jquery.ui.draggable.min',
															'dev/jquery.ba-outside-events.min',
															'dev/jquery.coloranim',
															'dev/jquery.elastic',
															'dev/jquery.tmpl.min',
															'tipsy/javascripts/jquery.tipsy',
															'dev/func',
															'dev/common1',
															'dev/common2',
															'dev/common3',
															'dev/print',
															//'/users/js/dev/reg',
															'dev/tempToDel',
															//'sound/soundmanager2',
															'sound/soundmanager2-nodebug-jsmin',
															'sound/sound'
															));

		echo $scripts_for_layout;
	?>

</head>
<body>
	<?php echo $this->element('popUpWrapper/popups');?>
	<div class="ec-pageHeader">

			<div class="container">
				<div class="span-24">
						<div class="span-16 ">
							<div style="float:left;margin:0.8em 0 0 2em;">
								<?php echo $html->link($html->image(
																										//'pic/card2.png'
																										'pic/ez-logo-24-dev.png'
																										//'pic/ez-logo-50-w.png'
																										//'pic/ez-logo-50-3.png'
																										), array('plugin'=>false,'controller'=>'cards','action'=>'index'),array('escape'=>false) );?> 
							</div>
						</div>
						<div class="span-8 last" style="position:relative;" >
							<div style="margin-top:0px;">
								
								<?php if(!$this->Session->read('Auth.User.id')): ?>
									<?php $userReg = 0;?>								
									<div class="ur-signUpNow"><?php echo $html->link(__('SignUp',true), array('plugin'=>'users','controller'=>'users','action'=>'reg') );?></div>
									<div class="ur-signUpNow"><?php echo $html->link(__('LogIn',true), array('plugin'=>'users','controller'=>'users','action'=>'login') );?></div>
									
								<?php else: ?>
									<?php $userReg = 1;?>
									
										<div style="float:left;margin:.9em .5em 0 0;"><?php echo $html->link(__('Profile',true), array('plugin'=>'users','controller'=>'users','action'=>'dashboard') );?></div>
										<div class="ur-signUpNow"><?php echo $html->link(__('LogOut',true), array('plugin'=>'users','controller'=>'users','action'=>'logout') );?></div>		
								
								<?php endif ?>
				
							</div>
						</div>
				</div>	
			</div>								
	</div>


		
	<div data-sec="<?php echo $userReg;?>" id="ec-mainContainer" class="container showgrid.">    
			  <div class="ur-fl">
			  	<script id="ur-flMesTmpl" type="text/x-jquery-tmpl"> 
    				<div id="flashMessage" class="${classs}" >${message}</div>
					</script>
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
