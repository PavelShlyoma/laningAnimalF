window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
  const swiperPromo = new Swiper('.my-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 33,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2,
        spaceBetween: 33,
      }
    },
  });
  const swiperNews = new Swiper('.news-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      680: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    },
  });

  const swiperCatalog = new Swiper('.catalog-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },
  });

  const bagShoppingSwiper = new Swiper('.bag-shopping-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      680: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    },
  });

  const productSwiper = new Swiper('.products-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },
  });

  const charitySwiper = new Swiper('.charity-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.my-swiper-button-next',
      prevEl: '.my-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      loop: true,
    },
  });


}
