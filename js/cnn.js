$(document).ready(function(){
    $(".sliderx").slick();
     new WOW().init();
     AOS.init();


})



const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $("#play-button").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $("#play-button").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }

  // You can also use .toggle function on classList as mentioned by the person in other answer
}



var $slickElement = $('.sliderx');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  // $status.text(i + '/' + slick.slideCount);
  $(".now").text(i);
  $(".totalx").text(slick.slideCount)
});


// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});


setTimeout(() => {
  $("#play-button").click()
}, 500);

