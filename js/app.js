$(window).on("load", function() {
        $(".preloader").fadeOut(1e4), $(".preloader").remove();
    }),
    $(window)
    .scroll(function() {
        let o = $(window),
            i = $("body"),
            t = $(".section");
        s = o.scrollTop() + o.height() / 2;
        t.each(function() {
            // console.log("top", $(this).position().top);
            // console.log("s", s);
            $(this).position().top <= s &&
                $(this).position().top + $(this).height() > s &&
                i.removeClass(
                    function(o, i) {
                        return i.match(/(^|\s)color-\s+/g) || [].join(" ");
                    },
                    $(".section").removeClass("active"),
                    $(this).addClass("active")
                );
        });
    })
    .scroll();

var $slickElement = $('.slider-pict');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    // $status.text(i + '/' + slick.slideCount);
    $(".now").text(i);
    $(".totalx").text(slick.slideCount)
});

$('.slider-pict').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // customPaging: function (slider, i) {
    //     //FYI just have a look at the object to find available information
    //     //press f12 to access the console in most browsers
    //     //you could also debug or look in the source
    //     // console.log(slider);
    //     // return  (i + 1) + '/' + slider.slideCount;
    //     var i = (slider.currentSlide ? slider.currentSlide : 0) + 1;
    //     console.log(i);
    //     $(".now").text(i);
    //     $(".totalx").html(slider.slideCount)
    // }
});

$(".close-info").click(() => {
    $(".information").fadeOut()
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

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
    btn.addEventListener("click", onChange);
});


setTimeout(() => {
  $("#play-button").click()
}, 500);