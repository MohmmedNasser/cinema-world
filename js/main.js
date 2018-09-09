$(document).ready(function(){

  $('.nav .nav-list .last').click(function () {
    $('.search').slideToggle()
  });

  $('select').niceSelect();


  // $(".dot").click(function() {
  //   $('nav ul.nav-xs').slideToggle();
  // });

  $('.sidebarBtn').click(function () {

    $('.sidebar').toggleClass('active')
    $('.sidebarBtn').toggleClass('toggle')

  });

  $(".sort .sort-left .option").click(function() {
    $(this).addClass('active').css("opacity", "1").siblings().removeClass('active').css("opacity", "0.5");
  });


  $(".sort .sort-right").click(function() {
    $(".sort-film").fadeToggle().addClass("active")

  });



  $(document).on('click', function(e) {
  var clickHover = $(e.target);
  if(!clickHover.closest('.sort-right').length && !clickHover.closest('.sort-film').length) {
    $(".sort-film").fadeOut()
  }
  });


});
