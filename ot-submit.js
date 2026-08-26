import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./supabase-config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const form = document.querySelector("#ot-form");
const success = document.querySelector(".form-success");
const submitButton = form?.querySelector('button[type="submit"]');

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const trainer = document.querySelector("#selected-trainer").textContent.trim();
  const errorBox = document.querySelector("#ot-error");
  errorBox.hidden = true;
  submitButton.disabled = true;
  submitButton.textContent = "접수 중…";

  const { error } = await supabase.from("ot_applications").insert({
    applicant_name: String(data.get("name") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    trainer,
    goal: String(data.get("goal") || "").trim(),
    preferred_time: String(data.get("time") || "").trim(),
  });

  submitButton.disabled = false;
  submitButton.textContent = "신청하기 ↗";
  if (error) {
    errorBox.hidden = false;
    errorBox.textContent = "접수하지 못했습니다. 입력 내용을 확인한 뒤 다시 시도해주세요.";
    return;
  }
  form.reset();
  form.hidden = true;
  success.hidden = false;
});
