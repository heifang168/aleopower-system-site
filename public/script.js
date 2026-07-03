const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-rfq-form]");
const faqAccordion = document.querySelector("[data-faq-accordion]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      "New project inquiry from ALEO Power homepage MVP",
      "",
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Country / Region: ${data.get("country") || ""}`,
      "",
      "Project Requirement:",
      data.get("message") || "",
    ];
    const subject = encodeURIComponent("Mobile Solar Power Container Project Inquiry");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:Jen@aleopower.com?cc=alan@aleopower.com&subject=${subject}&body=${body}`;
  });
}

if (faqAccordion) {
  faqAccordion.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-question");
    if (!button) return;
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}
