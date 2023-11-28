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
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4.5,
    spaceBetween: 0,
      navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
      },
  });
});


