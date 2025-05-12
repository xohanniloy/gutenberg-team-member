<?php
/**
 * @package BWDSSB Blocks
 * Blocks Loader
 */

// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Blocks Loader Class
 */
class BWDSSB_SERVICE_SHOWCASE_BLOCKS_LOADER {

    /**
     * Constructor
     */
    public function __construct() {

        // Register Blocks
        add_action( 'init', [$this, 'register_blocks'] );

        //Register Block Category
        if ( version_compare( BWDSSB_SERVICE_SHOWCASE_WP_VERSION, '5.8', '>=' ) ) {
            add_filter( 'block_categories_all', [$this, 'register_service_showcase_block_category'], 99999, 2 );
        } else {
            add_filter( 'block_categories', [$this, 'register_service_showcase_block_category'], 99999, 2 );
        }

        // Enqueue Inline style on render block
        add_filter( 'render_block', [$this, 'generate_inline_style_on_render_block'], 10, 2 );

        // enqueue editor assets
        add_action( 'enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'] );

        // enqueue assets for frontend
        add_action( 'enqueue_block_assets', [$this, 'enqueue_assets'] );

        // Support Svg image
        add_filter( 'mime_types', [$this, 'add_svg_to_upload_mimes'] );

    }

    /**
     * Enqueue Editor Assets
     */
    public function enqueue_editor_assets() {
        wp_enqueue_script(
            'bwdssb-blocks-global-js',
            BWDSSB_SERVICE_SHOWCASE_ADMIN_URL . './dist/global.js',
            [],
            BWDSSB_SERVICE_SHOWCASE_VERSION,
            true
        );
    }

    /**
     * Enqueue Assets
     */
    public function enqueue_assets() {
        wp_enqueue_style( 'bwdssb-service-showcase-blocks', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' );
    }
    /**
     * Support Svg Image
     */
    public function add_svg_to_upload_mimes( $upload_mimes ) {
        $upload_mimes['svg'] = 'image/svg+xml';
        return $upload_mimes;
    }

    /**
     * Blocks Category
     */
    public function register_service_showcase_block_category( $categories, $post ) {
        return array_merge(
            [
                [
                    'slug'  => 'bwdssb-service-showcase-blocks',
                    'title' => __( 'Service Showcase', 'bwdssb-service-showcase' ),
                ],
            ],
            $categories
        );
    }

    /**
     * Load Blocks
     */
    public function register_blocks() {

        // get all blocks from includes/blocks/blocks.php
        require_once BWDSSB_SERVICE_SHOWCASE_DIR_PATH . './includes/blocks/blocks.php';

        // Register Blocks
        if ( !empty( $bwdssb_service_showcase_blocks ) && is_array( $bwdssb_service_showcase_blocks ) ) {
            foreach ( $bwdssb_service_showcase_blocks as $block ) {
                register_block_type(
                    BWDSSB_SERVICE_SHOWCASE_DIR_PATH . './build/blocks/' . $block['name']
                );
            }
        }

    }

    /**
     * Register Single Block
     */
    // public function register_single_block( $block ) {
    //     register_block_type(
    //         BWDSSB_SERVICE_SHOWCASE_DIR_PATH . './build/blocks/' . $block['name'],
    //         isset( $block['args'] ) ? $block['args'] : []
    //     );

    // }

    /**
     * Register Inline Style
     */
    function generate_inline_style_on_render_block( $block_content, $block ) {

        if ( isset( $block['blockName'] ) && str_contains( $block['blockName'], 'bwdssb/' ) ) {
            if ( isset( $block['attrs']['blockStyle'] ) ) {

                $style = $block['attrs']['blockStyle'];
                $handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'bwdssb-service-showcase';

                // convert style array to string
                if ( is_array( $style ) ) {
                    $style = implode( ' ', $style );
                }

                // minify style to remove extra space
                $style = preg_replace( '/\s+/', ' ', $style );

                wp_register_style(
                    $handle,
                    false,
                    [],
                    BWDSSB_SERVICE_SHOWCASE_VERSION
                );
                wp_enqueue_style( $handle );
                wp_add_inline_style( $handle, $style );

            }
        }
        return $block_content;
    }

}

new BWDSSB_SERVICE_SHOWCASE_BLOCKS_LOADER();