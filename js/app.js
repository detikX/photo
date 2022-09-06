$(window).on("load", function () {
  $(".preloader").fadeOut(1e4), $(".preloader").remove();
}),
  $(window)
    .scroll(function () {
      let o = $(window),
        i = $("body"),
        t = $(".section");
      s = o.scrollTop() + o.height() / 3;
      t.each(function () {
        // console.log("top", $(this).position().top);
        // console.log("s", s);
        $(this).position().top <= s &&
          $(this).position().top + $(this).height() > s &&
          i.removeClass(
            function (o, i) {
              return i.match(/(^|\s)color-\s+/g) || [].join(" ");
            },
            $(".section").removeClass("active"),
            $(this).addClass("active")
          );
      });
    })
    .scroll();

    $('.slider-pict').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    $(".close-info").click(()=>{
      $(".information").fadeOut()
    })