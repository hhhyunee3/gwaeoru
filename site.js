// 과외루 사이트 설정 — 브랜드·도메인·색상처럼 이 사이트에서만 다른 값.
// 문구(홈·과목·지역·학교 본문)는 content.js, 정보글은 guides.js 에 있다.
export default {
  name: '과외루',
  nameEn: 'GwaeoRu',
  domain: 'gwaeoru.com',
  origin: 'https://gwaeoru.com',
  tel: '010-3038-8978',
  telRaw: '01030388978',
  tagline: '매주 쌓이는 학습 루틴, 1:1 맞춤 과외',
  // 검색결과·SNS 요약 한 줄
  desc: '초·중·고 1:1 방문·화상 과외. 매주 같은 시간에 쌓이는 루틴으로 스스로 공부하는 학생이 되게 합니다. 무료 상담 010-3038-8978',
  // 디자인 토큰 — 기본(c1)·보조(c2)·버튼(c3)·포인트(c4)
  colors: { c1: '#4C1D95', c2: '#EDE9FE', c3: '#7C3AED', c4: '#F59E0B' },
  // 로고 마크 안 글자
  logoLetter: '루',
  // 지역 페이지까지 만드는 공통 과목(순서대로 메뉴에 표시)과 특화 프로그램
  subjects: ['math', 'english', 'korean', 'science', 'social'],
  extras: ['coding', 'ged'],
  // IndexNow 키 — /<키>.txt 로도 응답한다
  indexNowKey: 'c9f3a1e5d7b24c8e9a1f6d3b5e8c2a7d',
  // 본문 "최종 업데이트" 표시와 사이트맵 lastmod
  updated: '2026-09-14',
  mailFrom: 'noreply@gwaeoru.com',
  mailTo: 'hhhyunee3@naver.com',
};
