const nav = `
<nav id="mainNav" class="fixed top-0 left-0 right-0 px-6 py-5 font-mono tracking-wide"
  style="border-bottom: var(--border); background: var(--bg); z-index: 30;">
 
  <div class="max-w-5xl mx-auto flex items-center justify-between">
 
    <a href="index.html"
      class="nav-link font-semibold"
      style="color:var(--muted)">
      [ HOST: Spencer_Feldmann<span class="cursor">_</span> ]
    </a>
 
    <div class="flex items-center gap-5 text-sm"
      style="color:var(--muted)">
      <a class="nav-link" href="archive.html">[ ARCHIVE ]</a>
      <a class="nav-link" href="profile.html">[ PROFILE ]</a>
      <a class="nav-link" href="arcade.html">[ ARCADE ]</a>
    </div>
 
  </div>
</nav>
`;
 
const hud = `
<div id="themeBar"
  class="fixed bottom-0 left-0 right-0 px-6 font-mono text-sm select-none"
  style="border-top: var(--border); background: var(--bg); padding-top: 12px; padding-bottom: 12px;">
 
  <div class="max-w-5xl mx-auto flex items-center justify-between">
 
    <span style="color:var(--muted)">
      > SYSTEM STATUS: ONLINE
    </span>
 
    <div>
      <span class="theme-option theme-active" data-theme="mono">[●] MONO</span>
      <span class="theme-option ml-4" data-theme="amber">[ ] AMBER</span>
      <span class="theme-option ml-4" data-theme="matrix">[ ] MATRIX</span>
      <span class="theme-option ml-4" data-theme="light">[ ] LIGHT</span>
    </div>
 
  </div>
</div>
`;
 
document.getElementById("nav").innerHTML = nav;
document.getElementById("hud").innerHTML = hud;
 
// highlight the active nav link based on current page
const page = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#nav .nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (href === page) {
    link.classList.add("active-nav");
    link.style.color = "var(--accent)";
  }
});
 