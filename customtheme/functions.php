<?php	
    define("THEME_DIR", get_template_directory_uri());
    
    function enqueue_styles() {
     
        /** REGISTER css/screen.cs **/
        wp_register_style( 'style.css', THEME_DIR . '/style.css', array(), '1', 'all' );
        wp_enqueue_style( 'style.css' );
             
    }
    add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
    add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

    function admin_bar(){

        if(is_user_logged_in()){
          add_filter( 'show_admin_bar', '__return_true' , 1000 );
        }
      }
      add_action('init', 'admin_bar' );

?>