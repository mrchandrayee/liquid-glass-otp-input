const fields = [...document.querySelectorAll(".otp-digit")];
const form = document.querySelector("#otpForm");
const message = document.querySelector("#otpMessage");
const success = document.querySelector("#successState");
const stage = document.querySelector("#otpStage");

const DEMO_OTP = "123456"; // Demonstration only; replace with backend verification.

function codeValue() {
  return fields.map(field => field.value).join("");
}

function resetFields() {
  fields.forEach(field => {
    field.value = "";
    field.classList.remove("filled");
  });
  fields[0].focus();
}

function verify() {
  const code = codeValue();
  if (code.length !== 6) return;

  if (code === DEMO_OTP) {
    message.textContent = "";
    form.hidden = true;
    success.hidden = false;
  } else {
    fields.forEach(field => field.value = "");
    fields.forEach(field => field.classList.remove("filled"));
    fields[0].focus();
    fields[0].parentElement.classList.add("invalid");
    message.textContent = "Invalid OTP — please try again";
  }
}

fields.forEach((field, index) => {
  field.addEventListener("input", () => {
    field.value = field.value.replace(/\D/g, "").slice(-1);
    field.classList.toggle("filled", Boolean(field.value));
    fields[0].parentElement.classList.remove("invalid");
    message.textContent = "";
    if (field.value && index < fields.length - 1) fields[index + 1].focus();
    if (codeValue().length === 6) verify();
  });

  field.addEventListener("keydown", event => {
    if (event.key === "Backspace" && !field.value && index > 0) fields[index - 1].focus();
    if (event.key === "ArrowLeft" && index > 0) fields[index - 1].focus();
    if (event.key === "ArrowRight" && index < fields.length - 1) fields[index + 1].focus();
    if (event.key === "Escape") {
      message.textContent = "";
      resetFields();
    }
  });

  field.addEventListener("paste", event => {
    event.preventDefault();
    const pasted = (event.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "").slice(0, 6);
    pasted.split("").forEach((digit, i) => {
      fields[i].value = digit;
      fields[i].classList.toggle("filled", Boolean(digit));
    });
    fields[Math.min(pasted.length, 5)].focus();
    if (pasted.length === 6) verify();
  });
});

success.addEventListener("click", () => {
  success.hidden = true;
  form.hidden = false;
  message.textContent = "";
  resetFields();
});
