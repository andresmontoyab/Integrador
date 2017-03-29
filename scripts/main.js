var keys = ["bla","1","2","3","4","5","6","7","8","9",
			"Q","W","E","R","T","Y","U","I","O",
			"A","S","D","F","G","H","J","K","L",
			"Z","X","C","V","B","N","M",",","."];	

var nombres = ["5 CN","5 CS","4 DN","4 DS",
				"4 EN","4 FN", "4 FS", "3 GN","3 GS",
				"3 AN","3 AS","2 BN","2 CN","2 CS",
				"2 DN","2 DS","1 EN","1 FN",
				"1 FS","1 GN","1 GS","1 AN","1 AS",
				"1 BN","1 CN"];

var tonalidadesN=['CN','CS','DN','DS','EN','FN','FS','GN','GS','AN','AS','BN','CN','CS','DN','DS','EN','FN','FS','GN','GS','AN','AS','BN','CN'];

var cadenciasN=['plagal','autentica','completa'];


$(document).ready(function(a){
	$(document).keypress(function(e){
		var char = String.fromCharCode(e.which).toUpperCase();
		for(i = 1;i<keys.length;i++){
			if(char==keys[i]){
				console.log(player[i]);
				$('#'+i).addClass('pressed')
				players.start(i);
			}
		}
	});
	$(document).keyup(function(e){
		var char = String.fromCharCode(e.which);
		for(i = 1; i<keys.length;i++){
			if(char==keys[i]){
				$('#'+i).removeClass('pressed')
			}else if(char=="¼"){
				$('#35').removeClass('pressed')
			}else if(char=="¾"){
				$('#36').removeClass('pressed')
			}
		}
	});
});

function formarAcordeMayor(notaBase){
	var nota1;
	var nota2;
	var nota3;
	var acorde=[1,2,3];
	for(i=0; i<=nombres.length; i++){
		if(notaBase==nombres[i]){
			if((i+8)<nombres.length){
				nota1=i;
				nota2=i+4;
				nota3=i+7;
				i=nombres.length+1;
			}else{
				window.alert("La nota base es demasiado aguda");
			}
		}
	}
	acorde[0]=nota1;
	acorde[1]=nota2;
	acorde[2]=nota3;
	return acorde;
};

function formarCadencia(tonalidad,tipoCadencia){
	var acorde1=[];
	var acorde2=[];
	var acorde3=[];
	var grado4;
	var grado5;
	var cadencia2=[1,2];
	var cadencia3=[1,2,3];
	var subCadena;
	var subCadena4;
	var subCadena5;
	console.log(tonalidad,tipoCadencia);
	if(tipoCadencia=='plagal'){
		for(i=0;i<=tonalidadesN.length;i++){
			if(tonalidad==tonalidadesN[i]){
				subCadena=tonalidadesN[i];
				grado4=i+5;
				subCadena4=tonalidadesN[grado4];
				for(j=0;j<=12;j++){
					if(subCadena==nombres[j].substring(2,4)){
						acorde1 = formarAcordeMayor(nombres[j]);
					}
					if(subCadena4==nombres[j].substring(2,4)){
						acorde2 = formarAcordeMayor(nombres[j]);
					}
				}
			}
		}
		cadencia2[0]=acorde1;
		cadencia2[1]=acorde2;
		return cadencia2;
	}
	console.log(tipoCadencia=='autentica');
	if(tipoCadencia=='autentica'){
		console.log('autentica');
		for(i=0;i<=tonalidadesN.length;i++){
			if(tonalidad==tonalidadesN[i]){
				subCadena=tonalidadesN[i];
				grado5=i+7;
				subCadena5=tonalidadesN[grado5];
				for(j=0;j<=12;j++){
					if(subCadena==nombres[j].substring(2,4)){
						acorde1 = formarAcordeMayor(nombres[j]);
					}
					if(subCadena5==nombres[j].substring(2,4)){
						acorde2 = formarAcordeMayor(nombres[j]);
					}
				}
			}
		}
		cadencia2[0]=acorde1;
		cadencia2[1]=acorde2;
		return cadencia2;
	}
	if(tipoCadencia=='completa'){
		console.log("completa");
		for(i=0;i<=tonalidadesN.length;i++){
			if(tonalidad==tonalidadesN[i]){
				subCadena=tonalidadesN[i];
				grado4=i+5;
				grado5=i+7;
				subCadena4=tonalidadesN[grado4];
				subCadena5=tonalidadesN[grado5];
				for(j=0;j<=11;j++){
					if(subCadena==nombres[j].substring(2,4)){
						acorde1 = formarAcordeMayor(nombres[j]);
						console.log('acorde1:       '+acorde1);
					}
					if(subCadena4==nombres[j].substring(2,4)){
						acorde2 = formarAcordeMayor(nombres[j]);
					}
					if(subCadena5==nombres[j].substring(2,4)){
						acorde3 = formarAcordeMayor(nombres[j]);
					}
				}
			}
		}
		cadencia3[0]=acorde1;
		cadencia3[1]=acorde2;
		cadencia3[2]=acorde3;
		console.log(acorde1+"--1--"+acorde2+"--2--"+acorde3);
		return cadencia3;
	}
}