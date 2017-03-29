var gradosMayores=["I","ii","iii","IV","V","vi","viid","I6","I64","ii6","ii64","IV6","V6","V64"];

var gradosMenores=["i","iid","bIII","iv","v","bVI","VII","i6","i64","iid6","iid64","iv6","v6","v64"];

var acorde;
//Mayor
//I - ii - iii - IV - V - vi - viid
//Menor
//i - iid - III - iv - v - VI - VII
//Inversiones
//1 = 6/3	2= 6/4

function interpretar(entrada,tonalidad){
	//Switch para los Grados Mayores

	if(gradosMayores[0]==entrada){
		acorde = formarPrimeroMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[1]==entrada){
		acorde = formarSegundoMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[2]==entrada){
		acorde = formarTerceroMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[3]==entrada){
		acorde = formarCuartoMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[4]==entrada){
		acorde = formarQuintoMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[5]==entrada){
		acorde = formarSextoMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[6]==entrada){
		acorde = formarSeptimoDisminuido(tonalidad);
		acorde=agregarInversion(acorde,"inversion1"); 	
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[7]==entrada){
		acorde = formarPrimeroMayor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[8]==entrada){
		acorde = formarPrimeroMayor(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[9]==entrada){
		acorde = formarSegundoMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[10]==entrada){
		acorde = formarSegundoMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[11]==entrada){
		acorde = formarCuartoMayor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[12]==entrada){
		acorde = formarQuintoMayor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMayores[13]==entrada){
		acorde = formarQuintoMayor(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;


		//Switch para los grados Menores
	} else if(gradosMenores[0]==entrada){
		acorde = formarPrimeroMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[1]==entrada){
		acorde = formarSegundoDisminuido(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[2]==entrada){
		acorde = formarTerceroBemolMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[3]==entrada){
		acorde = formarCuartoMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[4]==entrada){
		acorde = formarQuintoMenor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[5]==entrada){
		acorde = formarSextoBemolMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[6]==entrada){
		acorde = formarSeptimoMayor(tonalidad);
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[7]==entrada){
		acorde = formarPrimeroMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[8]==entrada){
		acorde = formarPrimeroMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[9]==entrada){
		acorde = formarSegundoDisminuido(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[10]==entrada){
		acorde = formarSegundoDisminuido(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[11]==entrada){
		acorde = formarCuartoMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[12]==entrada){
		acorde = formarQuintoMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion1");
		acorde = prepararAcorde(acorde);
		return acorde;
	} else if(gradosMenores[13]==entrada){
		acorde = formarQuintoMenor(tonalidad);
		acorde = agregarInversion(acorde,"inversion2");
		acorde = prepararAcorde(acorde);
		return acorde;
	}

}
