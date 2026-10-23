# Portfolio Website

기획자로서의 활동과 완성된 프로젝트를 정리하고 배포하기 위한 개인 포트폴리오 웹사이트입니다.

## 서비스 개요

나를 소개하는 온라인 명함이자, 프로젝트의 기획 과정과 결과물을 보여주는 포트폴리오 관리 공간입니다.

핵심 메시지: 기획을 중심으로 문제를 정의하고, 데이터를 활용해 서비스를 설계하는 Product Manager

### 주요 사용자

- 나: 완성된 프로젝트를 직접 등록하고 포트폴리오를 지속적으로 관리
- 채용 담당자: 기획 역량과 프로젝트 경험을 빠르게 확인

### 주요 정책

- 사이트는 비밀번호나 로그인 없이 전체 공개
- 링크를 아는 사람뿐 아니라 검색엔진을 통해서도 접근 가능
- 연락처·문서에는 공개해도 되는 정보만 사용하고 민감정보는 저장하지 않음
- 완성된 프로젝트만 프로젝트 목록에 등록
- 진행 중인 활동은 About의 Now·Timeline에 표시
- 프로젝트는 대표 프로젝트 우선, 이후 최신순으로 정렬
- 외부 링크는 확장 단계에서 연결
- 데스크톱을 주 사용 환경으로 하고 모바일·태블릿도 지원

## 서비스 흐름

```text
공개 링크 접속 → Home → 카테고리 선택 → 프로젝트 목록 → 프로젝트 상세
```

## 폴더 구조

```text
포트폴리오/
├── website/                  # 웹사이트 애플리케이션
│   ├── src/                  # 화면·컴포넌트·라우팅 등 개발 코드
│   └── public/               # 정적 파일
├── content/                  # 웹사이트에 표시할 프로젝트 콘텐츠
│   ├── pm-projects/
│   ├── data-analysis/
│   └── vibe-coding/
├── assets/                   # 썸네일·이미지·영상 등 웹용 에셋
├── docs/                     # PRD·요구사항·설계 문서
└── README.md
```

## 콘텐츠 작성 규칙

프로젝트는 카테고리별 폴더 안에 `project.json`과 `content.md`로 관리합니다.

예시: `content/pm-projects/medibuddy/`

모든 프로젝트의 공통 필드:

`id`, `title`, `slug`, `category`, `project_type`, `summary`, `period`, `role`, `tags`, `thumbnail`, `content`, `status`, `created_at`, `updated_at`

- `category`: `pm-projects`, `data-analysis`, `vibe-coding`
- `project_type`: `Personal`, `Team`, `Competition`
- `status`: `Planning`, `In Progress`, `Completed`, `Archived`
- 프로젝트 목록에는 `Completed` 상태만 노출
- `In Progress` 활동은 About의 Now·Timeline에만 노출

## 프로젝트 상세 구성

Executive Summary → Background → Problem → Research/Data → Insight → Hypothesis → Product Strategy → UX Flow/Wireframe → MVP/Implementation → Result/Validation → Retrospective

## 개발 및 확장 방향

### MVP

- Markdown·JSON 기반 콘텐츠 관리
- 비밀번호·로그인 없는 공개 열람
- Home, About, 세 카테고리, Contact
- 프로젝트 목록·상세 페이지
- 반응형 레이아웃

### 확장

- 데이터베이스 기반 프로젝트 관리
- 관리자 페이지의 프로젝트 CRUD
- GitHub·Notion·Demo·Figma 연결
- 검색·태그 필터
- 방문 통계

초기에는 웹사이트 구현과 콘텐츠 품질 검증에 집중하고, 프로젝트 수와 관리 필요성이 증가하면 데이터베이스와 관리자 페이지를 추가합니다.

## 배포 전략

- 정적 HTML·CSS·JavaScript 사이트에 적합한 GitHub Pages를 사용
- GitHub 저장소에 수정 내용을 반영하면 공개 사이트를 자동 갱신
- 현재 GitHub 저장소 `sebin1030/Portfolio_Website`를 배포 저장소로 사용
- 개인 도메인 연결 전 기본 주소는 `https://sebin1030.github.io/Portfolio_Website/` 형태
- 더 짧고 전문적인 주소가 필요하면 개인 도메인을 구매해 GitHub Pages에 연결
- 추천 도메인 형태: `sebinpark.com`, `sebinpark.me`, `parksebin.com` 중 사용 가능한 주소
- HTTPS를 적용하고 `www` 주소는 대표 도메인으로 자동 이동하도록 설정

### 권장 운영 순서

1. 기존 `sebin1030/Portfolio_Website` 저장소의 현재 `site/` 파일을 배포 대상으로 설정
2. 기본 GitHub Pages 주소로 먼저 공개 및 점검
3. 원하는 개인 도메인을 확보한 뒤 같은 사이트에 연결
4. 이후 로컬에서 수정하고 GitHub에 반영해 지속적으로 갱신

## 관련 문서

- [포트폴리오 웹사이트 PRD](./docs/portfolio_website_prd.md)
- [요구사항 및 서비스 흐름 JSON](./docs/portfolio_website_requirements_and_flows.json)

## 출처

- 사용자 확정 요구사항 및 기존 포트폴리오 웹사이트 PRD
- [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages 사용자 지정 도메인 설정](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages HTTPS 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
