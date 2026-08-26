# 체크포인트

## scope-check — 완료

- 사용자: OT 신청자, 관리자 `junh1415@naver.com`
- 입력: 이름, 연락처, 트레이너, 목적, 희망 시간, 개인정보 동의
- 출력: 접수 완료 화면과 로그인 전용 관리자 목록
- 안전 경계: 공개 코드에 비밀키 없음, RLS로 관리자 조회 제한

## environment-check — 완료

- 기존 정적 HTML/CSS/JavaScript와 GitHub Pages 유지
- Supabase 인증·데이터베이스만 추가

## first-screen — 완료

- `/admin/` 이메일 로그인 및 모바일 신청 목록 화면 추가

## core-function — 완료

- OT 신청 데이터베이스 저장
- 관리자 이메일 한 개만 조회·상태 변경 가능

## error-mobile — 완료

- 필수 입력, 전화번호 형식, 길이 제한, 접수 오류 메시지 적용
- 760px 이하에서 신청 카드가 한 열로 변경

## build-check — 완료

- `node --check script.js`
- `node --check ot-submit.js`
- `node --check admin/admin.js`
- `git diff --check`
- 익명 조회 요청 401 확인

## release-handoff — 완료

- GitHub Pages 배포 성공
- 공개 `/admin/`에서 비로그인 상태에는 로그인 화면만 표시됨
- 관리자 모바일 390px 화면에서 가로 넘침 없음
- 공개 메인 OT 양식에서 개인정보 동의와 새 접수 문구 확인
