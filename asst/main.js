$(document).ready(function(){
	start();

	$('#startbtn').on('click',function(){
		clear();
		start();
	});

	$('#clearbtn').on('click',function(){
		clear();
		$('input#size').val("20");
		$('select#color').val("red");
		$('select#type').val("simple");
		start();	
	});
})

function clear(){
	$('.sketch_pad > .grid').remove();
};

function getSize(){
	size = +$('input#size').val();
};

function start(){
	// set size of the palet
	getSize();	
	boxSize=959/size;
	boxCount=size*size;
	for(i=1;i<=boxCount;i++){
		$('.sketch_pad').append('<div class="grid" style="width:'+ boxSize +'px;height:'+ boxSize +'px" data-times="0"></div>')
	};	
	$('span#size_sketch').text(size+"*"+size);
	// global var
	gridBox=$('.sketch_pad').find('.grid');	
	// set color of palet
	getColor=$('select#color').val();
	gridBox.mouseenter(function(){$(this).removeClass("n-color")}); /*reset the none class*/
	switch (getColor){
		case 'red':
		gridBox.mouseenter(function(){$(this).addClass("r-color")});
		$('span#color_sketch').text("Red");
		break;
		case 'blue':			
		gridBox.mouseenter(function(){$(this).addClass("b-color")});
		$('span#color_sketch').text("Blue");
		break;
		case 'green':
		gridBox.mouseenter(function(){$(this).addClass("g-color")});
		$('span#color_sketch').text("Green");
		break;
		case 'colorful':
		gridBox.mouseenter(function(){
			color=randColor();
			$(this).css('background-color',color)
		});
		$('span#color_sketch').text("Colorful");
		break;
	}
	// set type of palet
	getType=$('select#type').val();
	switch (getType){
		case 'simple':

		$('span#type_sketch').text("Simple");
		break;

		case 'trail':
		gridBox.mouseleave(function(){$(this).addClass("n-color")});	
		$('span#type_sketch').text("Trail");
		break;	

		case 'opacity':

		gridBox.mouseenter(function(){

			timeCounter=$(this).data('times');
			if(timeCounter<5){
				timeCounter+=1;
				$(this).data('times',timeCounter);
			};
			times=$(this).data('times');

			switch (times){
				case 1:
				$(this).css("opacity","0.2")
				break;
				case 2:
				$(this).css("opacity","0.4")
				break;
				case 3:
				$(this).css("opacity","0.6")
				break;
				case 4:
				$(this).css("opacity","0.8")
				break;
				case 5:
				$(this).css("opacity","1")
				break;
			}		
		});
		$('span#type_sketch').text("Opacity");			
		break;

	};
};

// find  random color
function randNumber(){
	randNum= Math.floor(Math.random()*17);
	switch (randNum) {
		case 10:
		randNum="a"
		break;
		case 11:
		randNum="b"
		break;
		case 12:
		randNum="c"
		break;
		case 13:
		randNum="d"
		break;
		case 14:
		randNum="e"
		break;
		case 15:
		randNum="f"
		break;
		default:
		randNum		
	}
	return randNum;
};
function randColor(){
	color= "#"+randNumber()+randNumber()+randNumber()+randNumber()+randNumber()+randNumber();
	return color
};