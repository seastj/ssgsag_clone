window.addEventListener("load", function () {
  const cokDataArr = [
    {
      link: "#",
      img: "images/cok1.png",
      alt: "스포츠 윤리 센터",
      label: ["공모전", "교육", "인턴십", "대외활동"],
      city: "서울 종로구",
      option:
        "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상공모전",
      date: "D-28",
    },
    {
      link: "#",
      img: "images/cok2.png",
      alt: "스포츠 윤리 센터",
      label: ["공모전", "교육", "인턴십", "대외활동"],
      city: "서울 종로구",
      option:
        "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상공모전",
      date: "D-28",
    },
    {
      link: "#",
      img: "images/cok3.png",
      alt: "스포츠 윤리 센터",
      label: ["공모전", "교육", "인턴십", "대외활동"],
      city: "서울 종로구",
      option:
        "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상공모전",
      date: "D-28",
    },
    {
      link: "#",
      img: "images/cok4.png",
      alt: "스포츠 윤리 센터",
      label: ["공모전", "교육", "인턴십", "대외활동"],
      city: "서울 종로구",
      option:
        "[스포츠윤리센터] 스포츠윤리센터 성희롱·성폭력 예방 숏폼 영상공모전",
      date: "D-28",
    },
  ];

  // html 태그 만들기
  let html = ``;

  for (i = 0; i < cokDataArr.length; i++) {
    const item = cokDataArr[i];

    // city 가 있으면 생성 없을시 삭제
    let cityHtml = ``;

    if (item.city) {
      cityHtml = ` <div class="cok_info_city">${item.city}</div>`;
    }

    html += `<a href="${item.link}" class="cok_list">
                <div class="cok_list_image">
                  <img src="${item.img}" alt="${item.alt}" />
                </div>
                <div class="cok_list_info">
                  <div class="cok_label">
                    <div class="cok_info_cup">${item.label}</div>
                    ${cityHtml}</div>
                  <div class="cok_info_option">
                    ${item.option}
                  </div>
                  <div class="cok_info_date">${item.date}</div>
                </div>
              </a>`;
  }

  document.querySelector(".cok_content").innerHTML = html;
});
