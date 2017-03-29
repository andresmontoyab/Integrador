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