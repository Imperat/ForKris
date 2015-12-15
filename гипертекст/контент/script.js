$(function(){

	$("#intonation").mouseenter(function(){
		$("#helpbox").text("Просодия и интонация");
	});

	$("#intonation").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#components").mouseenter(function(){
		$("#helpbox").text("Компоненты интонации. Вух как интересно!");
	});

	$("#components").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#functionsint").mouseenter(function(){
		$("#helpbox").text("Функции интонации. Кликай скорее!");
	});

	$("#functionsint").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#functionspris").mouseenter(function(){
		$("#helpbox").text("Функции просодии. Очень атмосферные!");
	});

	$("#functionspris").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#questions").mouseenter(function(){
		$("#helpbox").text("Не слишком сложные вопросы для таких как ты!");
	});

	$("#questions").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#literature").mouseenter(function(){
		$("#helpbox").text("Список использованной литературы!");
	});

	$("#literature").mouseleave(function(){
		$("#helpbox").text("");
	});

});

function hi(){
	$("#helpbox").text("Автор сего чуда - Метельникова Кристина. Чисто математическая модель атмосферной девчонки!");
};
