const projects = {
  helkki: {
    index: '01', title: 'HELKKI', kicker: 'AI HEALTHCARE · FINAL TEAM PROJECT', color: '#f2a23a', soft: '#fff3df',
    summary: '운동을 시작하지만 컨디션과 생활 제약 때문에 계획을 이어가기 어려운 사용자를 위한 개인 맞춤형 건강관리 서비스입니다.',
    role: 'PM · 서비스 기획 주도', problem: '운동 계획은 있어도 피로·통증·시간·장소가 달라지면 사용자는 계획을 중단했습니다.',
    contribution: ['114명 설문 분석과 문제 재정의', '당일 체크인부터 안전 제안·대안 추천·회고까지 핵심 흐름 설계', 'AI 역할·안전 정책과 MVP 우선순위 결정'],
    solution: ['당일 체크인', '안전 우선 추천', '수행과 회고'], result: '1주 사용자 평가 12명 중 10명이 추천 운동을 1회 이상 수행했고, 사용성 4.17/5와 재사용 의향 4.08/5를 확인했습니다.', highlight: 'SKN 30기 최종 프로젝트 1위'
  },
  workshield: {
    index: '02', title: 'WorkShield', kicker: 'CONTRACT REVIEW · TEAM PROJECT', color: '#2f5cff', soft: '#eaf0ff',
    summary: 'SW 프리랜서와 하도급 계약자가 검토할 내용을 빠르게 좁힐 수 있도록 계약 조항과 판단 근거를 구조화한 서비스입니다.',
    role: '서비스 기획 · 데이터 정책', problem: '계약 전문성이 부족한 사용자는 불리하거나 협의가 필요한 문구를 찾기 어렵고 판단 근거를 신뢰하기 어려웠습니다.',
    contribution: ['표준조항 대비 계약 조항의 상태 비교 구조 설계', '주의 문구와 관련 근거를 함께 표시하는 정보 정책 수립', '분석 결과 기반 Q&A 흐름 기획'],
    solution: ['조항 단위 구조화', '주의 문구·근거', '결과 기반 Q&A'], result: '계약서 업로드부터 조항 비교, 근거 확인, 후속 질문까지 한 흐름으로 연결했습니다.', highlight: '검토 효율 향상 · 판단 근거 제공'
  },
  hotel: {
    index: '03', title: 'Hotel Cancellation', kicker: 'DATA STRATEGY · TEAM PROJECT', color: '#7067b5', soft: '#efedfb',
    summary: '예약 취소 가능성을 예측하는 데서 멈추지 않고, 취소 방지와 손실 보전 운영 전략까지 연결한 데이터 서비스 프로젝트입니다.',
    role: '프로젝트 리드 · 데이터 서비스 기획', problem: '취소 위험을 알아도 후속 조치가 연결되지 않으면 객실 공실과 매출 손실을 줄이기 어렵습니다.',
    contribution: ['취소 위험 고객군과 운영 담당자 관점 정의', '위험도별 재확인·조건 안내·혜택 제안 정책 설계', '취소 발생 후 재판매·가격·재고 대응 전략 연결'],
    solution: ['취소 가능성 산출', '취소 방지 대응', '손실 보전 대응'], result: '예측 결과를 현장 담당자가 실행할 수 있는 운영 우선순위와 대응안으로 바꿨습니다.', highlight: '예측 기반 운영 전략'
  },
  ev: {
    index: '04', title: 'EV Seoul', kicker: 'PUBLIC DATA · TEAM PROJECT', color: '#2f63ff', soft: '#eaf1ff',
    summary: '서울시 전기차 충전소 위치와 차량 현황, FAQ를 한곳에 모아 충전 인프라 탐색 문제를 다룬 첫 데이터 서비스입니다.',
    role: '데이터 서비스 기획', problem: '사용자는 정보를 확인한 뒤에도 실제 충전 행동까지 이어지기 어려웠고 재방문 이유가 부족했습니다.',
    contribution: ['충전소 위치·상세 정보와 지역별 차량 현황 통합', '현재 서비스 가치와 탐색 한계 분석', '이용 계정·개인화·재방문 기능으로 다음 버전 제안'],
    solution: ['충전 이용 계정', '개인화 탐색', '재방문 기능'], result: '정보 제공 중심의 첫 버전을 실제 충전 행동을 지원하는 서비스로 확장할 방향을 도출했습니다.', highlight: '첫 프로젝트 회고에서 다음 버전 제안까지'
  }
};

const p = projects[document.body.dataset.project] || projects.helkki;
document.documentElement.style.setProperty('--project', p.color);
document.documentElement.style.setProperty('--project-soft', p.soft);
document.querySelector('#project-root').innerHTML = `
  <header class="project-nav"><a href="../index.html">← SEBIN PARK</a><span>${p.index} / 04</span></header>
  <section class="project-detail-hero section-shell">
    <div><p class="section-label">${p.kicker}</p><h1>${p.title}</h1><p class="project-lead">${p.summary}</p></div>
    <dl><div><dt>ROLE</dt><dd>${p.role}</dd></div><div><dt>FOCUS</dt><dd>Problem · Policy · Execution</dd></div></dl>
  </section>
  <section class="project-stage"><div class="stage-window"><span>${p.title.toUpperCase()} / SERVICE FLOW</span><div class="stage-flow">${p.solution.map((s,i)=>`<article><b>0${i+1}</b><h3>${s}</h3><p>${i<2?'사용자의 다음 판단을 돕는 핵심 단계':'결과를 다음 행동과 개선으로 연결'}</p></article>`).join('')}</div></div></section>
  <section class="case-grid section-shell section-pad"><article><p class="section-label">PROBLEM</p><h2>${p.problem}</h2></article><article><p class="section-label">MY CONTRIBUTION</p><ol>${p.contribution.map(x=>`<li>${x}</li>`).join('')}</ol></article></section>
  <section class="project-result"><div class="section-shell"><p class="section-label">RESULT & LEARNING</p><div><h2>${p.result}</h2><strong>${p.highlight}</strong></div></div></section>
  <nav class="detail-footer section-shell"><a href="../index.html#projects">← 전체 프로젝트</a><a href="../lab.html">개인 작업 보기 ↗</a></nav>`;
