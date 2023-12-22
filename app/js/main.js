
// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

// Получаем все ссылки внутри бургер-меню
const mobileMenuLinks = document.querySelectorAll('.mobileMenu-link');

// Добавляем обработчик события для каждой ссылки
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Закрываем бургер-меню
    document.querySelector(".mobileMenu-overlay").classList.remove("open");
    document.body.style.overflowX = "auto";
  });
});

// Также добавляем обработчик для кнопки закрытия
document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

//tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.getElementById('technology-tabs');
  const tabContents = document.querySelectorAll('.technology-tab');

  tabsContainer.addEventListener('click', function (event) {
      event.preventDefault();
      const target = event.target.closest('a');
      
      if (target) {
          const tabId = target.getAttribute('data-target');

          tabContents.forEach(content => {
              content.style.display = 'none';
          });

          document.getElementById(tabId).style.display = 'block';

          tabsContainer.querySelectorAll('a').forEach(tab => {
              tab.classList.remove('active');
          });

          target.classList.add('active');
      }
  });

  tabsContainer.querySelector('a').click();
});
// slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.support-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 0,
    navigation: {
      nextEl: '.support-next-btn',
      prevEl: '.support-prev-btn',
    },
    breakpoints: {
      // when window width is <= 576px
      320: {
        slidesPerView: 1.3,
      },
      576: {
        slidesPerView: 2,
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 2.5,
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
      },
      // when window width is <= 1200px
      1200: {
        slidesPerView: 4,
      },
      1250: {
        slidesPerView: 4.5,
      },
    },
  });
});

// slider 2
document.addEventListener("DOMContentLoaded", function () {
  var isMobile = window.innerWidth <= 768;

  var swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".say-next-btn",
      prevEl: ".say-prev-btn",
    },
  };
  if (isMobile) {
    swiperOptions.autoplay = {
      delay: 3000, // автоматически свайпать каждые 2 секунды
      disableOnInteraction: false,
    };
  }
  var swiper = new Swiper(".say-swiper", swiperOptions);
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = document.querySelector('.header').offsetHeight; // Замени '.header' на класс или идентификатор твоего фиксированного хедера
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
