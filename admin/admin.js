import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL } from "../supabase-config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const loginView = document.querySelector("#login-view");
const dashboardView = document.querySelector("#dashboard-view");
const logoutButton = document.querySelector("#logout");
const list = document.querySelector("#application-list");
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]);

async function showSession(session) {
  const isAdmin = session?.user?.email?.toLowerCase() === ADMIN_EMAIL;
  loginView.hidden = isAdmin;
  dashboardView.hidden = !isAdmin;
  logoutButton.hidden = !isAdmin;
  if (isAdmin) await loadApplications();
}

async function loadApplications() {
  document.querySelector("#list-message").textContent = "불러오는 중…";
  const { data, error } = await supabase.from("ot_applications").select("*").order("created_at", { ascending:false });
  if (error) { document.querySelector("#list-message").textContent = "신청 내역을 불러오지 못했습니다."; return; }
  document.querySelector("#list-message").textContent = "";
  document.querySelector("#new-count").textContent = data.filter((item) => item.status === "new").length;
  list.innerHTML = data.length ? data.map((item) => `
    <article class="application">
      <div><h2>${escapeHtml(item.applicant_name)}</h2><a class="phone" href="tel:${escapeHtml(item.phone)}">${escapeHtml(item.phone)}</a><br><time>${new Date(item.created_at).toLocaleString("ko-KR")}</time></div>
      <div><p><b>담당 트레이너</b> ${escapeHtml(item.trainer)}</p><p><b>운동 목적</b> ${escapeHtml(item.goal)}</p></div>
      <p><b>희망 시간</b><br>${escapeHtml(item.preferred_time)}</p>
      <select data-id="${item.id}" aria-label="${escapeHtml(item.applicant_name)} 처리 상태"><option value="new" ${item.status === "new" ? "selected" : ""}>새 신청</option><option value="contacted" ${item.status === "contacted" ? "selected" : ""}>연락 완료</option><option value="complete" ${item.status === "complete" ? "selected" : ""}>상담 완료</option></select>
    </article>`).join("") : '<p class="empty">아직 접수된 OT 신청이 없습니다.</p>';
}

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get("email").toString().trim().toLowerCase();
  const message = document.querySelector("#login-message");
  if (email !== ADMIN_EMAIL) { message.textContent = "등록된 관리자 이메일만 로그인할 수 있습니다."; return; }
  const { error } = await supabase.auth.signInWithOtp({ email, options:{ emailRedirectTo:new URL("./",location.href).href } });
  message.textContent = error ? "로그인 링크를 보내지 못했습니다." : "이메일로 보낸 로그인 링크를 확인해주세요.";
});

list.addEventListener("change", async (event) => {
  const select = event.target.closest("select[data-id]");
  if (!select) return;
  select.disabled = true;
  const { error } = await supabase.from("ot_applications").update({ status:select.value }).eq("id",select.dataset.id);
  select.disabled = false;
  if (error) alert("상태를 저장하지 못했습니다."); else loadApplications();
});

document.querySelector("#refresh").addEventListener("click", loadApplications);
logoutButton.addEventListener("click", async () => { await supabase.auth.signOut(); showSession(null); });
supabase.auth.onAuthStateChange((_event, session) => showSession(session));
const { data:{ session } } = await supabase.auth.getSession();
showSession(session);
