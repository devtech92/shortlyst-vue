$(document).ready(function () {
  //=====================
  // Home Page.
  //=====================

  $(".portfolio-content.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".service-mobile-mockup-row.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".brand-slider.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".manu-btn").click(function () {
    $(".main-menu").slideToggle();
  });

  //=====================
  // Pricing Page
  //=====================
  //toggle the component with class accordion_body
  $(".accordion_head").click(function () {
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(300);
      //   $(".plusminus").text('+');
      $(".accordion_head").find("h5").removeClass("active");
    }
    if ($(this).next(".accordion_body").is(":visible")) {
      $(this).next(".accordion_body").slideUp(300);
      //   $(this).find(".plusminus").text('+');
      $(this).find("h5").removeClass("active");
    } else {
      $(this).next(".accordion_body").slideDown(300);
      //   $(this).find(".plusminus").text('-');
      $(this).find("h5").addClass("active");
    }
  });
  $(".manu-btn").click(function () {
    $(".main-menu").slideToggle();
  });
});
