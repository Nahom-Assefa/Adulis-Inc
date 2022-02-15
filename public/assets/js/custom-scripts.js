(function ($) {
  "use strict";

  /*
  |====================
  | Mobile NAv trigger
  |=====================
  */

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });


  /*
  |=================
  | Onepage Nav
  |================
  */

  $("#zb-header").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5
  });

  /*
  | ==========================
  | NAV FIXED ON SCROLL
  | ==========================
  */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });

  jQuery(document).ready(function ($) {
    //  TESTIMONIALS CAROUSEL HOOK
    $("#client-slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      autoplay: false,
      smartSpeed: 450,
      stopOnHover: true,
      animateIn: "slideInRight",
      animateOut: "slideOutLeft",
      autoplayHoverPause: true,
      dots: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });

  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
  }, "No space please and don't leave it empty");
  jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
  }, "Please enter valid email address!");
  $.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  }, "Letters, numbers, and underscores only please");
  var $registrationForm = $('#registration');
  if ($registrationForm.length) {
    $registrationForm.validate({
      rules: {
        //username is the name of the textbox
        name: {
          required: true,
          //alphanumeric is the custom method, we defined in the above
          alphanumeric: true
        },
        email: {
          required: true,
          customEmail: true
        },

        reason: {
          required: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          //error message for the required field
          required: 'Please enter username!'
        },
        email: {
          required: 'Please enter email!',
          //error message for the email field
          email: 'Please enter valid email!'
        },

        reason: {
          required: 'Please select reason!'
        },
        message: {
          required: 'Please enter message!'
        }
      }
    });
  }

  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
  }, "No space please and don't leave it empty");

  $.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  }, "Letters, numbers, and underscores only please");
  var $registrationForm1 = $('#registration_device');
  if ($registrationForm1.length) {
    $registrationForm1.validate({
      rules: {

        imei: {
          required: true,
          alphanumeric: true
        },
        model: {
          required: true
        },
        serial: {
          required: true
        }
      },
      messages: {

        imei: {
          required: 'Please enter IMEI/MEID!'
        },
        model: {
          required: 'Please enter model number'
        },
        serial: {
          required: 'Please enter the serial number'
        }
      }
    });
  }

  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
  }, "No space please and don't leave it empty");
  jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
  }, "Please enter valid email address!");
  $.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  }, "Letters, numbers, and underscores only please");
  var $registrationForm = $('#registration-checkout');
  if ($registrationForm.length) {
    $registrationForm.validate({
      rules: {
        //username is the name of the textbox
        fname: {
          required: true,
          //alphanumeric is the custom method, we defined in the above
          alphanumeric: true
        },
        lname: {
          required: true,
          //alphanumeric is the custom method, we defined in the above
          alphanumeric: true
        },
        email: {
          required: true,
          customEmail: true
        },
        phone: {
          required: true
        },
        city: {
          required: true
        },
        reason: {
          required: true
        }
      },
      messages: {
        fname: {
          //error message for the required field
          required: 'Please enter username!'
        },
        lname: {
          //error message for the required field
          required: 'Please enter username!'
        },
        email: {
          required: 'Please enter email!',
          //error message for the email field
          email: 'Please enter valid email!'
        },
        phone: {
          required: 'Please enter phone!'
        },
        reason: {
          required: 'Please select reason!'
        },
        city: {
          required: 'Please enter city!'
        }
      }
    });
  }
})(jQuery);