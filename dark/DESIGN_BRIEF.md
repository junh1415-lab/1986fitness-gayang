# Design Brief

## Product job
가양역 인근 방문자가 실제 시설, 운영 정보, 트레이너를 확인하고 OT 또는 방문 상담을 선택한다.

## Direction
검은 공간 위에 실제 시설 사진을 크게 겹치고, 좁고 굵은 한글 제목과 산성 라임 좌표선을 사용해 야간에도 집중되는 트레이닝 에디토리얼로 구성한다.

## Brand reading
- Immutable identity: 제공된 1986 Fitness 공식 로고, 가양점명, 실제 시설·트레이너 사진
- Repeatable shapes/materials: 직선 프레임, 큰 순번, 금속성 회색, 라임 좌표점
- Existing inconsistencies to remove: 밝은 버전의 크림 배경, 친근한 카드 톤, 설명적인 긴 제목
- Media provenance: 사용자가 제공한 시설 및 트레이너 사진만 사용

## Reference synthesis
- Structure comes from: 현재 밝은 가양점 버전의 검증된 정보 순서
- Interaction comes from: 현재 트레이너 탭과 OT dialog의 동작
- Visual tone comes from: 2026-08-26 확인한 원흥점 첫 화면의 검은 배경, 얇은 선, 작은 영문 라벨
- Hook/copy energy comes from: 실제 24시간 운영, 가양역 6번 출구, 지상 3층이라는 확인된 사실
- Motion/media behavior comes from: 기존 IntersectionObserver와 탭 전환을 더 짧고 수평적인 움직임으로 재해석
- The final screen will not copy: 원흥점 문구, 원흥점 사진, 전체 레이아웃, 메뉴 구조

## Reference evidence
- Exact page/section/state inspected: https://1986fitnessk.github.io/ 의 데스크톱 전체 화면과 첫 화면
- Desktop/mobile behavior observed: 검은 첫 화면, 작은 좌측 정렬 로고, 사진과 여백의 강한 명암 대비; 모바일은 긴 스크롤에서 밀도가 낮아지는 위험 확인

## Reference implementation map
| Reference evidence | Extracted principle | Local component | Motion/state | Mobile translation | Acceptance evidence |
|---|---|---|---|---|---|
| 원흥점 첫 화면 | 검은 면과 얇은 선, 작은 영문 좌표 | dark hero/header | 사진 확대와 제목 수평 진입 | 사진을 상단 46svh로 분리 | desktop/mobile hero capture |
| 밝은 가양점 시설 갤러리 | 실제 공간을 규모 차이로 제시 | proof-grid | hover zoom과 캡션 이동 | 가로 스냅 레일 | 390px facility capture |
| 밝은 가양점 트레이너 탭 | 한 명씩 선택하는 비교 흐름 | trainer-console | 선택선·사진·텍스트 동시 전환 | 탭 가로 스크롤, 이미지 우선 | trainer interaction capture |

## Signature composition and component
- Signature composition: 비대칭 검은 히어로 위에 라임 좌표 레일과 큰 시설 사진이 교차하는 NIGHT SHIFT 구성
- Signature component: 트레이너 프로필을 선택형 콘솔처럼 보여주는 trainer-console

## Motion storyboard
| Beat | Trigger | Elements | From → to | Duration/ease | Purpose | Reduced motion |
|---|---|---|---|---|---|---|
| 야간 공간 점등 | load | hero photo, grid line, headline | 어둠/확대 → 선명/정위치 | 900ms ease-out | 장소와 톤을 즉시 각인 | 최종 상태 고정 |
| 증거 전개 | section entry | label, title, media | x 24px/투명 → 제자리 | 600ms ease | 정보 순서 안내 | 최종 상태 고정 |
| 코치 선택 | tab click | underline, poster, copy | 흐림/축소 → 선명 | 350ms ease | 선택 결과 연결 | 즉시 교체 |
| 시설 탐색 | hover/focus | image, caption | 1 → 1.025, y 0 → -2 | 220–700ms | 클릭 가능성과 깊이 표현 | 변화 없음 |

## References
| Role | Source | Adapt | Do not copy |
|---|---|---|---|
| Structure | 현재 밝은 가양점 버전 | 정보와 행동 순서 | 밝은 색과 카드 외형 |
| Visual | https://1986fitnessk.github.io/ | 검은 면, 작은 좌표 라벨, 얇은 선 | 원흥점 카피·사진·배치 |
| Interaction | 현재 가양점 trainer tabs/dialog | 검증된 선택·신청 동작 | 밝은 버튼 스타일 |

## Tokens
- Font: Pretendard/Noto Sans KR 계열, 제목 800–900, 본문 400–600
- Text colors: #f3f0e8, #8d9188
- Surface colors: #080a08, #111410, #191d17
- Accent and semantic colors: #c8f25f
- Spacing steps: 8, 12, 20, 32, 56, 96, 132
- Radius: 0–2px
- Border and shadow: rgba(255,255,255,.16) 1px, 그림자 최소화
- Motion: 180ms 피드백, 600ms reveal, 900ms hero

## Screen priorities
1. 가양점이 24시간 운영되는 실제 운동 공간임을 전달
2. 시설과 트레이너를 빠르게 비교
3. OT 또는 지도 방문으로 전환

## Behavior that must remain unchanged
- 트레이너 순서와 프로필 데이터, OT dialog, 전화·네이버 지도 링크

## Anti-template decisions
- Generic pattern being rejected: 동일 크기 카드가 반복되는 일반 헬스장 랜딩페이지
- Project-specific replacement: 야간 시간표처럼 읽히는 좌표 레일, 규모가 다른 시설 증거 프레임, 코치 콘솔

## Responsive and motion contract
- Desktop media behavior: 히어로 62% 사진과 38% 카피, 시설 비대칭 그리드
- Mobile media behavior: 히어로 사진을 상단 46svh 증거 화면으로 분리하고 시설은 가로 스냅 레일로 전환
- Scroll reveal grammar: 제목·라벨은 x축, 사진은 scale과 opacity를 함께 사용
- Reduced-motion fallback: 모든 요소가 즉시 최종 상태로 표시
- Text-clipping viewports: 320, 360, 390, 430px에서 제목과 버튼 가로 넘침 금지

## Verification captures
- Before: output/playwright/bright-desktop.png, output/playwright/bright-mobile.png
- After: output/playwright/dark-desktop.png, output/playwright/dark-mobile.png
- Interaction: output/playwright/dark-trainer.png
