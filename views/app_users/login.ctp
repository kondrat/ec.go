<div class="ur-formPageLog">

		<h3 style="color:#db605d;margin:0 0 1em 2.5em;"><span style="color:gray;font-size:small;"><?php __('Sign in to');?></span> englishcards.ru</h3>	
			
		<?php echo $this->Form->create('AppUser', array(
																						'action' => 'login',        
																					 	'inputDefaults' => array(
            																												'label' => false,
            																												'div' => false
        																														)		
		) ); ?>
		
		<div class="inputFormWrap">
			<div class="formWrapLabel">
				<?php echo $this->Form->label(__('Username or email',true));?>
			</div>
			<div class="formWrapIn">
				<?php echo $this->Form->input('username', array() ); ?>	
			</div>
		</div>	
		
		<div class="inputFormWrap">
			<div class="formWrapLabel">
				<?php echo $this->Form->label(__('Password',true));?>
			</div>
			<div class="formWrapIn">
				<?php echo $this->Form->input('passwd' , array(	'type' => 'password') ); ?>
			</div>
			<div class="formWrapTip">
				<div style="margin-top: 5px;">
					<?php echo $html->link(__('Forgot?',true), array('admin'=> false, 'action' => 'reset'), array('class' => '' ) ); ?>
				</div>
			</div>
		</div>

		<div class="inputFormWrap">
			<div class="autoLogin" style="float:left;margin:0 0 0 175px;">
				<?php /*echo $this->Form->input('remember_me', array('type' => 'checkbox', 
																										'label' =>  __('Remember Me',true) ,
																										'div'=>false ) 
																); */?>
			</div>
		</div>
		
	
					<div class="" style="float:left;margin:0 0 1.5em 175px;">			
								<span><?php echo $this->Form->button( __('Submit',true), array('type'=>'submit', 'id'=>'logSubmit') ); ?></span>
					</div>
				
		<?php echo $this->Form->end(); ?>



		
		<div class="reg">
			<?php echo $html->link(__('SignUp now',true), array('controller'=>'users','action'=>'reg') );?>
		</div>
		
</div>



