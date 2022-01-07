	let No_AVISO = 0;
	const delay = ms => new Promise(res => setTimeout(res, ms));
	const res = function(){ return true; };
	/*
	var tempo = function(res,ms){
			return setTimeout(res, ms);
			};
	var pr = function(res, ms){ return new Promise(tempo(function(){},ms)); }
	const delay = function(ms){
		pr(function(){}, ms);
		}
	*/	

	
	// Devolve um HTMLElement (o primeiro)  que atende pelo seletor dado
	function getByQry(sele){
		return document.querySelector(sele);
		}
		
	// Mostra um aviso (pela DIV#aviso), em local fixo, por 4 segundos
	async function mostrAviso(arr, sele){
		getByQry(sele).style.left = "50px";
		getByQry(sele).style.display = "block";
		await delay(4000);
		setTimeout(proximAviso(arr),9000*No_AVISO);
		}
		
	// Esconde o aviso de acordo com o tempo padrão do mostrAviso
	function escondAviso(sele){
		$(sele).style.left = "-800px";
		$(sele).style.display = "none";
		}
	
	// Seleciona o próximo aviso
	function proximAviso(arr){
		var sele = arr[No_AVISO];
		No_AVISO++;
		if( No_AVISO <= arr.length ){
			setTimeout(mostrAviso(arr, sele),4000*No_AVISO);
			}
		}