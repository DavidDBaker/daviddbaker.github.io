/*  Sticky Nav  */
$(document).ready(() => {
  $(".js--section-features").waypoint(
    (direction) => {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px",
    }
  );

  /*   Scroll on buttons   */
  $(".js--scroll-to-plan").click((e) => {
    $("html, body").animate(
      { scrollTop: $(".js--section-plan").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click((event) => {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            }, 1000, () => {
              // Callback after animation
              // Must change focus!
              let $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });


/*  Animations on scroll  */
  $(".js--wp-1").waypoint( () => {
      $(".js--wp-1").addClass("animate__animated  animate__fadeIn");
    },
     {
        offset: '50%'
    });

    $(".js--wp-2").waypoint( () => {
        $(".js--wp-2").addClass("animate__animated  animate__fadeInUp");
      }, {
          offset: '50%'
      });

      $(".js--wp-3").waypoint( () => {
        $(".js--wp-3").addClass("animate__animated  animate__fadeIn");
      }, {
          offset: '50%'
      });

      $(".js--wp-4").waypoint( () => {
        $(".js--wp-4").addClass("animate__animated  animate__pulse");
      }, {
          offset: '50%'
      });
  
      $('.color-btn').click(() => {

      })

      /*  MOBILE NAV  */

      //not working figure it out.
      $('.js--nav-icon').click(() => {
        $('.js--main-nav').slideToggle(200);

        let icon = $('js--nav-icon i');
        
        if (icon.hasClass('fas fa-bars')) {
          icon.addClass('fas fa-times');
          icon.removeClass('fas fa-bars');
        } else {
          icon.addClass('fas fa-bars');
          icon.removeClass('fas fa-times');
        };
      })



});

