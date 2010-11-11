<?php
/**
 * Utags Controller
 */
App::import('Controller', 'Tags.Tags'); 
class UtagsController extends TagsController {
	
	public $name = 'Utags';
	
/**
 * beforeFilter callback
 *
 * @return void
 */	
  public function beforeFilter() {
  	parent::beforeFilter();
  	$this->Utag = ClassRegistry::init('Tag');

  	$this->Auth->allow('*'); 
 
 }
	
	public function index(){
		parent::index();
		$this->render('index');
	}
	public function view($tagName = null){
		$tag = $this->Utag->find('first',array('conditions' => array('Tag.name'=> $tagName ) ) );
		$this->set('tag',$tag);
		$this->render('view');
	}

	public function render($action = null, $layout = null, $file = null) {
	    if (!file_exists(VIEWS . 'utags' . DS . $action . '.ctp')) {
	        $file = App::pluginPath('tags') . 'views' . DS . 'tags' . DS . $action . '.ctp';
	    }
	    return parent::render($action, $layout, $file);
	} 
 	
}
?>