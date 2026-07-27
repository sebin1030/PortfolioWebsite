# Portfolio Website

기획자로서의 활동과 완성된 프로젝트를 정리하고 배포하기 위한 개인 포트폴리오 웹사이트입니다.

## 서비스 개요

나를 소개하는 온라인 명함이자, 프로젝트의 기획 과정과 결과물을 보여주는 포트폴리오 관리 공간입니다.

핵심 메시지: 기획을 중심으로 문제를 정의하고, 데이터를 활용해 서비스를 설계하는 Product Manager

### 주요 사용자

- 나: 완성된 프로젝트를 직접 등록하고 포트폴리오를 지속적으로 관리
- 채용 담당자: 기획 역량과 프로젝트 경험을 빠르게 확인

### 주요 정책

- 모든 페이지는 공통 비밀번호 인증 후 접근
- 로그아웃 기능은 MVP에서 제외
- 완성된 프로젝트만 프로젝트 목록에 등록
- 진행 중인 활동은 About의 Now·Timeline에 표시
- 프로젝트는 대표 프로젝트 우선, 이후 최신순으로 정렬
- 외부 링크는 확장 단계에서 연결
- 데스크톱을 주 사용 환경으로 하고 모바일·태블릿도 지원

## 서비스 흐름

```text
공유 링크 접속 → 비밀번호 인증 → Home → 카테고리 선택 → 프로젝트 목록 → 프로젝트 상세
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
- 공통 비밀번호 인증
- Home, About, 세 카테고리, Contact
- 프로젝트 목록·상세 페이지
- 반응형 레이아웃

### 확장

- 데이터베이스 기반 프로젝트 관리
- 관리자 페이지의 프로젝트 CRUD
- GitHub·Notion·Demo·Figma 연결
- 검색·태그 필터
- 공유 링크 토큰·만료 기능
- 방문 통계

초기에는 웹사이트 구현과 콘텐츠 품질 검증에 집중하고, 프로젝트 수와 관리 필요성이 증가하면 데이터베이스와 관리자 페이지를 추가합니다.

## 관련 문서

- [포트폴리오 웹사이트 PRD](./docs/portfolio_website_prd.md)
- [요구사항 및 서비스 흐름 JSON](./docs/portfolio_website_requirements_and_flows.json)

## 출처

사용자 확정 요구사항 및 기존 포트폴리오 웹사이트 PRD를 기준으로 작성했습니다.
