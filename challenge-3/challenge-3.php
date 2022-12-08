<?php

// registers the event custom post type 
add_action('init', 'create_event_post_type');
function create_event_post_type() {
    register_post_type(
        'event',
        array(
            'labels'   => array(
                'name' => _x( 'Events', 'post type general name' ),
                'singular_name' => _x( 'Event', 'post type singular name' ),
                'add_new' => _x( 'Add New', 'event' ),
                'add_new_item' => __( 'Add New Event' ),
                'edit_item' => __( 'Edit Event' ),
                'new_item' => __( 'New Event' ),
                'all_items' => __( 'All Events' ),
                'view_item' => __( 'View Event' ),
                'search_items' => __( 'Search Events' ),
                'menu_name' => 'Events'
                'not_found' => __( 'No Events Found' ),
                'not_found_in_trash' => __( 'No products found in the Trash' ), 
            ),
            'has_archive' => true,
            'public' => true
        )
        )
}
// adds short title meta box to the event custom post type
add_action('add_meta_boxes', 'add_short_title_meta_box');
function add_short_title_meta_box() {
    add_meta_box(
        'short-title',
        __('Short Title', 'field'),
        'short_title_meta_box_callback',
        'event'
    );
}

// callback function to create short title meta box
function short_title_meta_box_callback($post) {
    // nonce field for validation
    wp_nonce_field( 'short_title_nonce', 'short_title_nonce' );

    // creates actual text field and input
    $value = get_post_meta( $post->ID, 'short_title', true );
    echo '<input type="text" id="short_title" name="short_title"' . esc_attr( $value ) . '/>';
}

// runs validation and saves short title to the database
add_action( 'save_post', 'save_short_title_meta_box_data' );
function save_short_title_meta_box_data($post_id) {
    // verifies nonce is set
    if (!isset($_POST['short_title_nonce']) || !wp_verify_nonce($_POST['short_title_nonce'], 'short_title_nonce')) {
        return 'nonce not verified';
    }
    // verifies that nonce is valid
    if ( !wp_verify_nonce( $_POST['short_title_nonce'], 'short_title_nonce' ) ) {
        return 'nonce not verified';
    }
    // checks for autosave
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return 'autosave';
    }
    // checks user permissions
    if (isset $_POST['post_type']) && ('event' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id)) {
            return 'user has improper permissions';
        }
        elseif  (!current_user_can('edit_post', $post_id)) {
            return 'user has improper permissions';
        }
    }
    // sanitizes input
    $short_title = sanitize_text_field( $_POST['short_title'] );

    // updates short title in the database
    update_post_meta( $post_id, 'short_title', $my_data );
}

// replaces title with short title in event archive pages
add_filter('get_the_archive_title', 'replace_event_title_archive_page');
function replace_event_title_archive_page($post) {
    $short_title = esc_attr get_post_meta($post->ID, 'short_title', true );
    return $short_title;
}

?>