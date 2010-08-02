    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
  		google.load("language", "1");
  		google.setOnLoadCallback(initialize);
  		function initialize() {
  			google.language.getBranding('branding');
  		}
		</script>

<?php echo $this->element('threeWaysMenu/three_ways_menu');?>

<?php echo $this->element('themeEditor/theme_editor');?>

<?php echo $this->element('leftSideBar/left_side_bar');?>		    
		    
<?php echo $this->element('cardEditor/card_editor');?>