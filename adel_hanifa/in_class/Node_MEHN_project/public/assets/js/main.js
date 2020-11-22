/**
* Template Name: Tempo - v2.1.0
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
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
  $(document).ready(function () {
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

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
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

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);



//////////////////my js
function getPostInfo(id) {
  // alert(id)
  $.ajax({
    url: '/selectPostAndShow',
    type: 'GET',
    data: {
      id: id
    },
    success: function (result) {
      console.log(result)
      allPostsID.innerHTML += `
        <div class="col-md-4 d-flex align-items-stretch">
          <article class="entry">
            <div class="entry-img">
            <button title="like" class="text-decoration-none position-absolute btn btn-link text-danger">
              ${checkLikeButton(result.likes)}
            </button>
              <img src="${result.photo}" alt="" class="img-fluid">
            </div>

            <h2 class="entry-title">
              <a href="/post/${result._id}">${result.title}</a>
            </h2>

            <div class="entry-meta">
              <ul>
                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                  <a><time>${result.date}</time></a></li>
              </ul>
            </div>

            <div class="entry-content">
              <p>
              ${result.text}
              </p>
            </div>
          </article>
        </div>

      `
    },
    error: function (error) {
      console.log(error)
    }
  });
}

function checkLikeButton(likes) {
  if (likes.length == 0) {
    return `
    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-suit-heart" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"
        d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z">
      </path>
    </svg>`
  }
  else {
    let userDidLike = false;
    $.ajax({
      url: '/get-current-user',
      type: 'GET',

      success: function (userID) {
        likes.map(item => {
          
          console.log(item)
          console.log(userID)

          if (item == userID){
            userDidLike = true;
          }
        })
      },
      error: function (error) {
        console.log(error)
      }
    })
    if (userDidLike == true){
      return `
      <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z">
        </path>
      </svg>`;
    }
    else {
      return `
      <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-suit-heart" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z">
        </path>
      </svg>`
    }

  }


}

function searchUser(name) {
  searchResultID.innerHTML = `
  <div class="d-flex align-items-stretch">
    <div class=" text-center">
      <span>Enter a friend name to search .</span>
    </div>
  </div>`;

  //alert(name)
  $.ajax({
    url: '/search-a-friend',
    type: 'GET',
    data: {
      name: name
    },
    success: function (result) {
      console.log(result)
      if (result.length == 0) {
        searchResultID.innerHTML = `
          <div class="alert alert-warning text-center my-4" role="alert">
            <h4 class="alert-heading">Not found</h4>
            <p>There are no users have this name: ${name}</p>
            <hr>
            <p class="mb-0">Please try one more time .....</p>
          </div>`
      }
      else {
        searchResultID.innerHTML = ``;
        result.map(item => {
          searchResultID.innerHTML += `
            <div class="d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img src="${item.photo}" class="img-fluid" alt="">
                  <div class="social">
                    <a href="add-friend-to-list/${item._id}" class="w-100">follow</a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>${item.name}</h4>
                  <span>${item.job}</span>
                </div>
              </div>
            </div>`
        })
      }

    },
    error: function (error) {
      console.log(error)
    }
  });
}

function getFriendsInfo(data) {
  //alert(data)
  $.ajax({
    url: '/get-all-friends',
    type: 'GET',
    data: {
      id: data
    },
    success: function (item) {
      console.log(item)
      showAllFriendsInfoID.innerHTML += `
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <div class="member-img">
              <img src="${item.photo}" class="img-fluid" alt="">
              <div class="social">
                <a href="show-friend/${item._id}" class="w-100">Show</a>
              </div>
            </div>
            <div class="member-info">
              <h4>${item.name}</h4>
              <span>${item.job}</span>
            </div>
          </div>
        </div>
      `
    },
    error: function (error) {
      console.log(error)
    }
  });
} 
