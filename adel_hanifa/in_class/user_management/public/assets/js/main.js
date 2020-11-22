/**
* Template Name: Mentor - v2.1.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Init AOS
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

})(jQuery);

///////////////////////////////////////////
/////////////////My JS Part////////////////
///////////////////////////////////////////

function addClassFun() {
  teacherSelect.innerHTML = `<option value="" disabled selected hidden>Please select a teacher</option>`
  studentsSelect.innerHTML = `<option value="" disabled>Please select the students</option>`
  //alert(id)
  $.ajax({
    url: '/selectOptions-teacher',
    type: 'GET',
    success: function (result) {
        console.log(result)
        result.map((item) => {
          teacherSelect.innerHTML += `<option value="${item._id}">${item.firstName} ${item.lastName}</option>`
        })
    },
    error: function (error) {
      console.log(error)
    }
  });
  $.ajax({
    url: '/selectOptions-students',
    type: 'GET',
    success: function (result) {
        console.log(result)
        result.map((item) => {
          studentsSelect.innerHTML += `<option value="${item._id}">${item.firstName} ${item.lastName}</option>`
        })
    },
    error: function (error) {
      console.log(error)
    }
  });
}

function findUserToEdit(id) {
  //alert(id);
  $.ajax({
    url: '/select-user-id',
    type: 'GET',
    data: {
      id: id
    },
    success: function (result) {
        console.log(result)
        dispayUserInfo.innerHTML = `
        <div class="modal-body row mx-3">
          <input value="${result._id}" name="_id" class="d-none">

          <h6 class="col-sm-3 px-0 font-weight-bold">Name:</h6>
          <div class="col-sm-9 row mx-0 px-0">
              <input class="form-control col-sm-6" value="${result.firstName}" name="firstName">
              <input class="form-control col-sm-6" value="${result.lastName}" name="lastName">
          </div>

          <h6 class="col-sm-3 px-0 font-weight-bold">Birthday:</h6>
          <input class="form-control col-sm-9" value="${result.birthday}" name="birthday">

          <h6 class="col-sm-3 px-0 font-weight-bold">Gender:</h6>
          <input class="form-control col-sm-9" value="${result.gender}" name="gender"></td>

          <h6 class="col-sm-3 px-0 font-weight-bold">Country:</h6>
          <input class="form-control col-sm-9" value="${result.country}" name="country">

          <h6 class="col-sm-3 px-0 font-weight-bold">Address:</h6>
          <div class="col-sm-9 row mx-0 px-0">
              <input class="form-control col-sm-9" value="${result.addressStreet}" name="addressStreet">
              <input class="form-control col-sm-3" value="${result.addressNr}" name="addressNr">
              <input class="form-control col-sm-3" value="${result.addressPlz}" name="addressPlz">
              <input class="form-control col-sm-9" value="${result.addressCity}" name="addressCity">
          </div>

          <h6 class="col-sm-3 px-0 font-weight-bold">Phone:</h6>
          <input class="form-control col-sm-9" value="${result.phoneNumber}" name="phoneNumber">

          <h6 class="col-sm-3 px-0 font-weight-bold">Email:</h6>
          <input class="form-control col-sm-9" value="${result.email}" name="email">

          <h6 class="col-sm-3 px-0 font-weight-bold">Password:</h6>
          <input class="form-control col-sm-9" value="${result.password}" name="password">
      </div>

      <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
          <a type="button" class="btn btn-warning" href="delete-user-by-admin/${result._id}">Delete</a>
          <button type="submit" class="btn btn-primary">Save</button>
      </div>
        `
    },
    error: function (error) {
      console.log(error)
    }
  });
}