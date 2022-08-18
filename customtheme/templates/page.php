<?php 
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            the_title( '<h2>', '</h2>' ); 
            the_post_thumbnail(); 
            the_excerpt('<h1>', '</h1>');
            the_content('<div>', '</div>');
        } // end while
    } // end if
?>