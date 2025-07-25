window.addEventListener("load", function () {
  const justDataArr = [
    {
      link: "#",
      img: "images/new1.png",
      alt: "구로청년이룸",
      colorbox: "교육/강연",
      city: "",
      text: "[구로청년이룸] 취업을 즐기다! <취얼업 페스타> 참여자 모집",
      date: "D-21",
    },
    {
      link: "#",
      img: "images/new2.png",
      alt: "스타아티스트",
      colorbox: "공모전",
      city: "",
      text: "[스타아티스트] 제1회 아담국제영화제 작품공모",
      date: "D-73",
    },
    {
      link: "#",
      img: "images/new3.png",
      alt: "유어유니콘",
      colorbox: "인턴십",
      city: "서울 강남구",
      text: "[유어유니콘] 컨텐츠 및 퍼포먼스 마케팅 인턴",
      date: "D-12",
    },
    {
      link: "#",
      img: "images/new4.png",
      alt: "네이버웹툰",
      colorbox: "인턴십",
      city: "경기 성남시",
      text: "[네이버웹툰] EU Webtoon 영상 디자이너",
      date: "오늘 마감",
    },
    {
      link: "#",
      img: "images/new5.png",
      alt: "NAVER Cloud",
      colorbox: "인턴십",
      city: "경기 성남시",
      text: "[NAVER Cloud] SaaS(클라우드형 협업툴) Contents Development",
      date: "D-1",
    },
    {
      link: "#",
      img: "images/new6.png",
      alt: "PTKOREA",
      colorbox: "인턴십",
      city: "서울 강남구",
      text: "[PTKOREA] 디지털 캠페인 기획 및 SNS 운영 보조",
      date: "D-111",
    },
    {
      link: "#",
      img: "images/new7.png",
      alt: "라이카카메라코리아",
      colorbox: "인턴십",
      city: "서울 강남구",
      text: "[라이카카메라코리아] Sales Intern",
      date: "D-7",
    },
    {
      link: "#",
      img: "images/new8.png",
      alt: "당근마켓",
      colorbox: "인턴십",
      city: "서울 서초구",
      text: "[당근마켓] FP&A Intern",
      date: "D-5",
    },
  ];

  let html = ``;

  for (let i = 0; i < justDataArr.length; i++) {
    const item = justDataArr[i];

    let cityHtml = ``;
    if (item.city) {
      cityHtml = `<div class="justnew_banner_city">${item.city}</div>`;
    }

    html += `<a href="${item.link}" class="justnew_banner_content">
                  <div class="justnew_banner_img">
                    <img src="${item.img}" alt="${item.alt}" />
                  </div>
                  <div class="justnew_banner_info">
                    <div class="justnew_banner_label">
                      <div class="justnew_banner_colorbox">${item.colorbox}</div>
                      ${cityHtml}
                    </div>
                    <p class="justnew_banner_text">
                     ${item.text}
                    </p>
                  </div>
                  <div class="justnew_banner_date">
                    <p>${item.date}</p>
                  </div>
                </a>`;
  }
  document.querySelector(".justnew_banner").innerHTML = html;
});
