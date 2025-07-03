# 퍼블리싱 작업 준비

## 1. 퍼블리싱 폴더 구조 및 프로젝트 생성

- ssg 폴더 : 소문자
- ssg 깃 및 깃허브 셋팅 : 생략
- apis/css/js/assets/bbs 폴더
- index.html

## 2. CSS 설정 시작 (SCSS제외)

- `@charset "utf-8";` 필수 작성하기
- common.css 생성
- layout.css 생성

### 2.1. common.css 에 글꼴 셋팅부터 먼저 진행.

- https://www.jsdelivr.com/package/npm/pretendard
- 정성을 다해서 body 태그를 채워줍니다.

### 2.2. html 에 css 셋팅을 진행함.

- normalize.css 또는 reset.css 배치

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 3. html 설정

### 3.1. IE 의 렌더링 설정

- `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` : 필수

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>슥삭 | 대학생 대외활동·공모전·인턴·교육 추천 공고</title>
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/layout.css" />
  </head>
  <body></body>
</html>
```

### 3.2. 파비콘 및 아이콘 설정

- 디자이너: `512px * 512px` png 파일을 제공함.
- https://realfavicongenerator.net

### 3.3. SEO 셋팅

- Meta 태그 작성
- sitemap.xml
- robots.txt

## 4. html 컨텐츠 구조(컴포넌트 고민하면서) 잡기

- 무조건 body 태그와 내용은 구분하고 시작한다.
- `<div class="wrap"></div>`

### 4.1. 디자인을 보고 영역을 추론

- 주석 작성 및 div 태그, 클래스 명을 작성
- 각 영역별 css, js 파일을 기계적으로 생성

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>슥삭 | 대학생 대외활동·공모전·인턴·교육 추천 공고</title>
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/layout.css" />
  </head>
  <body>
    <div class="wrap">
      <!--Start 상단 -->
      <header class="header">
        <div class="layout"></div>
      </header>
      <!--End 상단 -->
      <!--Start 슬라이드배너 -->
      <div class="slide">
        <div class="layout"></div>
      </div>
      <!--End 슬라이드배너 -->
      <!--Start 카테고리 -->
      <div class="category">
        <div class="layout"></div>
      </div>
      <!--End 카테고리 -->
      <!--Start 공지사항 -->
      <div class="notice">
        <div class="layout"></div>
      </div>
      <!--End 공지사항 -->
      <!--Start 핫한공고 -->
      <div class="hotnews">
        <div class="layout"></div>
      </div>
      <!--End 핫한공고 -->
      <!--Start 최신공고 -->
      <div class="recent">
        <div class="layout"></div>
      </div>
      <!--End 최신공고 -->
      <!--Start 앱설치안내 -->
      <div class="appguide">
        <div class="layout"></div>
      </div>
      <!--End 앱설치안내 -->
      <!--Start 하단 -->
      <footer class="footer">
        <div class="layout"></div>
      </footer>
      <!--End 하단 -->
    </div>
  </body>
</html>
```
