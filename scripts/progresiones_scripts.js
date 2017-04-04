function get_interprete(){

file = "file.txt";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
                var separe = allText.replace(/  +/g, ' ');
                separe=separe.split("-");
                var n_separe=separe.length;
                var prog_aux=separe[0];
                var cont_prog =0;
                for (var i_separe=1;i_separe<n_separe;i_separe++){
                    if(separe[i_separe] != "end"){
                        prog_aux=prog_aux+"-"+separe[i_separe];
                    }
                    else{

                        progresiones[cont_prog]=prog_aux;
                        cont_prog=cont_prog+1;
                        n_word = separe[i_separe].length;
                        prog_aux=separe[i_separe+1];
                        i_separe=i_separe+2
                    }
                }
                
               
                //console.log(allText);
            }
        }
    }
    rawFile.send(null);
}

function stop_audio(){
    clearInterval(timer_progresion);
}

function next_Prog(){
    clearInterval(timer_progresion);

    var value_button = document.getElementById("next_prog").textContent;





    if( value_button == 'Empezar'){

            document.getElementById("next_prog").innerHTML = "Play"
            document.getElementById("check").style.visibility="visible";
            document.getElementById("repeticiones").style.visibility="visible";
            document.getElementById("combo_tonalidades").style.visibility="visible";

            random_progresion= (Math.floor((Math.random() * (progresiones.length)) + 0));;
            progresiones_por_grado= progresiones[random_progresion].split("-");
            progresiones_por_grado[0] = progresiones_por_grado[0].trim();
            input_textBox_user=create_text(progresiones_por_grado.length);
            estado = "jugando";



    }else if(value_button == "Play"){
            var tones_combo = document.getElementById("combo_tonalidades");
            tone_choice = tones_combo.options[tones_combo.selectedIndex].value;
            
            if(tone_choice == "random"){
                random_comboBox= (Math.floor((Math.random() * (12)) + 0));;
                tones_combo.value = tones_combo.options[random_comboBox].value;
                tone_choice = tones_combo.options[tones_combo.selectedIndex].value;

            }
            document.getElementById('combo_tonalidades').disabled=true;
            replay();
        }
            else {
            document.getElementById('replay').disabled=false;
            document.getElementById('next_prog').innerHTML="Cambiar cadencia";

            for (var i=0;i<input_textBox.length;i++){
                

            }
            number_replay=5;
             playBase();
            
        }
}


function showAnswer(){

    for (var i = 0 ; i < progresiones_por_grado.length; i++) {
        input_textBox_user[i].value = progresiones_por_grado[i];
        input_textBox_user[i].style.backgroundColor = "#00FF00";  
    }
}

function replay(){
    stop_audio();
    var i=0;   
    number_replay=number_replay-1;
    console.log(progresiones[random_progresion])
    document.getElementById("repeticiones").innerHTML="Repeticiones Disponibles: "+number_replay;
    if(number_replay == 0 && estado == "jugando"){
            document.getElementById('next_prog').disabled=true;
    }
    timer_progresion = setInterval(function(){
        if(i<progresiones_por_grado.length){
            int = interpretar(progresiones_por_grado[i],tone_choice);
            console.log("Suena: "+int);
            console.log(tone_choice);
            Notas.start(int[0]);
            Notas.start(int[1]);
            Notas.start(int[2]);
            Notas.start(int[3]);
        }
        i=i+1;
    }, 1500);
}

function vista_inicio(){

     //Solo Mostrar el Bottun Empezar al inicio del juego.
        
        document.getElementById("check").style.visibility="hidden";
        //document.getElementById("replay").style.visibility="hidden";
        document.getElementById("repeticiones").style.visibility="hidden";
        document.getElementById("r").style.visibility="hidden";
        document.getElementById("next").style.visibility="hidden";
        document.getElementById("combo_tonalidades").style.visibility="hidden";
        document.getElementById('combo_tonalidades').disabled=false;
}


function checkAnswer(){

        stop_audio();
        estado="esperando";
        var cont=0;
        var wrong_cont=0;
        var size=progresiones_por_grado.length;
        var answers=[];
        var wrong_answer=[];
        //Recoleccion de vector de respuestas
        for(cont=0;cont<size;cont++){
            answers[cont]=input_textBox_user[cont].value;
        }
        // Recoleccion respuestas equivocadas 
        for (cont=0;cont<size;cont++){
            if(answers[cont] != progresiones_por_grado[cont]){
                wrong_answer[wrong_cont]=cont;
                input_textBox_user[cont].style.backgroundColor = "red";
                wrong_cont=wrong_cont+1;
            }else{
                //Esto no se debe hacer asi 
                input_textBox_user[cont].style.backgroundColor = "#00FF00";
            }
        }

        answer_user = (size - wrong_answer.length)+"/"+size;
        input_textBox_answer=create_answer_correct(progresiones_por_grado.length);
        console.log("Entrando");
        disable_texts(progresiones_por_grado.length);
        console.log("Saliendo");
        //Configurar interfaz de "Corregir"
        document.getElementById("repeticiones").style.visibility="hidden";
         document.getElementById("scores").style.visibility="visible";
        document.getElementById('scores').innerHTML=answer_user;
        document.getElementById("check").style.visibility="hidden";
        document.getElementById("next").style.visibility="visible";
    }

function next(){
    stop_audio();
    number_replay = 5;
    document.getElementById("repeticiones").innerHTML="Repeticiones Disponibles: "+number_replay;
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("next_prog").innerHTML = "Play"
    document.getElementById("check").style.visibility="visible";
    document.getElementById("repeticiones").style.visibility="visible";
    document.getElementById("scores").style.visibility="hidden";
    document.getElementById('combo_tonalidades').disabled=false;
    document.getElementById("next_prog").style.visibility="visible";
    console.log(input_textBox_answer[1].value);
   // var rem = document.getElementById(input_textBox[0].id);
    //answer_user.removeChild(rem);

    //answer_user.removeChild(input_textBox_user[progresiones_por_grado.length-1]); 

    for (i = 0;i<progresiones_por_grado.length;i++){
        correct_answer.removeChild(input_textBox_answer[i]); 
        answerss.removeChild(input_textBox_user[i]);
    }

    random_progresion= (Math.floor((Math.random() * (progresiones.length)) + 0));;
    progresiones_por_grado= progresiones[random_progresion].split("-");
    progresiones_por_grado[0] = progresiones_por_grado[0].trim();
    input_textBox_user=create_text(progresiones_por_grado.length);
    estado = "jugando";
    enable_texts();    
    

}