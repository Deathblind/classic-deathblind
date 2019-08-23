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

		case 'friendlynpc':
			return 'wowhead--friendly-npc';

		case 'spell':
			return 'wowhead--spell';
	}
}

function itrulia_fixedType($type) {
	switch($type) {
		case 'friendlynpc':
			return 'npc';
	}

	return $type;
}

function itrulia_wowheadtooltips_shortcode( $atts, $content = null ) {
	$type = itrulia_fixedType($atts['type']);

	return '<a
		target="_blank"
		href="https://classicdb.ch/?' . $type . '=' . $atts['id'] . '"
		data-wowhead="' . $type . '=' . $atts['id'] . '&amp;domain=classic"
		class="wowhead ' . itrulia_typeToClass($atts['type']) . '"
	>' . $content .'</a>';
}

add_shortcode( 'wowhead', 'itrulia_wowheadtooltips_shortcode' );
?>
