(function() {
  const init = () => {
    document.querySelectorAll(".annie-nav-toggle").forEach((toggle) => {
      if (toggle.dataset.navBound) return;
      toggle.dataset.navBound = "1";
      let root = toggle.parentElement;
      while (root && !root.querySelector(".annie-nav-panel")) root = root.parentElement;
      const panel = root ? root.querySelector(".annie-nav-panel") : null;
      if (!panel) return;
      const setOpen = (open) => {
        panel.classList.toggle("hidden", !open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };
      toggle.addEventListener("click", () => setOpen(panel.classList.contains("hidden")));
      panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setOpen(false);
      });
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();