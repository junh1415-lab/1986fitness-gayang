const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
if (reduced) reveals.forEach((el) => el.classList.add("visible"));
else {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  reveals.forEach((el) => io.observe(el));
}

const trainers = [
  {
    name: "김민형",
    role: "SENIOR TRAINER",
    image: "assets/trainer-kim-minhyung.png",
    quote:
      "“몸의 불균형과 통증을 세심하게 확인하고 목적에 맞는 운동을 연결합니다.”",
    focus: "통증 케어 · 재활 · 체형 불균형",
    profile:
      "NASM CPT, 기능해부학, 임산부 운동처방, 골반불균형·디스크·신경질환 개선 교육 이수, 2023 GBBF 피지크 TOP2",
  },
  {
    name: "이재영",
    role: "PERSONAL TRAINER",
    image: "assets/trainer-lee-jaeyoung.png",
    quote:
      "“근막 이완과 영양, 움직임을 함께 살펴 지속 가능한 변화를 설계합니다.”",
    focus: "근막 이완 · 영양 관리 · 체형 평가",
    profile:
      "스포츠마사지 2급, 비만관리사 1급, FMS 과정, 근막이완·통증케어 교육 이수, 2025 Mr. Ms. 미스터 서울 TOP6",
  },
  {
    name: "김도윤",
    role: "PERSONAL TRAINER",
    image: "assets/trainer-kim-doyoon.png",
    quote:
      "“기능해부학과 훈련 설계를 바탕으로 강하고 균형 잡힌 몸을 만듭니다.”",
    focus: "보디빌딩 · 기능해부학 · 영양",
    profile:
      "생활스포츠지도사 2급 보디빌딩, KARPE CPT·CES, KACEP Nutrition, 2022 ICN 클래식피지크 TOP2",
  },
  {
    name: "조근이",
    role: "PERSONAL TRAINER",
    image: "assets/trainer-jo-geunyi.png",
    quote:
      "“운동을 배움의 과정으로 만들고, 목표까지 꾸준히 갈 수 있게 지도합니다.”",
    focus: "바디프로필 · 보디빌딩 · 체력 향상",
    profile:
      "명지대 체육학·체육교육 전공, 중등 정교사(체육), 생활스포츠지도사 2급 보디빌딩, 2024 WNGP 비키니 TOP1",
  },
  {
    name: "박소현",
    role: "PERSONAL TRAINER",
    image: "assets/trainer-park-sohyun.png",
    quote:
      "“통증과 움직임을 이해하고, 몸이 편안해지는 운동부터 함께 시작합니다.”",
    focus: "움직임 평가 · 통증 케어 · 스트레칭",
    profile:
      "기초해부학·생리학, PMS/고관절 통증, 근막통증·동작분석, FMS 교육 이수",
  },
];
const tabs = document.querySelectorAll(".trainer-tabs button");
tabs.forEach((btn) =>
  btn.addEventListener("click", () => {
    const i = Number(btn.dataset.index),
      t = trainers[i];
    tabs.forEach((b) => b.classList.toggle("active", b === btn));
    const image = document.querySelector("#trainer-image");
    image.style.opacity = "0";
    setTimeout(() => {
      image.src = t.image;
      image.alt = `${t.name} 트레이너 프로필`;
      image.style.opacity = "1";
    }, 160);
    document.querySelector("#trainer-count").textContent =
      `${String(i + 1).padStart(2, "0")} / 05`;
    document.querySelector("#trainer-role").textContent = t.role;
    document.querySelector("#trainer-name").textContent = t.name;
    document.querySelector("#trainer-quote").textContent = t.quote;
    document.querySelector("#trainer-focus").textContent = t.focus;
    document.querySelector("#trainer-profile").textContent = t.profile;
    const ot = document.querySelector("#trainer-ot");
    ot.dataset.trainer = t.name;
    ot.textContent = `${t.name} 트레이너 OT 신청 ↗`;
  }),
);

const dialog = document.querySelector("#ot-dialog"),
  form = document.querySelector("#ot-form"),
  success = document.querySelector(".form-success");
document.addEventListener("click", (e) => {
  const button = e.target.closest(".ot-open");
  if (!button) return;
  document.querySelector("#selected-trainer").textContent =
    button.dataset.trainer;
  document.querySelector("#ot-error").hidden = true;
  form.hidden = false;
  success.hidden = true;
  dialog.showModal();
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
