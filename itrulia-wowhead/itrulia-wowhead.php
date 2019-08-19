<?php

/*
Plugin Name: Itrulia Wowhead
Plugin URI: Wordpress plugin directory.
Description: Adds tooltip links for plugin.js
Author: Karl Merkli
Author URI: https://github.com/itrulia
Version: 1.0.0
*/

function itrulia_typeToClass($type) {
	switch($type) {
		case 'quest':
			return 'wowhead--quest';

		case 'item':
			return 'wowhead--item';

		case 'npc':
			return 'wowhead--npc';

		case 'spell':
			return 'wowhead--spell';
	}
}

function itrulia_wowheadtooltips_shortcode( $atts, $content = null ) {
	return '<a
		target="_blank"
		href="https://classicdb.ch/?' . $atts['type'] . '=' . $atts['id'] . '"
		data-wowhead="' . $atts['type'] . '=' . $atts['id'] . ';domain=classic"
		class="wowhead ' . itrulia_typeToClass($atts['type']) . '"
	>' . $content .'</a>';
}

add_shortcode( 'wowhead', 'itrulia_wowheadtooltips_shortcode' );
?>
