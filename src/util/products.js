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
      description: "Elastic Glow <br/> 탱탱한 탄력 케어",
      alt: "Elastic Glow 탱탱한 탄력 케어 대표 이미지",
      link: "/product/elastic_more"
    },
    subProducts: [
      {
        image: img("elastic1.png"),
        description: "콜라겐 탄력 더마 모델링팩",
        alt: "콜라겐 탄력 더마 모델링팩",
        link: "/product/elastic1"
      },
      {
        image: img("elastic2.png"),
        description: "더마플러스 프로폴리스 <br/> 마스크 10매",
        alt: "더마플러스 프로폴리스 마스크 10매",
        link: "/product/elastic2"
      },
      {
        image: img("elastic3.png"),
        description: "브이티알 스트레칭 패치 4매",
        alt: "브이티알 스트레칭 패치 4매",
        link: "/product/elastic3"
      },
      {
        image: img("elastic4.png"),
        description: "더마 모델링 팩 [콜라겐 탄력]",
        alt: "더마 모델링 팩 [콜라겐 탄력]",
        link: "/product/elastic4"
      }
    ]
  },

  {
    id: "pore",
    label: "모공 · 흔적",
    mainProduct: {
      image: img("pore_main.png"),
      description: "EGF Essence <br/> 메끈한 피부 케어",
      alt: "EGF Essence 메끈한 피부 케어 대표 이미지",
      link: "/product/pore_more"
    },
    subProducts: [
      {
        image: img("pore1.png"),
        description: "더 티트리 포어 파우더 워시 50g",
        alt: "더 티트리 포어 파우더 워시 50g",
        link: "/product/pore1"
      },
      {
        image: img("pore2.png"),
        description: "더마 시너지 랩핑 <br/> 마스크 [흔적토닝] 10매",
        alt: "더마 시너지 랩핑 마스크 [흔적토닝] 10매",
        link: "/product/pore2"
      },
      {
        image: img("pore3.png"),
        description: "마데카소사이드 수분 <br/> 선세럼 흔적 리페어",
        alt: "마데카소사이드 수분 선세럼 흔적 리페어",
        link: "/product/pore3"
      },
      {
        image: img("pore4.png"),
        description: "블랙헤드 멜팅 클리어 코팩 4매",
        alt: "블랙헤드 멜팅 클리어 코팩 4매",
        link: "/product/pore4"
      }
    ]
  },

  {
    id: "glow",
    label: "광채 · 영양",
    mainProduct: {
      image: img("glow_main.png"),
      description: "Radiant Nutrition <br/> 피부 활력 케어",
      alt: "Radiant Nutrition 피부 활력 케어 대표 이미지",
      link: "/product/glow_more"
    },
    subProducts: [
      {
        image: img("glow1.png"),
        description: "더마 씰 마스크 영양 탄력 10매",
        alt: "더마 씰 마스크 영양 탄력 10매",
        link: "/product/glow1"
      },
      {
        image: img("glow2.png"),
        description: "더마 시너지 랩핑 마스크 <br/> [잡티결광] 10매",
        alt: "더마 시너지 랩핑 마스크 [잡티결광] 10매",
        link: "/product/glow2"
      },
      {
        image: img("glow3.png"),
        description: "더마플러스 동백 마스크 10매 [영양리프팅]",
        alt: "더마플러스 동백 마스크 10매 [영양리프팅]",
        link: "/product/glow3"
      },
      {
        image: img("glow4.png"),
        description: "비타 콜라겐 아이 앰플 패치 60매",
        alt: "비타 콜라겐 아이 앰플 패치 60매",
        link: "/product/glow4"
      }
    ]
  }
];

export default productsData;