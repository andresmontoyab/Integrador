//Vector para poder tener una tonalidad y sacar respecto a ella la nota base
var tones=["CN","CS","DN","DS","EN","FN","FS","GN","GS","AN","AS","BN",
				 "CN","CS","DN","DS","EN","FN","FS","GN","GS","AN","AS","BN","CN","CS","DN","DS","EN","FN","FS","GN","GS","AN","AS","BN"];

/*Estructuras de acordes
Mayores: 3M - 3m
Menores: 3m - 3M
Disminuido: 3m - 3m
*/

var tonica=null;
var tercera=null;
var quinta=null;
var octava=null;
var pos=null;
var acorde=null;
var size = tones.length;

function formarPrimeroMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarTerceroBemolMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+3;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarTerceroMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+4;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarCuartoMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+5;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarQuintoMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+7;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSextoBemolMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+8;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSextoMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+9;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSeptimoMayor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+11;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+4;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarPrimeroMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSegundoMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+2;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarTerceroMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+4;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarCuartoMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+5;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarQuintoMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+7;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSextoMenor(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+9;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+7;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSegundoDisminuido(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+2;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+6;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function formarSeptimoDisminuido(tonalidad){
	for(i=0;i<=size;i++){
		if(tonalidad==tones[i]){
			tonica=i+11;
			pos=tonica;
			i=tones.length+1;
		}
	}
	tercera=pos+3;
	quinta=pos+6;
	octava=pos+12;
	acorde=[tonica, tercera, quinta, octava];
	return acorde;
}

function agregarInversion(acorde, inversion){
	var N_acorde;
	if(inversion=="inversion1"){//agregar la forma como se identifica la primera inversion
		N_acorde=[acorde[1],acorde[0],acorde[2],acorde[3]];
	}else{
		N_acorde=[acorde[2],acorde[0],acorde[1],acorde[3]];
	}
	return N_acorde;	
}

/*Para poder reconocer el acorde a la hora de reproducirlo se
se necesita conocer la octava en la que se encuentra, por eso
se necesita un metodo para preparar el el acorde con el que estamos trabajando,
de pasarlo por posiciones a texto plano*/
function prepararAcorde(acorde){
	var tonica2;
	var tercera2;
	var quinta2;
	var octava2;
	var tAcorde;
	//Se cambian las posiciones por el texto respectivo
	tonica2=tones[acorde[0]];
	tercera2=tones[acorde[1]];
	quinta2=tones[acorde[2]];
	octava2=tones[acorde[3]];
	//Se le agregar la octava en la cual se va a reproducir
	tonica2= "3"+tonica2;
	tercera2= "4"+tercera2;
	quinta2= "4"+quinta2;
	octava2= "4"+octava2;
	tAcorde=[tonica2, tercera2, quinta2, octava2];
	return tAcorde;
}