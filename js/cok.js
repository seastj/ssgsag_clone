window.addEventListener("load", function () {
  const cokDataArr = [
    {
      link: "#",
      img: "images/cok1.png",
      alt: "스포츠 윤리 센터",
      label: [{ text: "공모전", style: "cok_label_blue" }],
      city: "",
      option:
        "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상공모전",
      date: "D-28",
    },
    {
      link: "#",
      img: "images/cok2.png",
      alt: "이노션",
      label: [{ text: "공모전", style: "cok_label_blue" }],
      city: "",
      option: "[이노션] 2025 INNOCEAN S.O.S(SOCIAL PROBLEM SOLVER) 공모전",
      date: "D-37",
    },
    {
      link: "#",
      img: "images/cok3.png",
      alt: "한국교육학술정보원",
      label: [{ text: "대외활동", style: "cok_label_puple" }],
      city: "",
      option:
        "[한국교육학술정보원(RISS)] 학술연구정보서비스 RISS의 공식 서포터즈 'PLAY RISS' 7기 모집",
      date: "D-5",
    },
    {
      link: "#",
      img: "images/cok4.png",
      alt: "CJ 대한통운",
      label: [{ text: "인턴십", style: "cok_label_red" }],
      city: "서울 종로구",
      option: "[CJ대한통운] 25년도 TES LAB TRACK 인턴",
      date: "D-7",
    },
  ];

  // html 태그 만들기
  let html = ``;

  for (let i = 0; i < cokDataArr.length; i++) {
    const item = cokDataArr[i];

    // city 가 있으면 생성 없을시 삭제
    let cityHtml = ``;
    if (item.city) {
      cityHtml = `<div class="cok_info_city">${item.city}</div>`;
    }
    // 배열 안의 객체에 텍스트와 스타일에 따라 다르게 적용
    let labHtml = ``;
    if (item.label) {
      labHtml = `<div class="${item.label[0].style}">${item.label[0].text}</div>`;
    }

    html += `<a href="${item.link}" class="cok_list">
                <div class="cok_list_image">
                  <img src="${item.img}" alt="${item.alt}" />
                </div>
                <div class="cok_list_info">
                  <div class="cok_label">
                    ${labHtml}
                    ${cityHtml}</div>
                    </div>
                  <div class="cok_info_option">
                    ${item.option}
                  </div>
                  <div class="cok_info_date">${item.date}</div>
                </div>
              </a>`;
  }

  document.querySelector(".cok_content").innerHTML = html;
});
