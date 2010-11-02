<?php
class AppController extends Controller {
	var $components = array( 
				'Security',
				'Cookie',
				'Session',
				/*
				'Auth' => array(
            'loginAction' => array(
                'controller' => 'app_users',
                'action' => 'login',
                'plugin' => false,
               	'admin' => false,
                ),
             ),
				*/
				'Auth',
				
				//'AutoLogin',

				/*
        'SuperAuth.Auth' => array(
            'authorize' => 'actions',
            'actionPath' => 'controllers/',
            'allowedActions' => array('display')
        ),
        'SuperAuth.Acl',
				*/
				'RequestHandler',
				'Email',
				'DebugKit.Toolbar'
			);
	var $helpers = array('Session','Js','Html', 'Form', 'Cache');
	var $publicControllers = array('pages', 'test');
//--------------------------------------------------------------------
	function beforeFilter() {

	
		Configure::load('vars');
		/*
		
		if ( !isset($this->params['lang']) && !$this->Session->check('langSes') ) {
			
			$this->params['lang'] = $defaultLang;
			$this->Session->write('langSes',$defaultLang);

		} elseif ( !isset($this->params['lang']) && $this->Session->check('langSes') ) {
			$this->params['lang'] = $this->Session->read('langSes');
		} 

		Configure::write('Config.language', $this->params['lang']);
		$this->Session->write('langSes',$this->params['lang']);
		*/


	    function beforeFilter() {
	        // only initialize row-level acl on view/edit/delete actions, and only in controllers that have models with ACL attached
	        if (in_array($this->action, array('view', 'edit', 'delete')) && isset($this->{$this->modelClass}) && $this->{$this->modelClass}->Behaviors->attached('Acl')) {
	            $this->Auth->authorize = 'acl';
	        }
	        
	        
	        
	        $this->Auth->loginRedirect = array('controller' => 'members', 'action' => 'home');
					
					echo 'nu i?';
					debug($this->Auth->loginRedirect);
					exit;
	    }



				//this is before superAuth
				/*
		
        if( isset($this->Auth) ) {
								
            if($this->viewPath == 'pages' && $this->params['action'] != 'admin_index') {
                $this->Auth->allow('*');
            } else {
                $this->Auth->authorize = 'controller';
	            if ( in_array( low($this->params['controller']), $this->publicControllers) ) {
                	//$this->Auth->allow('*');
                	$this->Auth->deny('pages/admin_index');
                }
            }
            $this->Auth->loginAction = array('admin' => false, 'controller' => 'users', 'action' => 'login');

        } 
        */
				
	}
	
		function isAuthorized() {

            if ('1' == '1') {
                return true;
            } else {
                return false;
            }
        return true;
    }
	
//--------------------------------------------------------------------

	function beforeRender() {
		if( isset($this->params['prefix']) && $this->params['prefix'] == 'admin' ) {	
			$this->layout = 'admin';
		}				
	}
//--------------------------------------------------------------------




}
?>
