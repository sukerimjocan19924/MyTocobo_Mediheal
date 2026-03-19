const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "Daily Gyeol Care <br>Toner Pad Collection",
    subtitle: "글로벌 73관왕 메디힐 N0.1 더마 패드",
    desc: "매일 피부 균형을 지켜주는 데일리 결케어 토너 패드",
    ctaText: "토너 패드 컬렉션 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop: img("main_d_1.png"),
      tablet: img("main_ta_1.png"),
      mobile: img("main_mo_1.jpg"),
    },
    alt: "토너패드 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "1st place serum <br>Wrapping Mask Collection",
    subtitle: "유효 성분 그대로 빈틈 없는 흡수력 초밀착! 랩핑마스크",
    desc: "깊은 보습과 산뜻한 촉촉함을 동시에",
    ctaText: "랩핑마스크 컬렉션 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_2.png"),
      tablet: img("main_ta_2.png"),
      mobile: img("main_mo_2.jpg"),
    },
    alt: "랩핑마스크 히어로 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "100 hour <br>elastic patch collection",
    subtitle: "고민 부위 간편하게 콜라겐 밀도 생성",
    desc: "100시간 동안 지속되는 콜라겐 탄력 케어",
    ctaText: "탄력 패치 컬렉션 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_3.png"),
      tablet: img("main_ta_3.png"),
      mobile: img("main_mo_3.jpg"),
    },
    alt: "탄력 패치 히어로 배너",
    active: true,
    order: 3,
  },
  {
    id: "hs-4",
    title: "High functional <br>serum collection",
    subtitle: "각질층부터 모공까지!",
    desc: "지속 가능한 아름다움을 위한 고기능 세럼",
    ctaText: "세럼 컬렉션 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_4.png"),
      tablet: img("main_ta_4.png"),
      mobile: img("main_mo_4.jpg"),
    },
    alt: "세럼 컬렉션 히어로 배너",
    active: true,
    order: 4,
  },
];