$(function(){

	$("#intonation").mouseenter(function(){
		$("#helpbox").text("�������� � ���������");
	});

	$("#intonation").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#components").mouseenter(function(){
		$("#helpbox").text("���������� ���������. ��� ��� ���������!");
	});

	$("#components").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#functionsint").mouseenter(function(){
		$("#helpbox").text("������� ���������. ������ ������!");
	});

	$("#functionsint").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#functionspris").mouseenter(function(){
		$("#helpbox").text("������� ��������. ����� �����������!");
	});

	$("#functionspris").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#questions").mouseenter(function(){
		$("#helpbox").text("�� ������� ������� ������� ��� ����� ��� ��!");
	});

	$("#questions").mouseleave(function(){
		$("#helpbox").text("");
	});

	$("#literature").mouseenter(function(){
		$("#helpbox").text("������ �������������� ����������!");
	});

	$("#literature").mouseleave(function(){
		$("#helpbox").text("");
	});

});

function hi(){
	$("#helpbox").text("����� ���� ���� - ������������ ��������. ����� �������������� ������ ����������� ��������!");
};
