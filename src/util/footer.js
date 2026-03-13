// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo2.svg"),
  alt: "MEDIHEAL 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "상호 : 엘앤피코스메틱(주) | 대표 : 권오섭, 김순원",
  "주소 : 07665 메디힐 빌딩, 서울특별시 강서구 공항대로 516 (등촌동)",
  "사업자등록번호 : 109-86-17345 [사업자정보확인]",
  "통신판매업신고번호: 2013-서울강서-0610 | 개인정보관리책임자 : 강소진",
  "TEL : 080-860-8400 | E-MAIL : help_cs@medihealcos.com",
  "제품불편접수 : 080-860-8400",
  "팩스번호 : 02-2668-4666",
  "제휴 및 대량구매 문의 : help@medihealcos.com",
];
export const footerLegal = {
  copyright: "Copyright ⓒ 메디힐샵 all right reserved.",
  links: [
    { label: "회사소개", href: "/introduction" },
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};

// 고객센터
export const customerCenterData = {
  title: "고객센터",
  tel: { value: "02-6352-2410", href: "tel:0263522410" },
  open: "OPEN : MON – THU, 10:00 – 18:00/FRI, 10:00 – 16:00",
  lunch: "LUNCH : 12:00 – 13:00",
  close: "CLOSE : SAT, SUN, HOLIDAY OFF",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Shop",
    items: [
        { label: "All Product", href: "/shop" },
        { label: "New", href: "/shop/new" },
        { label: "Only", href: "/shop/only" },
        { label: "Maskpack", href: "/shop/maskpack" },
        { label: "Pad", href: "/shop/pad" },
        { label: "Skincare", href: "/shop/skincare" },
        { label: "Cleansing", href: "/shop/cleansing" },
        { label: "Suncare", href: "/shop/suncare" },
    ],
  },
  {
    title: "Event",
    items: [
      { label: "Event", href: "/event" },
      { label: "Coupon", href: "/coupon" },
    ],
  },
  {
    title: "Brand",
    items: [
        { label: "BrandStory", href: "/brand-story" },
        { label: "Collection", href: "/collection" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "Review", href: "/review" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
