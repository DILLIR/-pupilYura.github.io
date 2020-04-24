let button = document.querySelector(".next-action");
	let samtest = document.querySelector(".samtest");
	let question = document.querySelector(".samtest-heading");
	let answers = document.querySelectorAll(".answer");
	let answers_text = document.querySelectorAll(".answer-text");
	let counter = 0;
	let i = 1;
	let points = 0;
	let point_counter = document.querySelector(".point-counter");
	let result = document.querySelector(".result");
	let is_cheked = false;
	let form = document.querySelector("form");
button.onclick = function (){
	if(counter === 0 && answers[3].checked === true){
			points++;
		}
	if(counter === 1 && answers[0].checked === true){
			points++;
		}
	if(counter === 2 && answers[0].checked === true){
			points++;
		}
	if(counter === 3 && answers[3].checked === true){
			points++;
		}
	if(counter === 4 && answers[3].checked === true){
			points++;
		}
	if(counter === 5 && answers[3].checked === true){
			points++;
		}
	if(counter === 6 && answers[2].checked === true){
			points++;
		}
	if(counter === 7 && answers[1].checked === true){
			points++;
		}
	if(counter === 8 && answers[0].checked === true){
			points++;
		}
	if(counter === 9 && answers[3].checked === true){
			points++;
		}
	if(counter == 9) {
		point_counter.textContent = "10/10";
		question.textContent = options[9][0];
		for (let answer_text of answers_text ){
			answer_text.textContent = options[counter][i++];
		};
		for (let answer of answers ){
			answer.style.display = "none"
		}
		question.classList.add("question-last");
		result.style.display = "block";
		result.textContent = "Ваш результат:  " + points + " /10";
		form.style.display = "none";
		counter = 10;
	}
	if(answers[0].checked == true || answers[1].checked == true || answers[2].checked == true || answers[3].checked == true){
		is_cheked = true;
	}
	if(counter <= 9 && is_cheked){
		i = 1;
		for (let answer of answers ){
			answer.checked = false ;
		}
		question.textContent = options[counter][0];
		for (let answer_text of answers_text ){
			answer_text.textContent = options[counter][i++];
		};
		counter++;
		point_counter.textContent = ++counter + "/10";
		--counter;
		is_cheked = false;
	} 
}
var options = [["Самонавчання це :", "1.форма освіти , під час якої людина навчає і виховує сама себе.", "2.форма освіти , під час якої людина навчає однодумців.", "3. форма освіти, під час якої людина навчається дистанційно згідно шкільної програми. ", "Ніщо з вище переліченого не підходить."], 
					["Самонавчання завжди має __________ значущість :", "1.особисту", "2.юридичну", "3.народну", "4.шкільну"],
					["Види самонавчання:","1.самореалізація ","2.пізнавальний","3.професійне самонавчання","4.всі відповіді вірні"],
					["Як можна самонавчатися?","1.в бібліотеці","2.в школі","3.в Інтернеті","4.всі відповіді вірні"],
					["Самонавчання допомагає актуалізувати?","1.наші знання з певної дисципліни","2.чи вивчити щось нове із іншої галузі","3.вроджені здібності. ","4.всі відповіді вірні"],
					["Самонавчання  передбачає ? ","1. тільки виконання певних побутових обов'язків","2. Працювати у встановлений час у відповідному місці","3.постійну роботу над собою, яка стосується кожної сфери людського життя","4.Ніщо з вище переліченого"],
					["Самонавчання-основна складова успіху в будь-якій діяльності.Це-?", "1.праця  'для галочки'", "2.праця,яку кожна людина (як студент, так і викладач )повинен здійснювати над собою.", "3.праця 'для вигоди'","4.праця 'просто так'"],
					["Процес самонавчання підкоряється?", "1. Гносеологічному принципу  А.М Колмогорова.", "2. Підсвідому принципу Менделєєва", "3. теорії Павлова ", "4.Парасимпатичній системі нервового мозку"],
					["Згідно принципу А.М. Колмогорова самонавчання має ?","1.Має незрозумілий характер","2. змішаний характер в нелінійних середовищах","3. змінний характер в лінійних середовищах","4.хвильовий характер в нелінійних середовищах."],
					["Дякую за участь","Ось ваш результат: " + points]]