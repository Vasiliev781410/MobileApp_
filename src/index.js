(() => {
  function swiperSlider() {
    const heroMain = document.querySelectorAll('[data-slider="team-slider"]');
    if (heroMain) {
      heroMain.forEach(slider => {
        let pagination = slider.querySelector('.swiper-pagination');
        swiper = new Swiper(slider.querySelector('.swiper'), {
          speed: 1500,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: pagination,
            clickable: true,
            renderBullet: function (index, className) {
              return '<li class="' + className + '"></li>';
            },
          },
          on: {
            transitionStart: function () {
              let previousIndex = this.previousIndex;
              let previousSlide =
                slider.getElementsByClassName('swiper-slide')[previousIndex];
              if (previousSlide) {
                setTimeout(function () {
                  previousSlide.classList.remove('is-play');
                }, 1000);
              }
            },
            transitionEnd: function () {
              let activeIndex = this.activeIndex;
              let activeSlide =
                slider.getElementsByClassName('swiper-slide')[activeIndex];
              activeSlide.classList.add('is-play');
            },
          },
        });
      });
    }
  }
  window.addEventListener('load', swiperSlider, false);
 
})();
 function scrollToSection() {
    function smoothScroll(targetEl, duration) {
        // const headerElHeight = head.clientHeight;
        let target = document.querySelector(targetEl);
        if (!target) return;
        let targetPosition = target.getBoundingClientRect().top ;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };
    const links = document.querySelectorAll('.scroll-to');
    if (links) {
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    }
}
scrollToSection();