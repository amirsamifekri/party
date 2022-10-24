/////////////// My variables  ////////////////////


let sideNavbarWidth = $('.sideNavbar').innerWidth();

let sideNavbarLeft = $('.sideNavbar').css("left");

/////////////////  $(document).ready(function() //////////////////////////////

$(document).ready(function(){



////////////////////////////
  $(".fa-xmark").click(function(){

    $('.sideNavbar').animate({left: -sideNavbarWidth}  ,  250  )
    console.log($(".openCloseIcon").css("left"));
  
  });

///////////////////////////



$(".openCloseIcon").click(function(){


  if($(".sideNavbar").css("left")  ==   "-248px"){
    $('.sideNavbar').animate({left: "0px"}  )
  }
  else{
    $('.sideNavbar').animate({left: -sideNavbarWidth}  )
  }


});

////////////////////////////////////
$('.myLink ').click(function(){
let hrefElement =  $(this).attr("href");  // #Details
let currentSection = $(hrefElement).offset().top;


$("html , body").animate({scrollTop: currentSection} , 1000)

console.log(hrefElement);

})

////////////////////////////


$('.addressDescription1  ').click(function(){
  $(".theDescription1").slideToggle(500);
  $(".theDescription2").slideUp(500);
  $(".theDescription3").slideUp(500);
  $(".theDescription4").slideUp(500);
})


$('.addressDescription2  ').click(function(){
  $(".theDescription2").slideToggle(500);
  $(".theDescription1").slideUp(500);
  $(".theDescription3").slideUp(500);
  $(".theDescription4").slideUp(500);
})



$('.addressDescription3  ').click(function(){
  $(".theDescription3").slideToggle(500);
  $(".theDescription1").slideUp(500);
  $(".theDescription2").slideUp(500);
  $(".theDescription4").slideUp(500);
})



$('.addressDescription4  ').click(function(){
  $(".theDescription4").slideToggle(500);
  $(".theDescription1").slideUp(500);
  $(".theDescription2").slideUp(500);
  $(".theDescription3").slideUp(500);
})



///////////// textarea
let counterWriting = 100 ;

$('[placeholder="Enter Message"]').keydown(function(){
  counterWriting-=1;
  // console.log(counterWriting);

  if(counterWriting == 0){
    $('[placeholder="Enter Message"]').attr("readonly" , "readonly")
   
  }

  

 
})



//////////////////// 


var countDownDate = new Date("Jul 25, 2023 12:37:52").getTime();

var myfunc = setInterval(function() {
  // code goes here
 


  var now = new Date().getTime();
var timeleft = countDownDate - now;

// console.log(now  ,  timeleft);


    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


// console.log(days  ,  hours  , minutes  ,  seconds );


$('.second').html(seconds);
$('.minute').html(minutes);
$('.hour').html(hours);
$('.day').html(days);


}, 1000)












});








