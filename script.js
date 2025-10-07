// Portfolio interactions (placeholder data)

(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const yearEl = document.getElementById("year");
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme persistence
  const THEME_KEY = "pref-theme";
  function applyTheme(t) {
    root.classList.remove("theme-light", "theme-dark");
    if (t === "light") root.classList.add("theme-light");
    if (t === "dark") root.classList.add("theme-dark");
  }
  function getSystemPref() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved || getSystemPref());
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.classList.contains("theme-dark")
        ? "dark"
        : root.classList.contains("theme-light")
        ? "light"
        : getSystemPref();
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // Mobile nav
  function setNav(open) {
    if (!navMenu) return;
    navMenu.classList.toggle("open", !!open);
    if (navToggle) navToggle.setAttribute("aria-expanded", String(!!open));
    document.body.style.overflow =
      open && window.innerWidth < 820 ? "hidden" : "";
  }
  if (navToggle) {
    navToggle.addEventListener("click", () =>
      setNav(!navMenu.classList.contains("open"))
    );
  }
  navMenu
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setNav(false)));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", id);
      }
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  // Contact form (demo validation only)
  const form = document.getElementById("contact-form");
  function showError(input, msg) {
    const field = input.closest(".field");
    const err = field?.querySelector(".error");
    if (err) err.textContent = msg || "";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  }
  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
  function toastShow(message) {
    if (!toast) return;
    toastText.textContent = message;
    toast.hidden = false;
    toast.style.opacity = "0";
    requestAnimationFrame(() => {
      toast.style.transition = "opacity .2s ease, transform .2s ease";
      toast.style.transform = "translateX(-50%) translateY(0)";
      toast.style.opacity = "1";
    });
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.hidden = true;
      }, 200);
    }, 1800);
  }
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    let ok = true;
    if (name.length < 2) {
      showError(form.name, "Please enter at least 2 characters.");
      ok = false;
    } else showError(form.name, "");
    if (!validateEmail(email)) {
      showError(form.email, "Please enter a valid email.");
      ok = false;
    } else showError(form.email, "");
    if (message.length < 10) {
      showError(form.message, "Please enter at least 10 characters.");
      ok = false;
    } else showError(form.message, "");

    if (!ok) return;
    // Demo only
    toastShow("Thanks! This is a demo — no email was sent.");
    form.reset();
  });
})();
