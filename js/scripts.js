 $(document).ready(function() {

  // MATERIAL DISIGN INK EFFECT 
          var ink, d, x, y;
          $(".ripplelink").on('click',function(e) {
            if ($(this).find(".ink").length === 0) {
              $(this).prepend("<span class='ink'></span>");
            }

            ink = $(this).find(".ink");
            ink.removeClass("animateRipple");

            if (!ink.height() && !ink.width()) {
              d = Math.max($(this).outerWidth(), $(this).outerHeight());
              ink.css({
                height: d,
                width: d
              });
            }

            x = e.pageX - $(this).offset().left - ink.width() / 2;
            y = e.pageY - $(this).offset().top - ink.height() / 2;  

            ink.css({
              top: y + 'px',
              left: x + 'px'
            }).addClass("animateRipple");
          });

// END OF INK EFFECT
 $('header .nav-column ').hide();
$('header .container .row .hamburger').on('click',function(){
   $('header .nav-column ').fadeIn();
  $('header .nav-column ').addClass("active");

}); 

$('header .nav-column .close').on('click',function(){
$('header .nav-column').removeClass("active");
 $('header .nav-column ').fadeOut();
  
}); 
$('header div.nav-column .nav-text a').on('click',function(){
  $('header .nav-column').removeClass("active");
 $('header .nav-column ').fadeOut();
  
}); 
$('header div.nav-column .nav-text span').on('click',function(){
  $('header div.nav-column .nav-text span').removeClass("active");
  $(this).addClass("active");
});


$('section#about-us .row .col-sm-4 div .hover').hover(
       function(){ $(this).css("opacity",'.9') },
       function(){ $(this).css("opacity",'0') }
)


$('section#our-team .row .member .photo .hover').hover(
       function(){ $(this).css("opacity",'.9') },
       function(){ $(this).css("opacity",'0') }
)

$('#service2 .title ').on('click',function(){
  $('#service2 .title').find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
  $('#service2 .content ').removeClass('active');
  $(this).next().addClass('active');
   $(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
  
});

$('section#map div.abs').on('click',function(){
  $('section#map div#new_map').addClass("start");
  $('section#map div.abs').css("opacity","0");
});





});
  function initMap() {
        var map = new google.maps.Map(document.getElementById('new_map'), {
          center: {lat: 52.406374, lng: 16.925168100000064},
          zoom: 15
        });
        var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAnFBMVEUAAADnTDznTDzAOSvnTDznTDznTDznTDznTDznTDznTDznTDzAOSvnTDznTDznTDznTDznTDzAOSvAOSvnTDznTDznTDznTDznTDznTDzAOSvAOSvnTDznTDznTDznTDzAOSvnTDznTDznTDznTDznTDznTDzuTz/sTj7AOSvjSjrdRze5NSe+OCq8Nym6NijKPS/BOSvqTT3lSjtZNM1AAAAAJnRSTlMA95VC8t2vVkLp4ZyOenRsWlBKOzIOAt++qJqUjl7EuJd1X0wqFVrJwOEAAAEKSURBVCjPhZHZkoIwEEWbzRVFRB1Hx9mnyQ7o///bhEIhkKjn7dapTvXtgMFqFIVhNDrtwMFPiFfC1LZvtSB5TlDj27aWjHOWE9uniJizkipFS5brsOrpmba8EJJSKQqu/dS0Y0RyKVR1CIJjpQQjiN/d/pNXPVyKal2HoBKlHh9NWr2M8HyR9NCkI5XsjC+LVvseEl7QdZMCWnCCnv9EDx//bFJMVfe4uVpQh6xbzSzGhKriLIuvxU67Z2cxxpujSqWk66iwb7+E1PYd+mzQ/FDcwIA5GsxhyNYz9B9YLDu7AAfRzc7ARXrTY3Dy0dg9uPlFs5SNb5WyynlbuEuC+AUPmIbwiCTp539vhjMtPgKUgwAAAABJRU5ErkJggg==';
        var myLatLng = new google.maps.LatLng(52.406374, 16.925168100000064);
        var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Junior Front End',
                        icon: image
                    });
      }