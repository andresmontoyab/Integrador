var bajos=['c/5','d/5','e/4','f/4','g/4','a/4','b/4','c/5','d/5','e/5','f/5','g/5','a/5','b/5','c/6','d/6','e/6','f/6','g/6'];	
var other=['c/4','d/4','e/4','f/4','g/4','a/4','b/4','c/5','d/5','e/5','f/5','g/5','a/5','b/5','c/6','d/6','e/6'];
var refer=['c','d','e','f','g','a','b','c','d','e','f','g','a','c','d','e'];
//var other2=other.split(",");
var tonalidades=['C','CS','D','DS','E','F','FS','G','GS','A','AS','B','C','D','E','F','G'];
//tonalidades=tonalidades.split(",");
console.log(tonalidades[0])
var cadencias=['pl','au','com','inve','i1','i2','i3','i4','i5','i6'];
//cadencias=cadencias.split(",");
var num_bajo=[];
var num_other=[];



//nota="C"


function Dibujar(rc,rt,num,color1,color2,color3,color4){

				var random_tonalidad=rt;
				var random_cadencia=rc;

				console.log(random_cadencia+" y"+random_tonalidad);

				var tono=tonalidades[random_tonalidad];
				console.log("here is the fucking tone of the error :"+tono);
				var cad=cadencias[random_cadencia];
				console.log("aca es la nueva onda : "+cad);

				//---------------------Se Asigna los correspondientes valores a search y se acomodan los simbolos # y b-----------------------------------------------------
				//---------------------La variable search será usada para ubicar en el vector de referencia que nota será la entrada----------------------------------------
				

				if(tono=='Eb'){
					var search="e";
				}
				if(tono=='Gb'){
					var search="g";
				}
				if(tono=='Ab'){
					var search="a";
				}
				if(tono=='Bb'){
					var search="b";
				}
				if(tono=='CS'){
					tono="C#";
					var search="c";
				}
				if(tono=='DS'){
					tono="Eb";
					var search="e";
				}
				if(tono=='FS'){
					tono="Gb";
					var search="g";
				}
				if(tono=='GS'){
					tono="Ab";
					var search="a";
				}
				if(tono=='AS'){
					tono="Bb";
					var search="b";
				}

				if(tono=='C'){
					var search="c";
				}
				if(tono=='D'){
					var search="d";
				}
				if(tono=='E'){
					var search="e";
				}
				if(tono=='F'){
					var search="f";
				}
				if(tono=='G'){
					var search="g";
				}
				if(tono=='A'){
					var search="a";
				}
				if(tono=='B'){
					var search="b";
				}

				//------------Fin de la asignacion de la variable Search y conversion #, b


				//----------------En esta parte haremos toda la logica necesaria para solo escribir una nota en el pentagrama es decir
				//----------------la nota base que siempre se solicita
				if(num==1){

						eleccion_notas(tono,0);
						cant_chord=1;

						var notesTreble = [
							new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" })
						];
						var notesBass = [								
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" })
						];

				//---------------Fin de la logica para escribir la nota base, tambien es importante notar que, si num es != de 1 querra decir que escriba una
				//---------------Cadenacia en especifico, acontinuacion se realiza toda la logica de las cadenacias.		
				}else
				{


				//---------------------------Con el siguiente ciclo encontraremos el indice de la nota que se ha enviado desde nuestra interfaz principal---------------//

				var indice=0;
				while(refer[indice] != search)
					{
						indice = indice +1;
					}
				console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);


				//---------------------------Con la variable acerto, veremos de que color habrá que pintar cada uno de los acordes/////////////////------------------//



				////----------------------------------------------------|||-CREACION DE LAS CADENCIAS-||------------------------------------------------------------//



				///------------------------------------------------------||Creacion de cadencia Autentica||----------------------------------------------------///
				
				if(cad=='au'){

					cant_chord=cad.length;

					var add=3; 
					num_bajo[0]=5+indice;
					num_other[0]=2+indice;

					num_bajo[1]=9+indice;
					num_other[1]=1+indice;
					console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

					var notesTreble = [

					new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+add],other[num_other[1]+add+2]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
					new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

						];

					var notesBass = [
						new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

						];
				
				}

				///------------------------------------------------------||Creacion de cadencia Plagal||----------------------------------------------------///
				
				if(cad=='pl'){

							cant_chord=cad.length;

							add=2;
							num_bajo[0]=5+indice;
							num_other[0]=2+indice;

							num_bajo[1]=8+indice;
							num_other[1]=3+indice;


					var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+add],other[num_other[1]+add+2]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

					var notesBass = [
						new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

						];
				}


				///------------------------------------------------------||Creacion de cadencia Completa||----------------------------------------------------/// 

				if(cad=='com'){

						cant_chord=cad.length;

						num_bajo[0]=5+indice;
						num_other[0]=2+indice;

						num_bajo[1]=8+indice;
						num_other[1]=3+indice;

						num_bajo[2]=9+indice;
						num_other[2]=1+indice;

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[2]],other[num_other[2]+3],other[num_other[2]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color3, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color3, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color3, shadowBlur: 50})
					 
							];

						var notesBass = [
						
						new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [bajos[num_bajo[2]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}),
						new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color3, shadowBlur: 50})

							];
					
				}

				///------------------------------------------------------||Creacion de cadencia Invertida||----------------------------------------------------///

				if(cad == 'inve'){

						cant_chord=cad.length;

						num_bajo[0]=5+indice;
						num_other[0]=2+indice;

						num_bajo[1]=8+indice;
						num_other[1]=3+indice;

						num_bajo[2]=2+indice;
						num_other[2]=1+indice;

						var notesTreble = [
							
							new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50}),
							new VF.StaveNote({ keys: [other[num_other[2]],other[num_other[2]+3],other[num_other[2]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color3, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color3, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color3, shadowBlur: 50}),
						 	new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color4, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color4, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color4, shadowBlur: 50})
						 		
						];


							var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[2]]], duration: "w" }).setKeyStyle(0, {shadowColor:color3, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color4, shadowBlur: 50})
							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #1||----------------------------------------------------///

				if(cad == 'i1'){

						cant_chord=cad.length;


						num_bajo[0]=5+indice;
						num_other[0]=4+indice;

						num_bajo[1]=9+indice;
						num_other[1]=4+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+3],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #2||----------------------------------------------------///

				if(cad == 'i2'){

					cant_chord=cad.length;


						num_bajo[0]=5+indice;
						num_other[0]=2+indice;

						num_bajo[1]=4+indice;
						num_other[1]=1+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+3],other[num_other[1]+7]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #3||----------------------------------------------------///

				if(cad == 'i3'){

						cant_chord=cad.length;


						num_bajo[0]=9+indice;
						num_other[0]=4+indice;

						num_bajo[1]=6+indice;
						num_other[1]=3+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}).addAccidental(0, new VF.Accidental("#")),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+2],other[num_other[0]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #4||----------------------------------------------------///

				if(cad == 'i4'){

						cant_chord=cad.length;


						num_bajo[0]=9+indice;
						num_other[0]=1+indice;

						num_bajo[1]=5+indice;
						num_other[1]=2+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+3],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #5||----------------------------------------------------///

				if(cad == 'i5'){

						cant_chord=cad.length;


						num_bajo[0]=8+indice;
						num_other[0]=0+indice;

						num_bajo[1]=5+indice;
						num_other[1]=0+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+6]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}).addAccidental(2, new VF.Accidental("b")),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+3],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #6||----------------------------------------------------///

				if(cad == 'i6'){

						cant_chord=cad.length;


						num_bajo[0]=8+indice;
						num_other[0]=0+indice;

						num_bajo[1]=4+indice;
						num_other[1]=1+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}).addAccidental(2, new VF.Accidental("b")),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+3],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).addAccidental(0, new VF.Accidental("b")),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}

				///------------------------------------------------------||Creacion de cadencia Imperfecta #7||----------------------------------------------------///

				if(cad == 'i7'){

						cant_chord=cad.length;


						num_bajo[0]=10+indice;
						num_other[0]=2+indice;

						num_bajo[1]=9+indice;
						num_other[1]=4+indice;
						console.log("El indice es :"+indice+"y el valor será :"+refer[indice]);

						var notesTreble = [

						new VF.StaveNote({ keys: [other[num_other[1]],other[num_other[1]+2],other[num_other[1]+4]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color1, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color1, shadowBlur: 50}),
						new VF.StaveNote({ keys: [other[num_other[0]],other[num_other[0]+3],other[num_other[0]+5]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50}).setKeyStyle(1, {shadowColor: color2, shadowBlur: 50}).setKeyStyle(2, {shadowColor: color2, shadowBlur: 50})

							];

						var notesBass = [
							new VF.StaveNote({ keys: [bajos[num_bajo[1]]], duration: "w" }).setKeyStyle(0, {shadowColor:color1, shadowBlur: 50}),
							new VF.StaveNote({ keys: [bajos[num_bajo[0]]], duration: "w" }).setKeyStyle(0, {shadowColor:color2, shadowBlur: 50})

							];

				}
				//--------------------------------------------------------||-FIN DE CREACION DE CADENCIAS-||----------------------------------------------------------// 
			}

			//----------------------------------------------   ----||-Fin de el else de if(num==1)-||---------------------------------------------------------------//



			//------------------------------|| En el codigo siguiente se crearán los pentagramas y se le dibujaran las notas anteriormente definidas ||---------------//

					VF = Vex.Flow;
					var div = document.getElementById("pentagrama")
			 		
					rendererTreble.resize(0,0);
					rendererBass.resize(0,0);
					rendererTreble = new VF.Renderer(div, VF.Renderer.Backends.SVG);
					rendererTreble.resize(1000, 130);
					var contextTreble = rendererTreble.getContext();
					contextTreble.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

					rendererBass = new VF.Renderer(div, VF.Renderer.Backends.SVG);
					rendererBass.resize(1000, 200);
					var contextBass = rendererBass.getContext();
					contextBass.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

					var staveTreble = new VF.Stave(10, 0, 200+cant_chord*45);

  					staveTreble.setEndBarType(Vex.Flow.Barline.type.REPEAT_END);	
					staveTreble.addKeySignature(tono);
					staveTreble.addClef("treble");					
					staveTreble.setContext(contextTreble).draw();

					var staveBar2 = new Vex.Flow.Stave(staveTreble.width + staveTreble.x, staveTreble.y, 100);
  					staveBar2.setContext(contextTreble).draw();

					var staveBass = new VF.Stave(10, 0, 200+cant_chord*45);
					 
  					staveBass.setEndBarType(Vex.Flow.Barline.type.REPEAT_END);	
					staveBass.addKeySignature(tono);
					staveBass.addClef("bass");			
					staveBass.setContext(contextBass).draw();

					var staveBar2 = new Vex.Flow.Stave(staveBass.width + staveBass.x, staveBass.y, 100);
  					staveBar2.setContext(contextBass).draw();

					
					var voiceTreble = new Vex.Flow.Voice({num_beats:cant_chord, beat_value: 4, resolution:Vex.Flow.RESOLUTION});
					var voiceBass = new Vex.Flow.Voice({num_beats:cant_chord, beat_value: 4, resolution:Vex.Flow.RESOLUTION});

					voiceTreble.setStrict(false);
					voiceBass.setStrict(false);
					voiceTreble.addTickables(notesTreble).setStave(staveTreble);
					voiceBass.addTickables(notesBass).setStave(staveBass);



					var formatter = new Vex.Flow.Formatter();

					// Make sure the staves have the same starting point for notes
					var startX = Math.max(staveTreble.getNoteStartX(), staveBass.getNoteStartX());
					staveTreble.setNoteStartX(startX+30);
					staveBass.setNoteStartX(startX+30);

					// the treble and bass are joined independently but formatted together
					formatter.joinVoices([voiceTreble]);
					formatter.joinVoices([voiceBass]);
					console.log(staveBass.getNoteStartX());
					formatter.format([voiceTreble, voiceBass], cant_chord*50 - (startX - 120));

					voiceTreble.setContext(contextTreble).draw();
					voiceBass.setContext(contextBass).draw();



						}



			//-----------------------------------|| Creacion de la funcion para asignar el primer acorde ||-------------------------------------\\

function eleccion_notas(nota , num_note){
	console.log("la nota que entro fue  "+nota+" y el num note es "+num_note);
	switch(nota){
						case "C":
						case "C#":
							num_bajo[num_note]=5;
							num_other[num_note]=2;
							break;
						case "D":
							num_bajo[num_note]=6;
							num_other[num_note]=3;
							break;
						case "E":
						case "Eb":
							num_bajo[num_note]=0;
							num_other[num_note]=4;
							break;
						case "F":
						case "F#":
							num_bajo[num_note]=1;
							num_other[num_note]=5;
							break;
						case "G":
						case "Gb":
							num_bajo[num_note]=9;
							num_other[num_note]=6;
							break;
						case "A":
						case "Ab":
							num_bajo[num_note]=3;
							num_other[num_note]=7;
							break;
						case "B":
						case "Bb":
							num_bajo[num_note]=4;
							num_other[num_note]=1;
							break;
					
				}
}

