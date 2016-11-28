// JavaScript Document

var  mn = $(".main-nav");
     mns = "main-nav-scrolled";

$(window).scroll(function() {
  if( $(this).scrollTop() > 100 ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});