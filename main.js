
var clickHandler = function(){
	alert('clicked!!!');
}


document.addEventListener('DOMcontentloaded',function() {
	var button1 = document.querySelectorAll('.btn');
	
	for (var i=0, i<buttons.length; i++){


	button1.addEventListener('click',clickHandler);
}
});

console.log('end of main.js');

