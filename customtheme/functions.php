<?php	
    define("THEME_DIR", get_template_directory_uri());

    //Enqueue custom style.css
    function enqueue_styles() {
     
        wp_register_script('layout.js', THEME_DIR . '/js/layout.js');
        wp_enqueue_script( 'layout.js' );
        
        /** REGISTER css/screen.cs **/
        wp_register_style( 'style.css', THEME_DIR . '/style.css', array(), '1', 'all' );
        wp_enqueue_style( 'style.css' );
             
    }
    add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
    //Disable woocommerce styles
    add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

    //Add main menu
    function main_menu() {
      register_nav_menu('header-menu',__( 'Main Menu' ));
    }
    add_action( 'init', 'main_menu' );

?>