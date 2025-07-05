window.addEventListener("load", () => {
  const apiData = [
    {
      id: 2,
      link: "#",
      image: "images/banner_1.png",
      alt: "추천을 새롭게 보는 법",
    },
    {
      id: 3,
      link: "#",
      image: "images/banner_2.png",
      alt: "혹시 슥삭 홈이 바뀐 거 눈치채셨나요",
    },
    {
      id: 4,
      link: "#",
      image: "images/banner_3.png",
      alt: "대학 생활을 보다 개성있게",
    },
    {
      id: 5,
      link: "#",
      image: "images/banner_4.png",
      alt: "취업하기 딱 좋은 때는 바로 지금",
    },
  ];

  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");

  let htmlTag = "";
  for (let i = 0; i < apiData.length; i++) {
    htmlTag += `
    <div class="swiper-slide">
                    <a href="${apiData[i].link}" class="banner_slide_item">
                      <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
                    </a>
                  </div>
    `;
  }

  bannerPos.innerHTML = htmlTag;

  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 80,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pn",
        clickable: true,
      },
    });
  }
  makeSlide();
});
