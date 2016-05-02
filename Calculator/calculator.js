
var memory = 0;
var memorycalc;
var c = false;
var flag = false;

var screen = function(p) {
	if(p == '.' && flag == true){
		return;
	}

	if(c == true){
		$('#screen').html('');
		c = false;
	}

	if(p != '0' && $('#screen').html()=='0'){
		$('#screen').html("");
	}


	if(p == '.'){
		$('#screen').html($('#screen').html() + ".");
	} else {
		var r = parseFloat($('#screen').html() + p);
		$('#screen').val(r);
		$('#screen').html(r);
	}

	console.log($('#screen').val());

}

var calculate = function(p) {
	if(memory){
		result();
	}
	flag = false;
	c = true;
	memory = parseFloat($('#screen').val());
	memorycalc = p;
	console.log(memory);
}

$('#clear').click(function (){
	memory = 0;
	$('#screen').val("0");
  $('#screen').html("0");
	$('#sign').html("");

});

$('#signl').click(function (){
	$('#screen').val($('#screen').val() * -1);
	$('#screen').html($('#screen').val());
});

var result = function(){
	if(memory == 0)
	return;
	c = true;
	var r;
	console.log(memorycalc);
	switch(memorycalc){
		case '+':
			r =  memory +  parseFloat($('#screen').val());
		break;
		case '-':
			r = memory - parseFloat($('#screen').val());
		break;
		case '*':
			r = memory * parseFloat($('#screen').val());
		break;
		case '/':
			r = memory / parseFloat($('#screen').val());
			console.log(memory);
		break;
	}
	$('#sign').html("");
	screen(r);
	c = true;
	flag = false;
	memory = 0;
};

$('.digit').click(function(e) {
	screen($(this).html());
	console.log($(this).html());
});

$('#divide, #multiply, #minus, #plus').click(function(e) {
	calculate(e.target.value);
	calSign(e.target.value);
});

$('#equal').click(function() {
	result();
});

var calSign = function(x){
	if(x == '/'){
		$('#sign').html("&divide");
		return;
	}
	$('#sign').html(x);
}
