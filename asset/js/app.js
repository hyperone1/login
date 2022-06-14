

// hamburger menu script
$('#hamburger-icon').click(function() {
  $('.nav_right').toggleClass('active');
  $(this).toggleClass('active');
  $('.dash_nav_right').toggleClass('active');
});




if($(window).innerWidth() <= 991) {
    $("#menu a").click(function(){
        $('.nav_right').removeClass('active');
        $("#hamburger-icon").removeClass('active');
      });                         
} else {
   
}



$(function() {
    $(window).on("load", function() {
        $("#loader").fadeOut("slow");;
    });
});


$('#notif').click(function() {
  $('.sidebar').toggleClass('active');
});

$('.sidebar_head .close').click(function() {
  $('.sidebar').removeClass('active');
});


// try {
//   new fullScroll({
//       mainElement: 'main',
//       displayDots: false,
//       dotsPosition: 'right',
//       animateTime: 0.8,
//       animateFunction: 'ease'
//     });

// }
// catch(err) {
// }



$( document ).ready(function(){
    $('#verify_btn').click(function(){
      $('#backup_fund').addClass('active');
    });
    $('#review_phrase').click(function(){
        $('#backup_fund').removeClass('active');
    });
    $('#new_wallet').click(function(){
        $('.history').addClass('active');
    });
    $('.new_wallet_popup .close').click(function(){
        $('.history').removeClass('active');
    });
});





$(function() {
    var pgurl = window.location.href.substr(window.location.href
       .lastIndexOf("/") + 1);
    $("#menu li a").each(function() {
       if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
           $(this).parent('li').addClass("active");
    })
 });



