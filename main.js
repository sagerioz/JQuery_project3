/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
// $(".changeColor").click(function(){
//   $("#3").addClass("change")
// });

$('.changeColor').click(function() {
    $('ul li:nth-child(3)').css('color', '#8A2BE2');
  });

// Question #2
// $("#4").click(function(){
//   $("#4").append(`<li id="4.5">I've been added!</li>`)
// });

$('ul li:nth-child(4)').click(function() {//this way is better than hard coding an id into a li of a dynamically created ul
    $(this).append('<li>hi</li>');
  });



// Question #3
// $("#removeLi").click(function(){
//   $("#2").remove()
// });

$("#removeLi").click(function(){
$('ul li:nth-child(2)').hide()

})


// Question #4
// $("#5").click(function(){
//   $(this).animate({
//      fontSize: "40px"
//    });
// $("#1, #2, #3, #4").remove()
// });
$("ul li:nth-child(5)").click(function(){
  $(this).animate({
       fontSize: "40px"
     });
     $('ul li:nth-last-child(n+2)').hide();
  });


// Question #5

$(".cute").click(function() {
  $(".clones").append($(".cute").clone(false));
});

// $('.cute').click(function() {
//    $(this).clone().appendTo($('.clones'));
//  });
  // Question #6

  $("body").dblclick(function() {
    //console.log('you double clicked!');
    $("#makeSquare").css('border-radius', '0px');
    $("#makeSquare").css('height', '300px');

  });

  // $('html').dblclick(function() {
  //     $('#makeSquare').css('border-radius', '0px');
  //     var sqWidth = $('#makeSquare').css('width');
  //     $('#makeSquare').css('height', sqWidth);
  //   });

// Question #7

// $(".black.swatch").click(function() {
//   console.log('clicked');
//   $("body").addClass("black");
// });
// $(".wood.swatch").click(function() {
//   console.log('clicked');
//   $("body").addClass("wood");
// });
// $(".restore.swatch").click(function() {
//   console.log('clicked');
//   $("body").addClass("swatches:after");
// });


$('.black').click(function() {
    $('html').css('background-image', 'none');
    $('html').css('background-color', '#000');
    $('p').css('color', '#fff');
  });

  $('.wood').click(function() {
    var background = $('.wood').css('background-image');
    $('html').css('background-image', background);
	$('p').css('color', '#fff');
  });

  $('.chaos').click(function() {
    var background = $('.chaos').css('background-image');
    $('html').css('background-image', background);
	$('p').css('color', 'yellow');
  });

    $('.restore').click(function() {
     $('html').css('background-image', 'none');
     $('html').css('background-color', '#fff');
     $('p').css('color', '#000');
  });




  // Question #8


$("#hover").hover(function() {
  $(this).css("background-color", "red");
  }, function(){
  $(this).css("background-color", "#39B7CD");
});

$("#hover").click(function() {
  $(this).toggleClass('green');
});
});
