/**
 * Jason K. Dy, SJ — Artist Portfolio
 * Shared JS: mobile nav toggle + scroll reveal animations
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile Nav Toggle ── */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll Reveal ── */
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net — reveal anything still hidden after 3.5s
    setTimeout(function () {
      revealEls.forEach(function (el) {
        if (!el.classList.contains('revealed')) {
          el.classList.add('revealed');
        }
      });
    }, 3500);
  } else {
    // No IntersectionObserver — reveal all immediately
    revealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ── Active Nav Highlight ── */
  // Already handled server-side via class="active" on each page

});
