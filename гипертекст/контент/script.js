

$(function(){

	$("#intonation").mouseenter(function(){
		$("#label").text("�������� � ���������");
		$("#ololo").attr("src", "ololo1.jpg")
	});

	$("#intonation").mouseleave(function(){
		$("#label").text("");
	});

	$("#components").mouseenter(function(){
		$("#label").text("���������� ���������!");
		$("#ololo").attr("src", "ololo2.jpg")
	});

	$("#components").mouseleave(function(){
		$("#label").text("");
	});

	$("#functionsint").mouseenter(function(){
		$("#label").text("������� ���������!");
		$("#ololo").attr("src", "ololo3.jpg")
	});

	$("#functionsint").mouseleave(function(){
		$("#label").text("");
	});

	$("#functionspris").mouseenter(function(){
		$("#label").text("������� ��������!");
		$("#ololo").attr("src", "ololo4.jpg")
	});

	$("#functionspris").mouseleave(function(){
		$("#label").text("");
	});

	$("#questions").mouseenter(function(){
		$("#label").text("�������� �� ��� ��������!");
		$("#ololo").attr("src", "ololo5.jpg")
	});

	$("#questions").mouseleave(function(){
		$("#label").text("");
	});

	$("#literature").mouseenter(function(){
		$("#label").text("������ ����������!");
		$("#ololo").attr("src", "ololo6.jpg")
	});

	$("#literature").mouseleave(function(){
		$("#label").text("");
	});

		$("#ololo").click(function(){
		$("#ololo").attr("width", parseInt($("#ololo").attr("width")) + 50)   //attr  �������� ��� ������������� �������� ��������� � ����������� �� �������� ���������� 
		$("#ololo").attr("height", parseInt($("#ololo").attr("height")) + 50);
	});

				$("#ololo").mouseleave(function(){
		$("#ololo").attr("width", 100)   //attr  �������� ��� ������������� �������� ��������� � ����������� �� �������� ���������� 
		$("#ololo").attr("height", 100);
	});

});

function hi(){
	$("#label").text("����� ������� - ������������ �������� ��������");
		$("#ololo").attr("src", "ololo7.jpg")
};
