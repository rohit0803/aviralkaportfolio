$(document).ready(function(){
$('.nav-lis').on('click', 'div', function() {
    $('.nav-lis div.acti').removeClass('acti');
    $(this).addClass('acti');

});

$('#mobi').click(function() {

    	console.log("roit");
    	$('.ismobile').css("display","block");

    $('.isdesktop').css("display","none");
    $('.istv').css("display","none");
    $('.ismumbai').css("display", "none");
 $('.ismobile').slick({
    centerMode: false,
  slidesToShow: 1.6,
  dots: true,
  infinite: false,
  speed: 300,
  arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

  });

});


$('#deskt').click(function() {

    	$('.isdesktop').css("display","block");
   		$('.istv').css("display","none");
   		$('.ismobile').css("display","none");
      $('.ismumbai').css("display", "none");

$('.isdesktop').slick({
    centerMode: false,
  slidesToShow: 1.2,
  dots: true,
  infinite: false,
  speed: 300,
  arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

  });
});
$('#smart').click(function() {

    	$('.istv').css("display","block");
   	$('.isdesktop').css("display","none");
   		$('.ismobile').css("display","none");
      $('.ismumbai').css("display", "none");
 $('.istv').slick({
    centerMode: false,
  slidesToShow: 1,
  dots: true,
  infinite: false,
  speed: 300,
  arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

  });


});



$('#mum').click(function() {

    	$('.ismumbai').css("display","block");
   	$('.isbengaluru').css("display","none");
   		$('.iskolkata').css("display","none");
      $('.isdelhi').css("display", "none");
  });
  $('#beng').click(function() {

    	$('.isbengaluru').css("display","block");
   	$('.ismumbai').css("display","none");
   		$('.iskolkata').css("display","none");
      $('.isdelhi').css("display", "none");
  });
  $('#kol').click(function() {

    	$('.iskolkata').css("display","block");
   	$('.isbengaluru').css("display","none");
   		$('.ismumbai').css("display","none");
      $('.isdelhi').css("display", "none");
  });
  $('#del').click(function() {

    	$('.isdelhi').css("display","block");
   	$('.isbengaluru').css("display","none");
   		$('.iskolkata').css("display","none");
      $('.ismumbai').css("display", "none");
  });
 $("#mobi").click();
 $('#beng').click();
});








