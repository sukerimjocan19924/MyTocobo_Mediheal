
const img = (path) => `/img/${path}`

export const headerData = {

    logo: {
        src: img('logo.svg'),
        alt: 'MEDIHEAL',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'hero',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'showcase',
            label: 'showcase',
            href: '#showcase',
            type: 'section'
        },
        {
            id: 'beyond',
            label: 'beyond',
            href: '#beyond',
            type: 'section'
        },
        {
            id: 'products',
            label: 'products',
            href: '#products',
            type: 'section'
        },
    ],
    utils: [
        { id: "language", label: "언어", icon: img("icon_language.svg"), href: "#" },
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "카카오채널 추가 시 15% 쿠폰 추가 지급!", href: "#" },
            { id: "tb-2", text: "신규가입 2,000원 + SMS 동의 1,000원 적립금", href: "#" },
            { id: "tb-3", text: "이벤트 카카오채널 추가 시 15% 쿠폰 추가 지급! 중!", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.svg"),
        background: "#151789",
        color: "#fff",
    },
}