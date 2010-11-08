<?php
App::import('Controller', 'Users.Users');
class AppUsersController extends UsersController {

	var $name = 'AppUsers';
	var $helpers = array();
	//var $components = array( 'Auth','userReg','kcaptcha');

	var $paginate = array('limit' => 5);
	
//--------------------------------------------------------------------
//--------------------------------------------------------------------	
  function beforeFilter() {
  			//default title
  			$this->set('title_for_layout', __('Users data',true) );
  			//allowed actions
  			
        $this->Auth->allow( 'reg','kcaptcha', 'reset', 'userNameCheck',
        										'index','view'
        										//'acoset','aroset','permset','buildAcl'
        										);

        parent::beforeFilter(); 
        $this->User = ClassRegistry::init('AppUser');

				$this->Auth->userModel = 'AppUser';
				$this->Auth->loginAction = array(
                'controller' => 'app_users',
                'action' => 'login',
                'plugin' => false,
               	'admin' => false,
                );

        $this->Auth->autoRedirect = false;
	      $this->Auth->fields = array(
	            'username' => 'username', 
	            'password' => 'passwd'
	            );

			
 
		 		if( $this->action == 'login' && !empty($this->data) ) {
		 				$data = $this->data;
	
		       	if( isset($data[$this->modelClass]['username']) && strpos($data[$this->modelClass]['username'],'@')!== false ){	       		
		       		$user = $this->User->find('first',array( 'conditions'=> array('User.email' => $data[$this->modelClass]['username']), 'contain' => false ) );
		       		if($user != array() ){
		       			$this->data[$this->modelClass]['username'] = $user[$this->modelClass]['username'];
		       			debug($user[$this->modelClass]['username']);
		       			exit;
		       		}
						}
						
						
						if($this->referer() === '/' || $this->referer() === 'items/index'){
 
							if (!isset($data['_Token']) || !isset($data['_Token']['fields']) || !isset($data['_Token']['key'])) {
						 		return false;
						 	}
						 	$token = $data['_Token']['key'];					 	 
						 	if ($this->Session->check('_Token')) {
								$tokenData = unserialize($this->Session->read('_Token'));						 	 
						 		if ($tokenData['expires'] < time() || $tokenData['key'] !== $token) {
						 			return false;
						 		}
							}						
					
							$this->Security->validatePost = false;						
						}
									
				}       


				
				
        // swiching off Security component for ajax call				
				if( $this->RequestHandler->isAjax() && $this->action == 'userNameCheck' ) { 
		   			$this->Security->validatePost = false;
		   	}
		   	
		   	

    }

//--------------------------------------------------------------------
//--------------------------------------------------------------------	
	function reg() {
		
		$stopWord = '';
		
		$this->set('title_for_layout', __('SignUp',true) );
		$this->set('menuType', 'reg');
		
		if($this->Auth->user('id') && $this->Auth->user('group_id') != 2 ) {
			$this->redirect('/',null,true);
		}
		
		
		if ( !empty($this->data) ) {
						
			$this->data[$this->modelClass]['captcha2'] = $this->Session->read('captcha');
			
			debug($this->data);
			
			if ( $this->AppUser->save( $this->data) ) {											
				$a = $this->AppUser->read();
				$this->Auth->login($a);
				$this->Session->setFlash(__('New user\'s accout has been created',true), 'default', array('class' => 'flok'));
				$this->redirect(array('controller' => 'items','action'=>'todo'),null,true);
      } else {
      	
      	$errors = $this->AppUser->invalidFields();
				if( isset( $errors['username']['stopWords'] ) ) {
					$stopWord = $this->_stopWordsCheck( $this->data[$this->modelClass]['username'] );
					$this->set( 'stopWord', $stopWord );
				}
				
				$this->data[$this->modelClass]['captcha'] = null;
				$this->Session->setFlash(__('New user\'s accout hasn\'t been created',true) , 'default', array('class' => 'fler') );
			}
		}
		

	}	
//--------------------------------------------------------------------	
//ajax staff

	//----------------------------------------------------------------
		function userNameCheck() {

			$contents = array();
			$token = '';
			$type = '';
			$errors = array();
			$toCheck = '';
			
			Configure::write('debug', 0);
			$this->autoLayout = false;
			$this->autoRender = false;
			
			if ( $this->RequestHandler->isAjax() ){

				if (strpos(env('HTTP_REFERER'), trim(env('HTTP_HOST'), '/')) === false) {
					$this->Security->blackHole($this, 'Invalid referrer detected for this request!');
				}


				if( !isset($this->data['_Token']['key']) || ( $this->data['_Token']['key'] !== $this->params['_Token']['key'] )  ) {
					$this->Security->blackHole($this, 'Invalid referrer detected for this request!');
				}
				
				
			
				//don't foreget about santization and trimm
				if( isset($this->data[$this->modelClass]['username']) && $this->data[$this->modelClass]['username'] != null ) {
					$type = 'username';
				} else if( isset($this->data[$this->modelClass]['email']) && $this->data[$this->modelClass]['email'] != null ) {
					$type = 'email';
				} else {
					$this->Security->blackHole($this, 'Invalid referrer detected for this request!');
				}
				
				

						$this->User->set( $this->data );
						

						$errors = $this->User->invalidFields();

										
						if( !isset($errors[$type]) ) {
							$contents['stat'] = 1;
							
						} else {
							$contents['stat'] = 0;
							$contents['error'] = $errors[$type];

							if( $type === 'username' && isset($errors[$type]['stopWords']) ) {
								$contents['stW'] = $this->_stopWordsCheck( $this->data[$this->modelClass]['username'] );
							} 
						}




	      $contents = json_encode($contents);
				$this->header('Content-Type: application/json');				
				return ($contents);			
			
			
			
			} else {				
				$this->Security->blackHoleCallback = 'gotov';	
				$this->Security->blackHole($this, 'You are not authorized to process this request!');			
			}
		
		}
				//blackhole redirection
				//-----------------------------
				function gotov() {
					$this->redirect(null, 404, true);
				}	
				//stopWords checking
				//----------------------------
				function _stopWordsCheck($username = null ) {					
					$toCheck = strtolower($username);				
					if ( $a = Configure::read('stopWords') ){					
						foreach( $a as $k => $v ) {
							$res = str_replace($v, "", $toCheck ); 
							if( $res !== $toCheck ){
								return $v;
							}
						}
					}
					return false;			
				}
				
		//kcaptcha stuff
		//----------------------------------------------------------------
    function kcaptcha() {
        $this->kcaptcha->render(); 
    } 

//--------------------------------------------------------------------

	function login() {	
		parent::login();
		
		
		//debug($this->data);
			
		$user = array();
		$this->set('title_for_layout', __('Login',true) );
		$this->set('menuType', 'login');

//add logic for group_id == 2 here
		if( !empty($this->data) ) {
										
			if( $this->Auth->login($this->data) ) {
						$this->redirect( $this->Auth->redirect() );
						echo 'try';		
			} else {
				//$this->data[$this->modelClass]['passwd'] = null;
				$this->Session->setFlash(__('Check your login and password',true),'default', array('class' => 'fler'));
				echo 'bad';
			}
			
		} else {

			if( !is_null( $this->Session->read('Auth.User.username') ) && $this->Session->read('Auth.User.group_id') != 2 ){
				$this->redirect( $this->Auth->redirect() );			
			} 
		}
		
	}

//--------------------------------------------------------------------	
    function logout() { 
    		$guest =  false;   	    	
    		$tempUserName = __('Good bay, ',true).$this->Session->read('Auth.User.username'); 
    		if( $this->Session->read('Auth.User.group_id') == 2 ) {
    			$guest =  true;
    		}
    			
        $this->Auth->logout();
        if (!$guest) {
        	$this->Session->setFlash( $tempUserName, 'default', array('class' => 'flok') );
        }
        $this->redirect( '/',null,true);        
    }
//--------------------------------------------------------------------	
    function reset() { 
    	
/* 
$to      = '4116457@mail.ru';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: mail.tehnoavia.ru' . "\r\n" .
    'Reply-To: mail.tehnoavia.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
*/
   	
    	
    	if( empty($this->data) ) {
    		return;    		
    	}

		// Check email is correct
		$user = $this->User->find( 'first', array( 'conditions' => array('User.email' => $this->data[$this->modelClass]['email'] ), 'fields' => array('id', 'username', 'email'), 'contain' => false ) ) ;

		if(!$user) {
			$this->User->invalidate('email', 'Этот E-mail не зарегистрирован' );
			return;
		}
		
		// Generate new password
		$password = $this->userReg->createPassword();
		//debug ($user);
		$data[$this->modelClass]['password'] = $this->Auth->password($password);
		$this->User->id = $user[$this->modelClass]['id'];
		if(!$this->User->saveField('password', $this->Auth->password($password) ) ) {
			return;
		}
		
			// Send email
			if(!$this->__sendNewPasswordEmail( $user, $password) ) {
				$this->Session->setFlash('Ошибка при отправке Email','default', array('class'=>'fler'));
			}
			else {
				$this->flash('Новый пароль выслан на  '.$user[$this->modelClass]['email'].'. Please login', '/users/login', 10);
			}
			
					      
    }
    
    /**
     * Send out an password reset email to the user email
     * 	@param Array $user User's details.
     *  @param Int $password new password.
     *  @return Boolean indicates success
    */
    function __sendNewPasswordEmail($user, $password) {


        // Set data for the "view" of the Email
        $this->set('password', $password );
        $this->set( 'username', $user[$this->modelClass]['username'] );
      
        //$this->Email->to = $user[$this->modelClass]['username'].'<'.$user[$this->modelClass]['email'].'>';
        //$this->Email->to = $user[$this->modelClass]['username'].' <akv@tehnoavia.ru>';
        $this->Email->to = $user[$this->modelClass]['username'].' <pom01@mail.ru>';
        //$this->Email->to = 'Alexey Kondratyev <alexey.kondratyev@gmail.com>';
        $this->Email->subject = env('SERVER_NAME') . ' - New password';
        //$this->Email->from = 'Best preson <noreply@'. env('SERVER_NAME').'>';
        //$this->Email->from = 'quoondo <quoondo@gmail.com>';
       	$this->Email->from = 'ak ak <akv@tehnoavia.ru>';
        $this->Email->template = 'user_password_reset';
        $this->Email->sendAs = 'text';   // you probably want to use both :) 
 
			 /* SMTP Options */
			 
			   $this->Email->smtpOptions = array(
			        'port'=>'25',
			        //'port'=>'465',
			        'timeout'=>'30',
			        'host' => 'r1',
			        //'host' => 'ssl://smtp.gmail.com',
			        'username'=>'akv',
			        //'username'=>'quoondo@gmail.com',
			        'password'=>'Qaz1234',
			        //'password'=>'Kondrat01',
			   );
       	
       	
        $this->Email->delivery = 'smtp';
        
    		$this->set('smtp-errors', $this->Email->smtpError);
               
       	//$this->Email->delivery = 'debug'; 
        return $this->Email->send();
    		 


	}     
//--------------------------------------------------------------------	

/*
	function index() {
		$this->User->recursive = 0;
		$this->set("tt","tt");
		$this->set('users', $this->paginate());
	}
*/
	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid user', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set($this->modelClass, $this->User->read(null, $id));
	}

	function add() {
		if (!empty($this->data)) {
			$this->User->create();
			if ($this->User->save($this->data)) {
				$this->Session->setFlash(__('The user has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The user could not be saved. Please, try again.', true));
			}
		}
	}

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid user', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->User->save($this->data)) {
				$this->Session->setFlash(__('The user has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The user could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->User->read(null, $id);
		}
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for user', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->User->delete($id)) {
			$this->Session->setFlash(__('User deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('User was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
	function admin_index() {
		$this->User->recursive = 0;
		$this->set('users', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid user', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('user', $this->User->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->User->create();
			if ($this->User->save($this->data)) {
				$this->Session->setFlash(__('The user has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The user could not be saved. Please, try again.', true));
			}
		}
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid user', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->User->save($this->data)) {
				$this->Session->setFlash(__('The user has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The user could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->User->read(null, $id);
		}
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for user', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->User->delete($id)) {
			$this->Session->setFlash(__('User deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('User was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
}
?>
