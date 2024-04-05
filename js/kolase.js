//fancy box
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: true,
    transitionEffect: 'fade',
    transitionDuration: 500,
    protect: true
  });