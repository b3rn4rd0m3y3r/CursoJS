(function( window, undefined ) {

var
	// Referência à raiz BMy(document)
	rootBMy,
	// Usa o documento correto de acordo com a chamada (sandbox)
	document = window.document,
	location = window.location,
	core_version = "1.0.0",
	BMy = function() {
		// O objeto BMy é realmente o construtor init 'melhorado'
		return new BMy.fn.init();
		}
BMy.fn = BMy.prototype = {
	// Versão corrente do jQuery
	bmy: core_version,

	constructor: BMy,
	init: function() {
		var elem, colecao;
		},
	isNumeric: function(str) {
		if (typeof str != "string") return false;  
		return !isNaN(str) && !isNaN(parseFloat(str)) 
		},
	right: function(txt,NoCars) {
		var tam = txt.length;
		var ret = NoCars <= tam ? txt.substr(tam-NoCars,NoCars):"";
		return ret;
		},
	left: function(txt,NoCars){
		var tam = txt.length;
		var ret = NoCars <= tam ? txt.substr(0,NoCars):"";
		return ret;
		},
	ZeroField: function(Valor, NoZeros){
		const zeros = "0000000000000000";
		var casas = parseInt(Math.log10(Valor)+1);
		if( NoZeros < casas ){
			NoZeros = casas;
			return this.right(zeros.concat(Valor),NoZeros);
			}
		},

	getById: function(nomeId){
			return document.getElementById(nomeId);
			},
	getByClass: function(classe){
		return this.getByQry("."+classe);
		},
	getByQry: function(sele){
			return document.querySelectorAll(sele);
			},
	showById: function(nomeId){
		event.stopPropagation();
		this.getById(nomeId).style.display = "block";
		},
	showByClass: function(classe){
		event.stopPropagation();
		var lista = getByClass(classe);
		var elem = null;
		for( no in lista){
			if( typeof(lista[no]) == "object" ){
				elem = lista[no];
				console.log(elem);
				elem.style.display = "block";
				}
			}
		},
	hideById: function(nomeId){
		event.stopPropagation();
		this.getById(nomeId).style.display = "none";
		},
	hideByClass: function(classe){
		event.stopPropagation();
		var lista = this.getByClass(classe);
		var elem = null;
		for( no in lista){
			if( typeof(lista[no]) == "object" ){
				elem = lista[no];
				console.log(elem);
				elem.style.display = "none";
				}
			}
		},
	version: function() {
		return this.bmy;
		}
	}
	
window.BMy = window.$ = BMy;
BMy.fn.init.prototype = BMy.fn;

})( window );
