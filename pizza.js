// Write your Pizza Builder JavaScript in this file.
var totalPrice = 21;


$(".btn-pepperonni").click(function(){
	$(".pep").toggle();
	$(".btn-pepperonni").toggleClass("active");
	$("#pepPrice").toggle();
	totalPrice-1;
	$("span").text(totalPrice);
});

$(".btn-mushrooms").click(function(){
	$(".mushroom").toggle();
	$(".btn-mushrooms").toggleClass("active");
	$("#mPrice").toggle();
	
});

$(".btn-green-peppers").click(function(){
	$(".green-pepper").toggle();
	$(".btn-green-peppers").toggleClass("active")
	$("#gpPrice").toggle();
	
});

 $(".btn-crust").click(function(){
 	$("#crust1").toggleClass("crust");
 	$(".btn-crust").toggleClass("active")
 	$("#gfcPrice").toggle();
 	
 });

$(".btn-sauce").click(function(){
	$("#crust1 #sauce1").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active")
	$("#wsPrice").toggle();
});

 // $('.btn-crust').click(function(){
 //        $('.crust').toggle('crust');
 //        $('.crust-gluten-free').toggle('crust-gluten-free');
 //    });
