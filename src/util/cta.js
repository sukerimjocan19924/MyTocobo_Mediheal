const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "all-products/",
    name: "전제품",
    href: "/category/all-products/61/",
    img: {
      src: img("cate-1.png"),
      alt: "전제품",
    },
  },
  {
    id: 42,
    slug: "new",
    name: "NEW",
    href: "/category/new/42/",
    img: {
      src: img("cate-2.png"),
      alt: "NEW",
    },
  },
  {
    id: 52,
    slug: "only",
    name: "ONLY",
    href: "/category/only/52/",
    img: {
      src: img("cate-3.png"),
      alt: "ONLY",
    },
  },
  {
    id: 50,
    slug: "maskpack",
    name: "마스크팩",
    href: "/category/maskpack/50/",
    img: {
      src: img("cate-4.png"),
      alt: "마스크팩",
    },
  },
  {
    id: 47,
    slug: "pad",
    name: "패드",
    href: "/category/pad/47/",
    img: {
      src: img("cate-5.png"),
      alt: "패드",
    },
  },
  {
    id: 28,
    slug: "skincare",
    name: "스킨케어",
    href: "/category/skincare/28/",
    img: {
      src: img("cate-6.png"),
      alt: "스킨케어",
    },
  },
  {
     id: 47,
    slug: "cleansing",
    name: "클렌징",
    href: "/category/cleansing/47/",
    img: {
      src: img("cate-7.png"),
      alt: "클렌징",
    },
  },
  {
    id: 22,
    slug: "sun",
    name: "선케어",
    href: "/category/sun/22/",
    img: {
      src: img("cate-8.png"),
      alt: "선케어",
    },
  },
];

export default categories;