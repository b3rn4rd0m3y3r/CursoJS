(function( window, undefined ) {

var
	// Referência à raiz jQuery(document)
	rootjQuery,

	// Usa o documento correto de acordo com a chamada (sandbox)
	document = window.document,
	location = window.location,
	core_version = "a.0.0",
	jQuery = function( selector, context ) {
		// O objeto jQuery é realmente o construtor init 'melhorado'
		return new jQuery.fn.init( selector, context, rootjQuery );
		}
jQuery.fn = jQuery.prototype = {
	// Versão corrente do jQuery
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// Manipula: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
			}
		},
	size: function() {
		return this.length;
		},
	version: function() {
		return this.jquery;
		}
	}
	
window.jQuery = window.$ = jQuery;
jQuery.fn.init.prototype = jQuery.fn;

})( window );
