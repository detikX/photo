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

const root = document.querySelector("html");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}
