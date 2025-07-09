window.addEventListener("load", function () {
  const hotDataArr = [
    {
      link: "#",
      img: "images/hot1.png",
      alt: "고용노동부",
      label: [{ text: "대외활동", style: "label_puple" }],
      text: "[고용노동부] 2025 미래내일 일경험 인턴십 참여자 모집",
      date: "D-175",
    },
    {
      link: "#",
      img: "images/hot2.png",
      alt: "한국언론진흥재단",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[한국언론진흥재단] 제6회 뉴스읽기 뉴스일기 공모전",
      date: "D-22",
    },
    {
      link: "#",
      img: "images/hot3.png",
      alt: "제임스 다이슨 재단",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[제임스 다이슨 재단] 국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      date: "D-7",
    },
    {
      link: "#",
      img: "images/hot4.png",
      alt: "우정산업본부",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[우정산업본부] 2025 대한민국 편지쓰기 공모전",
      date: "D-12",
    },
    {
      link: "#",
      img: "images/hot5.png",
      alt: "미리캔버스",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[미리캔버스] 여행 계획만 짜고 1천만원 여행 떠나기",
      date: "D-4",
    },
    {
      link: "#",
      img: "images/hot6.png",
      alt: "(주)패스프리",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[(주)패스프리] 패스프리 로고 디자인 공모전",
      date: "D-22",
    },
    {
      link: "#",
      img: "images/hot7.png",
      alt: "KUDAF",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[KUDAF] 2025 대한민국 대학생 디지털 광고제",
      date: "D-79",
    },
    {
      link: "#",
      img: "images/hot8.png",
      alt: "야놀자리서치",
      label: [{ text: "공모전", style: "label_blue" }],
      text: "[야놀자리서치] 2025 트래블 이노베이션 아이디어 공모전",
      date: "D-2",
    },
  ];

  let html = ``;

  for (let i = 0; i < hotDataArr.length; i++) {
    const item = hotDataArr[i];

    let labHtml = ``;
    if (item.label) {
      labHtml = `<div class="${item.label[0].style}" >${item.label[0].text}</div>`;
    }

    html += `<a href="${item.link}" class="hot_content">
                  <div class="hot_content_img">
                    <img src="${item.img}" alt="${item.alt}" />
                  </div>
                  <div class="hot_content_info">
                    ${labHtml}
                    <div class="hot_text">
                      ${item.text}
                    </div>
                    <div class="hot_date">${item.date}</div>
                  </div>
                </a>
              `;
  }
  document.querySelector(".hot_content_wrap").innerHTML = html;
});
