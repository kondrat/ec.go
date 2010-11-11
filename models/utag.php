<?php
/**
 * utags
 */
App::import('Model', 'Tags.Tag');
 
class Utag extends Tag {

/**
 * useTable
 *
 * @var string
 */
	public $useTable = 'tags';
/**
 * Name
 *
 * @var string
 */
	public $name = 'Tag';

}
?>