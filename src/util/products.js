const img = (path) => `/img/${path}`;

const productsData = [
  {
    id: "calm",
    label: "진정 · 보습",
    mainProduct: {
      image: img("calm_main.png"),
      description: "NMF Hydration <br/> 순한 진정 케어",
      alt: "NMF Hydration 순한 진정 케어 대표 이미지",
      link: "/product/calm_more"
    },
    subProducts: [
      {
        image: img("calm1.png"),
        description: "히알루론산 속보습 <br/> 더마 모델링팩",
        alt: "히알루론산 속보습 더마 모델링팩",
        link: "/product/calm1"
      },
      {
        image: img("calm2.png"),
        description: "마데카소사이드 에센셜 <br/> 마스크 흔적 리페어 10매",
        alt: "마데카소사이드 에센셜 마스크 흔적 리페어 10매",
        link: "/product/calm2"
      },
      {
        image: img("calm3.png"),
        description: "티트리 에센셜 마스크 <br/> 진정 수분 10매",
        alt: "티트리 에센셜 마스크 진정 수분 10매",
        link: "/product/calm3"
      },
      {
        image: img("calm4.png"),
        description: "티트리 진정 장벽 앰플 50ml",
        alt: "티트리 진정 장벽 앰플 50ml",
        link: "/product/calm4"
      }
    ]
  },

  {
    id: "elastic",
    label: "탄력",
    mainProduct: {
      image: img("elastic_main.png"),
      description: "콜라겐 탄력 마스크 <br/>",
      alt: "콜라겐 탄력 마스크 대표 이미지",
      link: "/product/elastic_more"
    },
    subProducts: [
      {
        image: img("elastic1.png"),
        description: "콜라겐 탄력 마스크",
        alt: "콜라겐 탄력 마스크",
        link: "/product/elastic1"
      },
      {
        image: img("elastic2.png"),
        description: "펩타이드 앰플",
        alt: "펩타이드 앰플",
        link: "/product/elastic2"
      },
      {
        image: img("elastic3.png"),
        description: "탄력 세럼",
        alt: "탄력 세럼",
        link: "/product/elastic3"
      },
      {
        image: img("elastic4.png"),
        description: "리프팅 크림",
        alt: "리프팅 크림",
        link: "/product/elastic4"
      }
    ]
  },

  {
    id: "pore",
    label: "모공 · 흔적",
    mainProduct: {
      image: img("pore_main.png"),
      description: "모공 케어 팩 <br/>",
      alt: "모공 케어 팩 대표 이미지",
      link: "/product/pore_more"
    },
    subProducts: [
      {
        image: img("pore1.png"),
        description: "모공 케어 팩",
        alt: "모공 케어 팩",
        link: "/product/pore1"
      },
      {
        image: img("pore2.png"),
        description: "티트리 모공 세럼",
        alt: "티트리 모공 세럼",
        link: "/product/pore2"
      },
      {
        image: img("pore3.png"),
        description: "모공 집중 앰플",
        alt: "모공 집중 앰플",
        link: "/product/pore3"
      },
      {
        image: img("pore4.png"),
        description: "모공 클린 마스크",
        alt: "모공 클린 마스크",
        link: "/product/pore4"
      }
    ]
  },

  {
    id: "glow",
    label: "광채 · 영양",
    mainProduct: {
      image: img("glow1.png"),
      description: "비타민 광채 앰플",
      alt: "비타민 광채 앰플 대표 이미지",
      link: "/product/glow1"
    },
    subProducts: [
      {
        image: img("glow1.png"),
        description: "비타민 광채 앰플",
        alt: "비타민 광채 앰플",
        link: "/product/glow1"
      },
      {
        image: img("glow2.png"),
        description: "광채 마스크",
        alt: "광채 마스크",
        link: "/product/glow2"
      },
      {
        image: img("glow3.png"),
        description: "영양 세럼",
        alt: "영양 세럼",
        link: "/product/glow3"
      },
      {
        image: img("glow4.png"),
        description: "비타민 크림",
        alt: "비타민 크림",
        link: "/product/glow4"
      }
    ]
  }
];

export default productsData;