# Design Brief

## Product job
가양역 인근에서 운동 공간을 찾는 방문자가 실제 시설·접근성·운영 방식을 확인하고 네이버 상담 또는 전화 문의를 시작한다.

## Direction
원흥점의 어두운 시네마틱 톤과 증거 중심 구성을 계승하되, 가양점의 24시간·역 앞·지상층이라는 생활 밀착형 장점을 강한 숫자 레일과 밝은 공간 사진으로 재구성한다.

## Brand reading
- Immutable identity: 1986 숫자 로고, 블랙 기반, 절제된 올리브 포인트
- Repeatable shapes/materials: 얇은 선, 큰 숫자, 짙은 금속 질감, 직사각형 사진 프레임
- Existing inconsistencies to remove: 과도한 이벤트성 배너, 근거 없는 최상급 표현
- Media provenance: 네이버 이미지 검색에서 확인한 가양점 관련 공개 블로그 썸네일. 원본 사용 권한은 별도 확인 필요

## Reference synthesis
- Structure comes from: 원흥점 사이트의 훅→공간→코칭→방문 순서
- Interaction comes from: 원흥점의 앵커 내비게이션과 시설 필터
- Visual tone comes from: 원흥점의 블랙·올리브·대형 타이포그래피
- Hook/copy energy comes from: 네이버에서 반복 확인된 가양역 6번 출구, 24시간, 지상층 정보
- Motion/media behavior comes from: 첫 화면의 순차 조립과 스크롤 기반 증거 노출
- The final screen will not copy: 원흥점 문구, 사진, 섹션 세부 레이아웃, 고유 회원 사례

## Reference evidence
- Exact page/section/state inspected: 원흥점 데스크톱 첫 화면 및 전체 DOM, 네이버 통합검색 플레이스 결과, 네이버 이미지 검색 첫 화면
- Desktop/mobile behavior observed: 원흥점은 대형 풀블리드 히어로와 고정 헤더. 가양점 구현은 모바일에서 숫자 레일을 가로 스크롤하고 히어로 사진 초점을 우측으로 이동

## Reference implementation map
| Reference evidence | Extracted principle | Local component | Motion/state | Mobile translation | Acceptance evidence |
|---|---|---|---|---|---|
| 원흥점 풀블리드 히어로 | 실제 공간을 배경으로 약속과 CTA 제시 | `.hero` | 카피·버튼·증거칩 순차 등장 | 단일 배경과 하단 정보바 | desktop/mobile capture |
| 네이버 플레이스 결과 | 24시간·가양역·전화 정보를 즉시 제시 | `.fact-rail`, `#visit` | 숫자 상승/호버 | 가로 스냅 레일 | 390px capture |
| 원흥점 시설 아카이브 | 실제 공간 사진을 범주별 확인 | `.space-grid` | 탭 필터·이미지 줌 | 대표컷 우선, 2열 축소 | interaction test |
| 원흥점 코칭 흐름 | 상담부터 지속까지 단계화 | `.training-track` | 진행선 reveal | 세로 타임라인 | desktop/mobile capture |

## Signature composition and component
- Signature composition: 히어로 하단에 겹쳐지는 24H/EXIT 6/3F 증거 레일
- Signature component: 시간대에 맞는 운동 장면을 제안하는 DAY/NIGHT 공간 토글

## Motion storyboard
| Beat | Trigger | Elements | From → to | Duration/ease | Purpose | Reduced motion |
|---|---|---|---|---|---|---|
| Assemble Gayang | load | eyebrow, title, copy, CTA, fact rail | y 28/opacity 0 → rest | 700ms cubic-bezier | 핵심 장점 순서화 | 즉시 표시 |
| Reveal proof | section enter | headings, images, track line | y 24/scale .98 → rest | 600ms ease | 증거를 단계적으로 읽힘 | 즉시 표시 |
| Switch rhythm | click | day/night panel copy | opacity/translate | 300ms ease | 24시간 사용 맥락 전달 | 즉시 교체 |
| Control feedback | hover/focus | buttons/cards/filter | border/fill/translate | 180ms ease | 클릭 가능성 명확화 | 색상만 변경 |

## References
| Role | Source | Adapt | Do not copy |
|---|---|---|---|
| Structure/visual | https://1986fitnessk.github.io | 증거 중심 긴 호흡, 어두운 타이포그래피 | 원흥점 사진·카피·완전한 레이아웃 |
| Facts/media | 네이버 `1986피트니스 가양점` 검색 | 공개된 위치·시간·공간 특징 | 리뷰 문장·이벤트 가격·인물 식별 정보 |

## Tokens
- Font: Pretendard/system Korean sans, condensed-style numeric treatment
- Text colors: #f4f1e8, #a8a89f, #171914
- Surface colors: #0a0b09, #12140f, #e9eadf
- Accent and semantic colors: #a8b77a, #d6e69b
- Spacing steps: 8/12/20/32/56/96
- Radius: 0–6px
- Border and shadow: 1px rgba(255,255,255,.16), deep image overlay
- Motion: 180–700ms, translate/clip/opacity only

## Screen priorities
1. 24시간·가양역 6번 출구·지상 3층을 첫 화면에서 확인
2. 실제 공간과 운동 동선을 확인
3. 전화·네이버 지도 상담으로 전환

## Behavior that must remain unchanged
- 전화 링크와 네이버 지도 링크는 실제 공개 정보로 연결

## Anti-template decisions
- Generic pattern being rejected: 동일 크기 카드 묶음과 둥근 SaaS형 UI
- Project-specific replacement: 시간 축, 역 출구 숫자, 층수를 큰 그래픽 레일로 결합한 가양점 전용 구성

## Responsive and motion contract
- Desktop media behavior: 화면 전체 배경 크롭, 사진 아카이브 비대칭 12열
- Mobile media behavior: 인물 없는 공간 중심 크롭, 핵심 사진 우선, 숫자 레일 가로 스냅
- Scroll reveal grammar: 아래 24px에서 상승, 70ms stagger
- Reduced-motion fallback: 모든 요소 최종 상태 즉시 표시
- Text-clipping viewports: 320/360/390/430px에서 한글 제목과 버튼 줄바꿈 검증

## Verification captures
- Desktop first viewport: 구현 후 `artifacts/desktop-first.png`
- Desktop representative flow: 구현 후 `artifacts/desktop-full.png`
- Mobile first viewport: 구현 후 `artifacts/mobile-390.png`
- Signature motion: 브라우저에서 초기 조립, 시간대 토글, 시설 필터 상태를 순차 확인

## 2026-08-26 revision
- Direction update: 기존의 어두운 시네마틱 화면을 밝은 크림·라임·스카이블루 기반의 지상층 분위기로 전환
- Current media: 2026년 7월 공개된 가양점 유산소 공간 사진으로 히어로와 공간 섹션 교체
- News implementation: 최근 공간 업데이트, 6주년 혜택 안내, OT 신청을 서로 다른 규모의 뉴스 모듈로 구성
- Trainer implementation: 사용자가 제공한 5개 프로필 이미지를 선택형 코칭 팀 컴포넌트에 매핑
- OT state: 트레이너 선택 → 신청 모달 → 필수값 검증 → 확인 상태. 현재 시안은 외부 전송 없음
- Verified: 데스크톱 1440px, 모바일 390px 무수평 오버플로, 전체 이미지 로딩, 트레이너 전환, OT 모달 선택값 전달
- Follow-up refinement: 소식 영역을 시설 업데이트와 6주년 이벤트의 2개 모듈로 축소하고 중복 OT 카드를 제거
- Trainer order: 김민형 → 이재영 → 김도윤 → 조근이 → 박소현
- Trainer media: 모든 프로필 원본을 `contain`으로 표시하고 모바일에서는 원본 비율(2480:1748)을 유지하도록 변경
- Playwright evidence: 1440px 및 390px에서 김민형 전체 프로필 노출, 이재영 탭 전환과 순서 매핑 확인
# 2026-08-26 시설 사진 업데이트

- 직접 제공된 가양점 시설 사진을 선명도·노출·화이트밸런스 중심으로 보정해 적용했다.
- 가장 넓고 밝게 공간이 보이는 유산소·리셉션 전경을 메인 비주얼로 선정했다.
- 시설 섹션은 유산소, 프리웨이트, 머신, 랙, 스트레칭, 회원 아카이브가 한 흐름으로 보이는 비대칭 갤러리로 확장했다.
- 트레이너 소개 이미지는 원본 비율(2480:1748)의 고정 프레임에 맞춰 불필요한 위아래 여백 없이 전체 포스터가 보이도록 조정했다.

## 2026-08-26 로고·지도·모바일 보강

- 헤더의 1986 워드마크 앞에 시설 사진에서 반복 확인되는 4분할 기하 심볼을 단색 SVG로 배치한다.
- 방문 안내에는 확인된 주소 좌표를 사용한 반응형 지도를 넣고 네이버 지도 상세 화면으로 이어지는 명확한 보조 행동을 둔다.
- 모바일 헤더에서는 작은 영문 지점명을 숨겨 로고, 1986, OT 버튼이 충돌하지 않게 하며 지도는 한 열 310px 높이로 변환한다.

## 2026-08-26 밝은 버전 모바일 가독성 보정

- 구조와 기능은 유지하고 모바일 제목을 37–43px 범위, 본문을 15px 이상으로 재조정해 긴 한글이 과도하게 끊기지 않게 한다.
- 순백·순흑 대비를 줄이고 크림, 세이지, 소프트 차콜을 사용한다. 라임은 채도와 명도를 낮춰 넓은 면에서도 눈부시지 않게 한다.
- 모바일 버튼은 최소 52px 높이와 충분한 좌우 여백을 유지하고, 섹션 간격은 72px 기준으로 압축한다.
- 히어로 사진 위 흰색 그라데이션을 부드럽게 조정해 사진과 글자가 분리되지 않게 한다.
