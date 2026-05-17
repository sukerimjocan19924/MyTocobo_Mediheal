# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 💆‍♀️ MyTocobo Mediheal

## 📌 프로젝트 소개
React 기반 프론트엔드 웹 애플리케이션으로, 사용자가 **스킨케어 제품을 탐색하고 홍보 콘텐츠를 확인**할 수 있는 웹사이트입니다.

---

## ✨ 주요 기능
- JSON 기반 Mock Data를 활용한 **제품 데이터 관리**
- Hero, Showcase, Beyond, Products 등 **섹션별 UI 컴포넌트화**
- 모바일 네비게이션 열림/닫힘 제어 및 스크롤 이벤트 기반 헤더 스타일 변화
- 배너 닫기/올리기 기능으로 사용자 경험 개선
- SCSS 모듈화 및 반응형 스타일링

---

## 🖼️ 구현 화면
- **제품 쇼케이스 화면** (카테고리별 메인/서브 제품 표시)
- **Hero 및 Beyond 섹션** (브랜드 메시지 강조)
- **TopBanner, FixedTopBtn** 등 UX 개선 요소

---

## 🛠️ 사용 기술
- **Frontend**: React, JavaScript  
- **State Management**: React Hooks (useState, useEffect)  
- **Data Handling**: Mock Data(JSON)  
- **Styling**: SCSS 모듈화, main.scss  
- **UI Components**: Header, Hero, Showcase, Beyond, Products, Footer, TopBanner, FixedTopBtn  
- **Animation/UX**: Scroll 이벤트, TopBanner 제어  
- **Deployment**: Vite, GitHub Pages / Vercel  

---

## 🔗 실행 링크
[MyTocobo Mediheal 실행하기](https://my-tocobo-mediheal.vercel.app/)
