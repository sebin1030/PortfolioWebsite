# Portfolio Website 화면설계서

문서 버전: v1.0

## 1. 공통 레이아웃

- Header: 왼쪽 상단 로고, About, PM Projects, Data Analysis, Vibe Coding, Contact
- 로고 클릭 시 Home 이동
- 모든 페이지는 공통 비밀번호 인증 후 접근
- 데스크톱 우선 설계, 모바일·태블릿 반응형 지원
- 브라우저 뒤로 가기는 브라우저 기본 동작 사용

## 2. 인증 화면

```text
[사이트 로고]
Portfolio Website
공유받은 포트폴리오를 확인하려면 비밀번호를 입력해 주세요.
[비밀번호 입력창] [접속하기]
[오류 메시지]
```

- 성공: Home 또는 요청한 페이지로 이동
- 실패: `비밀번호가 올바르지 않습니다.` 표시 후 재입력
- 로그아웃 기능은 MVP에서 제외

## 3. Home

Home은 나를 소개하고 주요 콘텐츠로 연결하는 스크롤형 랜딩 페이지다.

### 3-1. Hero

```text
[이름]
[직무 정체성]
사용자 문제를 발견하고, 데이터와 기획으로 해결책을 설계하는 Product Manager
[한 줄 소개]
아이디어를 구조화하고 실행 가능한 제품으로 구체화합니다.
[About 보기] [대표 프로젝트 보기]
```

이름과 문구는 추후 확정한다.

### 3-2. About 미리보기

```text
[PM을 지향하게 된 계기]
[나의 PM 방식]
Problem → Data → Insight → Product → Validation
[About 자세히 보기]
```

### 3-3. 대표 프로젝트 미리보기

```text
[Featured Projects]
[Medibuddy 카드]
[최종 프로젝트 카드]
[전체 프로젝트 보기]
```

프로젝트 상세 내용은 추후 입력한다.

### 3-4. Now Timeline

```text
[Now]
● 활동 1 / 날짜 / 설명
● 활동 2 / 날짜 / 설명
```

진행 중인 활동은 프로젝트 목록이 아니라 Now·Timeline에만 표시한다.

### 3-5. Category 바로가기

```text
[PM Projects] [Data Analysis] [Vibe Coding]
```

## 4. About

```text
[페이지 제목] About Me
[PM을 지향하게 된 계기]
[My PM Philosophy]
Problem → Data → Insight → Product → Validation
[Working Style]
[Skills] PM / Data / AI / Development
[Timeline]
[Now]
[Contact 버튼]
```

## 5. PM Projects 목록

```text
[페이지 제목] PM Projects
문제를 정의하고 서비스를 기획·검증한 프로젝트입니다.
[전체 / Personal / Team / Competition]
[프로젝트 카드 그리드]
```

대표 프로젝트 우선, 이후 최신순으로 정렬한다.

## 6. Data Analysis 목록

```text
[페이지 제목] Data Analysis
데이터를 분석해 문제와 인사이트를 도출한 프로젝트입니다.
[전체 / Personal / Team / Competition]
[프로젝트 카드 그리드]
```

## 7. Vibe Coding 목록

```text
[페이지 제목] Vibe Coding
AI와 바이브코딩으로 빠르게 제작하고 실험한 결과물입니다.
[전체 / Personal / Team / Competition]
[프로젝트 카드 그리드]
```

## 8. 프로젝트 카드

```text
[썸네일] [카테고리] [프로젝트 유형]
[프로젝트 제목]
[한 줄 설명]
[기간] · [역할] · [태그]
[자세히 보기]
```

공통 필드:

`id`, `title`, `slug`, `category`, `project_type`, `summary`, `period`, `role`, `tags`, `thumbnail`, `content`, `status`, `created_at`, `updated_at`

완성된 프로젝트만 카드 목록에 노출한다.

## 9. 프로젝트 상세

```text
[뒤로 가기 또는 카테고리 이동]
[프로젝트 제목]
[카테고리] [Personal / Team / Competition]
[기간] · [역할] · [태그]
[Executive Summary]
[Background]
[Problem]
[Research / Data]
[Insight]
[Hypothesis]
[Product Strategy]
[UX Flow / Wireframe]
[MVP / Implementation]
[Result / Validation]
[Retrospective]
[외부 링크 영역: 추후 GitHub / Notion / Demo / Figma]
```

## 10. Contact

```text
[페이지 제목] Contact
함께 이야기하고 싶은 분은 편하게 연락해 주세요.
[Email] [GitHub] [Notion] [Resume]
```

MVP에서는 외부 링크를 연결하지 않고 자리만 구성한다.

## 11. 404 화면

```text
404
페이지를 찾을 수 없습니다.
요청하신 페이지가 존재하지 않거나 주소가 변경되었을 수 있습니다.
[Home으로 돌아가기] [이전 페이지로 돌아가기]
```

## 12. 반응형 기준

- 데스크톱: 기본 화면과 카드 그리드
- 태블릿: 카드 열 수와 여백 조정
- 모바일: 단일 열 카드, 세로형 Hero, 접히는 메뉴

## 13. 화면 이동 구조

```text
인증 화면 → Home
Home → About
Home → Featured Project → 프로젝트 상세
Home → PM Projects / Data Analysis / Vibe Coding
카테고리 목록 → 프로젝트 상세
Home → Contact
```

## 출처

사용자 확정 요구사항 및 [portfolio_website_prd.md](./portfolio_website_prd.md)를 기준으로 작성했다.
