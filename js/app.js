$(window)
  .scroll(function () {
    let o = $(window),
      i = $("body"),
      t = $(".section");
    s = o.scrollTop() + o.height() / 3;
    t.each(function () {
      console.log("top", $(this).position().top);
      console.log("s", s);
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
