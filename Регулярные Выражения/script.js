$("#but1").click(function(){
	if(/^(http:[//])/.test(document.getElementById("1").value))
		alert("в начале этой строки стоит http:// либо https://");
	else if(/^(https:[//])/.test(document.getElementById("1").value))
		alert("в начале этой строки стоит http:// либо https://");
	else
		alert("в начале этой строки не стоит http:// либо https://");
});

$("#but2").click(function(){
	if(/(jpg)$/.test(document.getElementById("2").value))
		alert("jpeg");
	else if(/(jpeg)$/.test(document.getElementById("2").value))
		alert("jpeg");
	else
		alert("ne jpeg");
});

$("#but3").click(function(){
	if(/^\d{1,12}$/.test(document.getElementById("3").value))
		alert("число длинной 12 символов");
	else
		alert("что-то иначе");
});

$("#but4").click(function(){
	if(/^\d\d[.]\d\d[.]\d{4}$/.test(document.getElementById("4").value))
		alert("дата");
	else
		alert("не дата");
});

$("#but5").click(function(){
	if(/.@{1}./.test(document.getElementById("5").value))
		alert("мейл");
	else
		alert("мейл");
});