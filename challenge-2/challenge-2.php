<?php 
function ci_get_related_posts( $post_id, $related_count, $args = array() ) {
   $args = wp_parse_args( (array) $args, array(
       'orderby' => 'rand',
       'return'  => 'query',
   ) );

   $related_args = array(
        // left $post_id out of get_post_type() which defaults to current post
       'post_type'      => get_post_type(),
       'posts_per_page' => $related_count,
       'post_status'    => 'publish',
       'orderby'        => $args['orderby'],
       'tax_query'      => array(),
       // date query to only retreive posts from last 30 days
       'date_query'     => array(
            array(
                'after' => '30 days ago',
                'inclusive' => true
            )
       )
   );
   
   // left $post_id out of get_post() which defaults to current post
   $post = get_post();
   $taxonomies = get_object_taxonomies( $post, 'names' );

   foreach ( $taxonomies as $taxonomy ) {
       // used $post instead of $post_id
       $terms = get_the_terms( $post, $taxonomy );
       if ( empty( $terms ) ) {
           continue;
       }
       $term_list = wp_list_pluck( $terms, 'slug' );
       $related_args['tax_query'][] = array(
           'taxonomy' => $taxonomy,
           'field'    => 'slug',
           'terms'    => $term_list
       );
   }

   if ( count( $related_args['tax_query'] ) > 1 ) {
       $related_args['tax_query']['relation'] = 'OR';
   }

   if ( $args['return'] == 'query' ) {
       return new WP_Query( $related_args );
   } else {
       return $related_args;
   }
} 
?>