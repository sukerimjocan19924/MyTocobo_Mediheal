const img = (path) => `/img/${path}`;
export const eventData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("event_products_img.png"),   // public 폴더 기준
    alt: "event square image",
  },

  eyebrow: "Hello 🩵 We are MEDIHEAL!",
  title: "Rose PDRN <br/> 모공 탄력 에너지",
  description:
    "화이트 로즈에서 추출한 식물성 PDRN은 동물성 PDRN보다 최대 250배 작은 분자 크기로, 힘없는 모공에 빠르고 깊게 탄력 & 리프팅을 선사합니다.",
  cta: {
    label: "제품 보러가기",
    href: "/products"
  }
};


