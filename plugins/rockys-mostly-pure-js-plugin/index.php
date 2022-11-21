<?php
/**
 * Main file for WordPress.
 *
 * @wordpress-plugin
 * Plugin Name: 	Rocky's Mostly Pure JS Cookie Plugin
 * Plugin URI:		http://cookieplugintest.local/
 * Description: 	Broh Open-source Orestbida's code <a href="https://github.com/orestbida/cookieconsent">https://github.com/orestbida/cookieconsent</a>
 * Author:          Rockyk
 * Author URI:		heyitsrocky.com
 * Version: 		0.1
 * Text Domain:		rocky-mostly-pure-js-cookie
 * Domain Path:		/languages
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Helpers
define( 'RK_MOSTLY_PURE_JS_COOKIE_PLUGIN_URI', plugins_url( '', __FILE__ ) );

// Enqueue the script 
// 1 - for now, call the CDN and give it the highest priority
// TODO: in a real thing, set up a build tool to do this, and bind the project via npm + config


function rks_load_scripts() {	
	wp_enqueue_script( 'cookie_consent_js', 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.8/dist/cookieconsent.js', [], null, true );
	wp_enqueue_script( 'cookie_consent_init_js', plugin_dir_url( __FILE__ ) . '/src/cookieconsent-init.js', ['cookie_consent_js'], null, true );    
	wp_register_style( 'cookie_consent_css', 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.8/dist/cookieconsent.css', false,  false);
	wp_enqueue_style ( 'cookie_consent_css' );

}
add_action('wp_enqueue_scripts', 'rks_load_scripts');


// 2 - this is the config file
