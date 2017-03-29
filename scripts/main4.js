var ton=['CN','CS','DN','DS','EN','FN','FS','GN','GS','AN','AS','BN','CN','CS','DN','DS','EN','FN','FS','GN','GS','AN','AS','BN','CN','CS'];

//Estructuras de las cadencias
var plagal=[1,4,1];
var autentica=[1,5,1];
var completa=[1,4,5,1];
var completaFull=[1,4,64,5,1];
var autenticaInvertida=[1,5/*quinto invertido*/,1/*primero invertido*/];//El quinto grado esta invertido
var medial=[1,56,1];										//Quinto grado con bajo en la sexta mayor
var transportada5con5=[1,5/5,5/*quinto invertido*/];		//Quinto grado del quinto grado
var autenticaTransportada=[1,4/5/*PrimerGradoNormal	*/,5]							//Quinto grado del cuarto grado
var plagalTransportada=[1,5/4,4/*Cuarto invertido*/]		//Cuarto grado del quinto grado
var transportada4con4=[1,4/4,4/*Cuarto invertido*/]			//Cuarto grado del cuarto grado


//Los acordes tendran 4 notas

function formarCuartoCuarto(tonalidad){
	var Bajo=["2AS","2BN","3CN","3CS","3DN","3DS","3EN","3FN","3FS","3GN","3GS","3AN"];
	var Tenor=["4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS"];
	var Contra=["4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN"];
	var Sopra=["4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN"];
	var pos;
	var subCadena;
	var cuartoCuarto;
	//Ciclo para hallar el grado correcto
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			cuartoCuarto=ton[i+5+5];
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la tonalidad
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(cuartoCuarto==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarcuartoInvertido(tonalidad){
	var Bajo=["3FN","3FS","3GN","3GS","3AN","3AS","3BN","4CN","4CS","4DN","4DS","4EN"];
	var Tenor=["4CN","4CS","4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN"];
	var Contra=["4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN"];
	var Sopra=["4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS"];
	var pos;
	var subCadena;
	var cuartoGrado;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			cuartoGrado=ton[i+5];
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la tonalidad
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(cuartoGrado==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarQuintoCuarto(tonalidad){
	var Bajo=["3CN","3CS","3DN","3DS","3EN","3FN","3FS","3GN","3GS","3AN","3AS","3BN"];
	var Tenor=["4CN","4CS","4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN"];
	var Contra=["4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS"];
	var Sopra=["4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN"];
	var pos;
	var subCadena;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(tonalidad==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarQuintoQuinto(tonalidad){
	var Bajo = ["3DN","3DS","3EN","3FN","3FS","3GN","3GS","3AN","3AS","3BN","4CN","4CS"];
	var Tenor= ["4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN"];
	var Contra=["4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS"];
	var Sopra= ["5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN","6CN","6CS"];
	var pos;
	var subCadena;
	var quintoQuinto;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			quintoQuinto=ton[i+7+7];
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(quintoQuinto==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarQuintoInvertido(tonalidad){
	var Bajo=  ["3GN","3GS","3AN","3AS","3BN","4CN","4CS","4DN","4DS","4EN","4FN","4FS"];
	var Tenor= ["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Contra=["4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS"];
	var Sopra= ["5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN","6CN","6CS"];
	var pos;
	var subCadena;
	var quintoGrado;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			quintoGrado=ton[i+7];
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(quintoGrado==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarQuinto6(tonalidad){
	var Bajo=  ["2BN","3CN","3CS","3DN","3DS","3EN","3FN","3FS","3GN","3GS","3AN","3AS"];
	var Tenor= ["4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS"];
	var Contra=["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Sopra= ["5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN","6CN","6CS"];
	var pos;
	var subCadena;
	var quintoGrado6;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			quintoGrado6=ton[i+7+4];
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0; i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(quintoGrado6==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}


function formarPrimeroInvertido(tonalidad){
	var Bajo=  ["3CN","3CS","3DN","3DS","3EN","3FN","3FS","3GN","3GS","3AN","3AS","3BN"];
	var Tenor= ["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Contra=["5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN"];
	var Sopra= ["5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN","6CN","6CS","6DN","6DS"];
	var pos;
	var subCadena;
	//Ciclo para hallar la tonalidad
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(tonalidad==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarPrimero(tonalidad){
	var Bajo= ['3CN','3CS','3DN','3DS','3EN','3FN','3FS','3GN','3GS','3AN','3AS','3BN'];
	var Tenor= ["4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS"];
	var Contra=["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Sopra= ["5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN"];
	var pos;//Variable para identificar el intervalo
	var subCadena;
	//Ciclo para hallar la tonalidad
	for(i=0; i < Bajo.length ;i++){
		subCadena = Bajo[i].substring(1,3);
		if(tonalidad==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarCuarto(tonalidad){
	var Bajo=  ["3FN","3FS","3GN","3GS","3AN","3AS","3BN","4CN","4CS","4DN","4DS","4EN"];
	var Tenor= ["4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN"];
	var Contra=["4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS"];
	var Sopra= ["5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN"];
	var subCadena;
	var pos;
	var cuartoGrado;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			cuartoGrado=ton[i+5];//Mas 5 porque se quiere el cuarto grado
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(cuartoGrado==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	console.log(acorde+"forma cuarto");
	return acorde;
}

function formarQuinto(tonalidad){
	var Bajo=  ["3GN","3GS","3AN","3AS","3BN","4CN","4CS","4DN","4DS","4EN","4FN","4FS"];
	var Tenor= ["4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS"];
	var Contra=["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Sopra= ["4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS"];
	var subCadena;
	var pos;
	var quintoGrado;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			quintoGrado=ton[i+7];//Mas 7 porque se quiere el quinto grado
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(quintoGrado==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarQuintoParaFull(tonalidad){
	//Cambiar los numeros del bajo, ya que es la nota mas baja
	var Bajo=  ["2GN","2GS","2AN","2AS","2BN","3CN","3CS","3DN","3DS","3EN","3FN","3FS"];
	var Tenor= ["4DN","4DS","4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS"];
	var Contra=["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Sopra= ["4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS"];
	var subCadena;
	var pos;
	var quintoGrado;
	//Ciclo para hallar el grado correcto de la tonalidad
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			quintoGrado=ton[i+7];//Mas 7 porque se quiere el quinto grado
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(quintoGrado==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarPrimero64(tonalidad){
	var Bajo=  ["3GN","3GS","3AN","3AS","3BN","4CN","4CS","4DN","4DS","4EN","4FN","4FS"];
	var Tenor= ["4EN","4FN","4FS","4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS"];
	var Contra=["4GN","4GS","4AN","4AS","4BN","5CN","5CS","5DN","5DS","5EN","5FN","5FS"];
	var Sopra= ["5CN","5CS","5DN","5DS","5EN","5FN","5FS","5GN","5GS","5AN","5AS","5BN"];
	var pos;//Variable para identificar el intervalo
	var subCadena;
	var bajoQuinta;
	for(i=0;i<ton.length;i++){
		subCadena=ton[i];
		if(tonalidad==subCadena){
			bajoQuinta=ton[i+7];//Mas 7 porque se quiere el quinto grado
			i=ton.length+1;
		}
	}
	//Ciclo para hallar la nota base
	for(i=0;i<Bajo.length;i++){
		subCadena=Bajo[i].substring(1,3);
		if(bajoQuinta==subCadena){
			pos=i;
			i=Bajo.length+1;
		}
	}
	var acorde=[Bajo[pos],Tenor[pos],Contra[pos],Sopra[pos]];
	return acorde;
}

function formarCadencia(tonalidad, tipoCadencia){
	var primero = formarPrimero(tonalidad);
	var cuarto = formarCuarto(tonalidad);
	var quinto = formarQuinto(tonalidad);
	var primero64 = formarPrimero64(tonalidad);
	var quintoParaFull = formarQuintoParaFull(tonalidad);
	var primeroInvertido = formarPrimeroInvertido(tonalidad);
	var quinto6 = formarQuinto6(tonalidad);
	var quintoInvertido = formarQuintoInvertido(tonalidad);
	var quintoQuinto = formarQuintoQuinto(tonalidad);
	var quintoCuarto = formarQuintoCuarto(tonalidad);
	var cuartoInvertido = formarcuartoInvertido(tonalidad);
	var cuartoCuarto = formarCuartoCuarto(tonalidad);
	//Se compara el tipo de candencia y se retorna un vector de notas, dentro de un vector de acordes
	if(tipoCadencia=='pl'){
		plagal=[primero,cuarto,primero];
		return plagal;
	}
	else if(tipoCadencia=='au'){
		autentica=[primero,quinto,primero];
		return autentica;
	}
	else if(tipoCadencia=='com'){
		completa=[primero,cuarto,quinto,primero];
		return completa;
	}
	else if(tipoCadencia=='inve'){
		completaFull=[primero,cuarto,primero64,quintoParaFull,primero];
		return completaFull;
	}
	else if(tipoCadencia=='i1'){
		autenticaInvertida=[primero,quintoInvertido,primeroInvertido];
		return autenticaInvertida;
	}
	else if(tipoCadencia=='i2'){
		medial=[primero,quinto6,primero];
		return medial;
	}
	else if(tipoCadencia=='i3'){
		transportada5con5=[primero,quintoQuinto,quintoInvertido];
		return transportada5con5;
	}
	else if(tipoCadencia=='i4'){
		autenticaTransportada=[primero,primero,quinto];
		return autenticaTransportada;
	}
	else if(tipoCadencia=='i5'){
		plagalTransportada=[primero,quintoCuarto,cuartoInvertido];
		return plagalTransportada;
	}
	else if(tipoCadencia=='i6'){
		transportada4con4=[primero,cuartoCuarto,cuartoInvertido];
		return transportada4con4;
	}
}
