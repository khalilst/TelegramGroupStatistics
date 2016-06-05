$ = jQuery;
var counter = 0;

function doScroll() {
  setTimeout(function() {
    $('.im_history_scrollable_wrap').scrollTop(0);
    counter++;
    if (counter < 100)
      doScroll();
  }, 2000);  
}

doScroll();
