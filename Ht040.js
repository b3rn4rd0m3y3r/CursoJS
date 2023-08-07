/*
	Biblioteca
*/
function aviso(){
	var flds = document.querySelectorAll("FORM#frm INPUT");
	var S = "";
	for(i=0;i<flds.length-1;i++){
		S = S + flds.item(i).name + ":" +  flds.item(i).value + "\n";
		}
	alert(S);
	}