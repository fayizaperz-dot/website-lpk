/* ==========================================================================
   main.js — Interaksi umum di semua halaman (navigasi, dropdown mobile)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if(toggle && nav){
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  // Dropdown untuk mode mobile (klik alih-alih hover)
  document.querySelectorAll(".main-nav > ul > li").forEach(li => {
    const dropdown = li.querySelector(".dropdown");
    if(!dropdown) return;
    const link = li.querySelector(":scope > a");
    link.addEventListener("click", (e) => {
      if(window.innerWidth <= 720){
        e.preventDefault();
        li.classList.toggle("open");
      }
    });
  });

  // Tandai tautan navigasi aktif berdasarkan nama file saat ini
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a.nav-link").forEach(a => {
    const href = a.getAttribute("href");
    if(href === current) a.classList.add("active");
  });

  // Set tahun berjalan di footer (jika ada elemen #tahun-berjalan)
  document.querySelectorAll(".tahun-berjalan").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Reveal animasi ringan saat elemen .reveal masuk viewport
  const revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && revealEls.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.12 });
    revealEls.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      io.observe(el);
    });
  }
});
