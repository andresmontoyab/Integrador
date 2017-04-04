function create_text(number_chords){
	input=[];
	for (var i=0;i<number_chords;i++){
		input[i]=document.createElement('input');
		input[i].type = "text";
		input[i].setAttribute("id", "input"+i);
		input[i].setAttribute("class","boton");
		answerss.appendChild(input[i]); 
	}
	return input;
}

function deleteText(){
	return input;
}

function create_answer_correct(number_chords){
		input=[];
	for (var i=0;i<number_chords;i++){
		input[i]=document.createElement('input');
		input[i].type = "text";
		input[i].setAttribute("id", "input2"+i);
		input[i].setAttribute("class","boton");
		input[i].value = progresiones_por_grado[i];
        input[i].style.backgroundColor = "#00FF00";  
		correct_answer.appendChild(input[i]); 
	}
	return input;
}

function disable_texts(number_chords){

	console.log("entro a disable")
	for (var i=0; i < number_chords; i++){
		input_textBox_user[i].disabled=true;
		input_textBox_answer[i].disabled=true;
	}

}

function enable_texts(number_chords){


	for (var i=0; i < number_chords; i++){
		input_textBox_user[i].disabled=false;
	}

}